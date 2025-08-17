"use client";

import React, { useState, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUpload } from "lucide-react";

type Feature = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: File | null;
};

export default function OurStorySectionsContent02() {
  const [features, setFeatures] = useState<Feature[]>([
    { title: "", subtitle: "", buttonText: "", buttonLink: "", image: null },
    { title: "", subtitle: "", buttonText: "", buttonLink: "", image: null },
  ]);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isDraggingIndex, setIsDraggingIndex] = useState<number | null>(null);

  // Update text fields
  const handleInputChange = (
    index: number,
    field: keyof Omit<Feature, "image">,
    value: string
  ) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  // Handle file change
  const handleFileChange = (index: number, file: File | null) => {
    const updated = [...features];
    updated[index].image = file;
    setFeatures(updated);
  };

  // Drag events
  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingIndex(index);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingIndex(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingIndex(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(index, e.dataTransfer.files[0]);
    }
  }, []);

  const handleUploadClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  const handleSave = () => {
    console.log("Saved Features:", features);
    alert("Form saved! Check console for details.");
  };

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm space-y-10">
        {features.map((feature, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Features</h2>

            {/* Title */}
            <div>
              <Label
                htmlFor={`title-${index}`}
                className="text-base font-medium text-gray-800 mb-2 block"
              >
                Title
              </Label>
              <Input
                id={`title-${index}`}
                value={feature.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
                placeholder="Welcome"
                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>

            {/* Subtitle + Upload Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor={`subtitle-${index}`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Subtitle
                </Label>
                <Textarea
                  id={`subtitle-${index}`}
                  value={feature.subtitle}
                  onChange={(e) =>
                    handleInputChange(index, "subtitle", e.target.value)
                  }
                  placeholder="Write here"
                  className="w-full h-40 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>

              <div>
                <Label className="text-base font-medium text-gray-800 mb-2 block">
                  Upload Image
                </Label>
                <div
                  className={`flex flex-col items-center justify-center p-8 border-2 ${
                    isDraggingIndex === index
                      ? "border-red-600"
                      : "border-gray-300"
                  } border-dashed rounded-lg cursor-pointer  transition-colors duration-200`}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, index)}
                  onClick={() => handleUploadClick(index)}
                >
                  <CloudUpload className="w-10 h-10 text-gray-400 mb-3" />
                  <p className="text-gray-600 text-sm text-center ">
                    <span className="text-red-600 font-semibold">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-gray-500 text-xs text-center mt-1">
                    SVG, PNG, JPG or GIF (max. 800×400px)
                  </p>
                  <input
                    type="file"
                    className="hidden "
               
                    onChange={(e) =>
                      handleFileChange(
                        index,
                        e.target.files?.[0] || null
                      )
                    }
                    accept=".svg,.png,.jpg,.jpeg,.gif"
                  />
                  {feature.image && (
                    <p className="mt-2 text-sm text-gray-700">
                      Selected file: {feature.image.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Button Text + Button Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor={`buttonText-${index}`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Button Text
                </Label>
                <Input
                  id={`buttonText-${index}`}
                  value={feature.buttonText}
                  onChange={(e) =>
                    handleInputChange(index, "buttonText", e.target.value)
                  }
                  placeholder="Get Started"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label
                  htmlFor={`buttonLink-${index}`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Button Link
                </Label>
                <Input
                  id={`buttonLink-${index}`}
                  value={feature.buttonLink}
                  onChange={(e) =>
                    handleInputChange(index, "buttonLink", e.target.value)
                  }
                  placeholder="Link"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleSave}
            className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md"
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
}
