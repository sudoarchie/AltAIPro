"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

interface FormInputs {
  imageFile: FileList;
  jsonInput: string;
}

const AltTextGenerator = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "json">("upload");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [generatedAltText, setGeneratedAltText] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormInputs>();

  const generateAltTextMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/generate-alt-text', {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        throw new Error('Failed to generate alt text');
      }

      return response.json();
    },
    onSuccess: (data) => {
      setGeneratedAltText(data.altText);
    }
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    if (activeTab === "upload" && data.imageFile?.[0]) {
      formData.append("image", data.imageFile[0]);
    } else if (activeTab === "json" && data.jsonInput) {
      formData.append("jsonData", data.jsonInput);
    }

    generateAltTextMutation.mutate(formData);
  };

  // Watch for file changes to update preview
  const imageFile = watch("imageFile");
  React.useEffect(() => {
    if (imageFile?.[0]) {
      if (imageFile[0].size > 5 * 1024 * 1024) {
        return;
      }
      const url = URL.createObjectURL(imageFile[0]);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  const handleJsonFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== "application/json") {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          setValue("jsonInput", content);
        } catch {
          console.error("Failed to read JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Alt Text Generator
          </h1>

          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("upload")}
              className={`px-4 py-2 rounded-lg font-medium ${activeTab === "upload"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              Upload Image
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("json")}
              className={`px-4 py-2 rounded-lg font-medium ${activeTab === "json"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              JSON Input
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {activeTab === "upload" ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    {...register("imageFile", {
                      validate: {
                        lessThan5MB: (files) =>
                          !files[0] || files[0].size <= 5 * 1024 * 1024 ||
                          "Image size should be less than 5MB",
                      },
                    })}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer block"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-500">
                        <p className="text-lg font-medium">
                          Drop your image here
                        </p>
                        <p className="text-sm">or click to browse</p>
                        <p className="text-xs mt-2">Maximum file size: 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="application/json"
                      onChange={handleJsonFileUpload}
                      className="hidden"
                      id="json-upload"
                    />
                    <label
                      htmlFor="json-upload"
                      className="cursor-pointer block"
                    >
                      <div className="text-gray-500">
                        <p className="text-lg font-medium">
                          Drop your JSON file here
                        </p>
                        <p className="text-sm">or click to browse</p>
                      </div>
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white"></div>
                    <textarea
                      {...register("jsonInput")}
                      placeholder='Or paste JSON data (e.g., {"subject": "mountain landscape", "description": "during sunset"})'
                      className="w-full h-32 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {(errors.imageFile || errors.jsonInput) && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">
                  {errors.imageFile?.message || errors.jsonInput?.message}
                </p>
              </div>
            )}

            {generateAltTextMutation.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">
                  {generateAltTextMutation.error.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={generateAltTextMutation.isPending}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generateAltTextMutation.isPending ? "Generating..." : "Generate Alt Text"}
            </button>

            {generatedAltText && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Generated Alt Text
                </h3>
                <p className="text-gray-700">{generatedAltText}</p>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(generatedAltText)
                  }
                  className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm"
                >
                  Copy to Clipboard
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AltTextGenerator;
