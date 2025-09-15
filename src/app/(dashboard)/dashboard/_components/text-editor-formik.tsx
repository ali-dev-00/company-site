"use client";

import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import HardBreak from "@tiptap/extension-hard-break";
import Heading, { type Level } from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Blockquote from "@tiptap/extension-blockquote";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Youtube from "@tiptap/extension-youtube";
import { Node, mergeAttributes } from "@tiptap/core";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Link as LinkIcon,
  List,
  ListOrdered,
  Indent,
  Outdent,
  Image as ImageIcon,
  Quote,
  
  Video as VideoIcon,
  RotateCcw,
  RotateCw,
} from "lucide-react";

const COLORS = {
  paragraph: "#697586",
  heading: "#F6A50A",
  list: "#697586",
  callout: "#FFFBF0",
};

function darken(hex: string, pct: number): string {
  const num = parseInt(hex.replace(/^#/, ""), 16);
  const r = Math.round(((num >> 16) & 0xff) * (1 - pct / 100));
  const g = Math.round(((num >> 8) & 0xff) * (1 - pct / 100));
  const b = Math.round((num & 0xff) * (1 - pct / 100));
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

// Fixed Video node without content hole error
const Video = Node.create({
  name: "video",
  group: "block",
  selectable: true,
  draggable: true,
  addAttributes() {
    return {
      src: { default: null },
      controls: { default: true },
      style: { default: "max-width: 100%;" },
    };
  },
  parseHTML() {
    return [{ tag: "video" }];
  },
  renderHTML({ HTMLAttributes }) {
  return [
    "video",
    mergeAttributes(HTMLAttributes, {
      class: "tiptap-video", // ✅ Add this class for styling
    }),
  ];
  },
});

const Callout = Node.create({
  name: "callout",
  group: "block",
  content: "inline*",
  defining: true,
  addAttributes() {
    return {
      color: {
        default: COLORS.callout,
        parseHTML: (el) =>
          (el as HTMLElement).style.backgroundColor.match(/#([0-9a-f]{6})/)?.[0] ?? COLORS.callout,
        renderHTML: ({ color }) => {
          const border = darken(color, 10);
          return {
            style: `
              background-color: ${color}1A;
              border: 1px solid ${border};
            `,
          };
        },
      },
    };
  },
  parseHTML: () => [{ tag: "div.callout" }],
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { class: "callout p-3 rounded mb-4" }), 0];
  },
});

interface RichTextEditorProps {
  name: string;
  value: string;
  onChange: (content: string) => void;
  onBlur: () => void;
}

interface ToolbarItem {
  key: string;
  title: string;
  icon: React.ReactNode;
  action: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
}

export default function RichTextEditor({ value, onChange, onBlur }: RichTextEditorProps) {
  const [uploadProgress, setUploadProgress] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      HardBreak,
      Heading,
      Underline,
      Link,
      TextStyle,
      Color,
      Image,
      Blockquote,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Youtube,
      Callout,
      Video,
    ],
    content: value || "<p></p>",
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      editor.chain().focus().setColor(COLORS.paragraph).run();
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  // Keep editor content in sync when parent value changes (e.g., edit mode prefill)
  useEffect(() => {
    if (!editor) return;
    const next = value || "<p></p>";
    const current = editor.getHTML();
    if (next !== current) {
      editor.commands.setContent(next, { emitUpdate: false });
    }
  }, [value, editor]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleMediaUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     event.preventDefault();
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);

  // Use the Next.js API proxy route which forwards to backend /uploads/image
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `/api/uploads/image`, true);
    xhr.withCredentials = true;

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      setUploadProgress(0);
      console.log("Upload response:", xhr.responseText);
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const result = JSON.parse(xhr.responseText);
          const src = result.url;
          if (!src) {
            alert("Upload succeeded but no URL returned.");
            return;
          }
          if (file.type.startsWith("image/")) {
            editor?.chain().focus().setImage({ src }).run();
          } else if (file.type.startsWith("video/")) {
            editor
              ?.chain()
              .focus()
              .insertContent({
                type: "video",
                attrs: {
                  src,
                  controls: true,
                  style: "max-width: 100%;",
                },
              })
              .run();
          } else {
            alert("Unsupported file type");
          }
        } catch (e) {
          alert("Failed to parse upload response");
          console.error(e);
        }
      } else {
        alert(`Upload failed with status ${xhr.status}`);
      }
    };

    xhr.onerror = () => {
      setUploadProgress(0);
      alert("Upload failed. Please try again.");
    };

    xhr.send(formData);

    event.target.value = "";
  };

  const handleBlockTypeChange = useCallback(
    (level: string) => {
      if (!editor) return;
      const chain = editor.chain().focus().unsetColor();
      if (level === "") {
        chain.setParagraph().setColor(COLORS.paragraph).run();
      } else {
        chain.toggleHeading({ level: Number(level) as Level }).setColor(COLORS.heading).run();
      }
    },
    [editor]
  );

  const toolbarItems: ToolbarItem[] = useMemo(
    () => [
      {
        key: "bold",
        title: "Bold",
        icon: <Bold size={16} />,
        action: (e) => e.chain().focus().toggleBold().run(),
        isActive: (e) => e.isActive("bold"),
      },
      {
        key: "italic",
        title: "Italic",
        icon: <Italic size={16} />,
        action: (e) => e.chain().focus().toggleItalic().run(),
        isActive: (e) => e.isActive("italic"),
      },
      {
        key: "underline",
        title: "Underline",
        icon: <UnderlineIcon size={16} />,
        action: (e) => e.chain().focus().toggleUnderline().run(),
        isActive: (e) => e.isActive("underline"),
      },
      {
        key: "link",
        title: "Add/remove link",
        icon: <LinkIcon size={16} />,
        action: (e) => {
          const linkAttrs = e.getAttributes("link") as Record<string, unknown>;
          const prev = typeof linkAttrs?.href === "string" ? linkAttrs.href : "";
          const url = window.prompt("Enter link URL", prev);
          if (url === null) return;
          e.chain().focus()[url ? "setLink" : "unsetLink"]({ href: url }).run();
        },
        isActive: (e) => e.isActive("link"),
      },
      {
        key: "bulletList",
        title: "Bullet list",
        icon: <List size={16} />,
        action: (e) => e.chain().focus().unsetColor().toggleBulletList().setColor(COLORS.list).run(),
        isActive: (e) => e.isActive("bulletList"),
      },
      {
        key: "orderedList",
        title: "Numbered list",
        icon: <ListOrdered size={16} />,
        action: (e) => e.chain().focus().unsetColor().toggleOrderedList().setColor(COLORS.list).run(),
        isActive: (e) => e.isActive("orderedList"),
      },
      {
        key: "indent",
        title: "Indent",
        icon: <Indent size={16} />,
        action: (e) => e.chain().focus().sinkListItem("listItem").run(),
      },
      {
        key: "outdent",
        title: "Outdent",
        icon: <Outdent size={16} />,
        action: (e) => e.chain().focus().liftListItem("listItem").run(),
      },
      {
        key: "blockquote",
        title: "Toggle blockquote",
        icon: <Quote size={16} />,
        action: (e) => e.chain().focus().toggleBlockquote().run(),
        isActive: (e) => e.isActive("blockquote"),
      },
      {
        key: "image",
        title: "Insert image",
        icon: <ImageIcon size={16} />,
        action: (e) => {
          const url = window.prompt("Enter image URL");
          if (url) e.chain().focus().setImage({ src: url }).run();
        },
      },
      {
        key: "youtube",
        title: "Insert YouTube",
        icon: <VideoIcon size={16} />,
        action: (e) => {
          const url = window.prompt("Enter YouTube URL");
          if (url) e.chain().focus().setYoutubeVideo({ src: url }).run();
        },
      },
      {
        key: "uploadMedia",
        title: "Upload Media",
        icon: <>📁</>,
        action: () => {
          handleMediaUploadClick();
        },
      },
      {
        key: "callout",
        title: "Toggle callout",
        icon: <>🛈</>,
        action: (e) => e.chain().focus().toggleNode("callout", "paragraph").run(),
        isActive: (e) => e.isActive("callout"),
      },
      {
        key: "hardBreak",
        title: "Insert line break",
        icon: <>↵</>,
        action: (e) => e.chain().focus().setHardBreak().run(),
      },
      {
        key: "undo",
        title: "Undo",
        icon: <RotateCcw size={16} />,
        action: (e) => e.chain().focus().undo().run(),
      },
      {
        key: "redo",
        title: "Redo",
        icon: <RotateCw size={16} />,
        action: (e) => e.chain().focus().redo().run(),
      },
      {
        key: "emoji",
        title: "Insert emoji",
        icon: <>😄</>,
        action: (e) => {
          const emoji = window.prompt("Enter emoji, e.g. 😊");
          if (emoji) {
            e.chain().focus().insertContent(emoji).run();
          }
        },
      },
    ],
    []
  );

  if (!editor) return null;

  const btnClass = `
    inline-flex items-center justify-center
    h-8 w-8 p-0 rounded border border-gray-300
    bg-white text-gray-700 hover:bg-gray-100
    focus:outline-none focus:ring-2 focus:ring-red-600
    focus:ring-offset-1
  `;

  function getCurrentHeading(): string {
    if (!editor) {
      return "";
    }
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive("heading", { level: i })) return String(i);
    }
    return "";
  }

  return (
    <>
      {/* Upload progress bar and percentage */}
      {uploadProgress > 0 && (
        <>
          <div className="w-full bg-gray-300 rounded h-2 mb-1">
            <div
              className="bg-red-600 h-2 rounded transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <div className="text-right text-xs text-gray-600 mb-2">
            {uploadProgress}%
          </div>
        </>
      )}

      <div className="rich-editor-content mb-2 flex flex-wrap items-center gap-1">
        {/* Block type dropdown */}
        <select
          title="Block type"
          value={getCurrentHeading()}
          onChange={(e) => handleBlockTypeChange(e.target.value)}
          className="h-8 rounded border border-gray-300 bg-white px-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <option value="">Paragraph</option>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              Heading {n}
            </option>
          ))}
        </select>

        {/* Toolbar buttons */}
        {toolbarItems.map(({ key, title, icon, action, isActive }) => (
          <button
            key={key}
            title={title}
            type="button"
            onClick={() => action(editor)}
            className={`${btnClass} ${isActive?.(editor) ? "border-red-600 bg-red-600 text-black" : ""}`}
          >
            {icon}
          </button>
        ))}

        {/* Callout color picker */}
        {editor.isActive("callout") && (
          <input
            type="color"
            title="Callout color"
            className="h-8 w-8  cursor-pointer rounded border border-gray-300 p-0"
            value={(() => {
              const attrs = editor.getAttributes("callout") as Record<string, unknown>;
              return typeof attrs.color === "string" ? attrs.color : COLORS.callout;
            })()}
            onChange={(e) => editor.chain().focus().updateAttributes("callout", { color: e.target.value }).run()}
          />
        )}

        {/* Text color picker */}
        <input
          type="color"
          title="Text color"
          className="h-8 w-8 cursor-pointer rounded border border-gray-300 p-0"
          value={editor.getAttributes("textStyle").color || COLORS.paragraph}
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          style={{ display: "none" }}
           onClick={(e) => e.stopPropagation()} 
          onChange={handleFileChange}
        />
      </div>

      <EditorContent
        editor={editor}
        onBlur={onBlur}
        className="rt-editor prose-sm max-h-[250px] overflow-y-auto max-w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-600 prose-li:mb-[5px] prose-li:mt-[5px]"
      />
    </>
  );
}
