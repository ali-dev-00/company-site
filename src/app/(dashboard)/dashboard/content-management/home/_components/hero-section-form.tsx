"use client";

import React, { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FileUpload from "../../_components/FIleUpload";
import { getSiteContent, saveHomeHeroSection, uploadHeroImage, persistHomeHeroToServer } from "@/services/site-content.service";
import Toast from "@/components/ui/toast";
import type { HomeHeroSection } from "@/types/content";

export default function HomeHeroContentForm() {
  const initial = useMemo<HomeHeroSection>(() => getSiteContent().HomeHeroSection as HomeHeroSection, []);
  const [formData, setFormData] = useState<HomeHeroSection>({ ...initial });
  const baselineRef = useRef<HomeHeroSection>({ ...initial });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [toastKey, setToastKey] = useState(0);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setToastKey((k) => k + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value } as HomeHeroSection));
  };

  const handleFileSelect = async (file: File | null) => {
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadHeroImage(file);
      setFormData((prev) => ({ ...prev, backgroundImage: url }));
      showToast("success", "Image uploaded successfully");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Persist to content.json via API and update local override
      const saved = await persistHomeHeroToServer(formData);
      if (saved) {
        saveHomeHeroSection(saved);
        baselineRef.current = { ...saved };
        setFormData({ ...saved });
        showToast("success", "Content updated successfully");
      } else {
        showToast("error", "Failed to save content");
      }
    } finally {
      setSaving(false);
    }
  };

  const isDirty =
    formData.title !== baselineRef.current.title ||
    formData.subtitle !== baselineRef.current.subtitle ||
    formData.description !== baselineRef.current.description ||
    formData.backgroundImage !== baselineRef.current.backgroundImage;

  return (
    <section className="px-6 py-2">
      {toast && <Toast key={toastKey} message={toast.message} type={toast.type} />}
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
              Title
            </Label>
            <Input id="title" value={formData.title} onChange={handleInputChange} placeholder="Welcome" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div>
            <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
              Subtitle
            </Label>
            <Textarea id="subtitle" value={formData.subtitle} onChange={handleInputChange} placeholder="Write here" className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div>
            <Label htmlFor="description" className="text-base font-medium text-gray-800 mb-2 block">
              Description
            </Label>
            <Textarea id="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <FileUpload label="Upload Background Image" onFileSelect={handleFileSelect} previewUrl={formData.backgroundImage} uploading={uploading} />

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} disabled={saving || uploading || !isDirty} className="bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
