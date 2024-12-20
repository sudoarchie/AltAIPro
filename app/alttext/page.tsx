"use client";
import React, { useState, useCallback } from "react";

const AltTextGenerator = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "json">("upload");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [jsonInput, setJsonInput] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [generatedAltText, setGeneratedAltText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          setError("Image size should be less than 5MB");
          return;
        }

        setImageFile(file);
        setError("");
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        // Clean up old preview URL
        return () => URL.revokeObjectURL(url);
      }
    },
    []
  );

  const handleJsonInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(event.target.value);
    setError("");
  };

  const generateAltText = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call - replace with actual image processing logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (activeTab === "upload" && imageFile) {
        setGeneratedAltText(
          "A high-resolution photograph showing " +
            imageFile.name.split(".")[0].replace(/-/g, " ")
        );
      } else if (activeTab === "json" && jsonInput) {
        const parsedJson = JSON.parse(jsonInput);
        setGeneratedAltText(
          `An image of ${parsedJson.subject || "unknown subject"} ${
            parsedJson.description || ""
          }`
        );
      }
    } catch (err) {
      setError(
        activeTab === "json" ? "Invalid JSON format" : "Failed to process image"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Alt Text Generator
          </h1>

          {/* Tab Switcher */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("upload")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "upload"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Upload Image
            </button>
            <button
              onClick={() => setActiveTab("json")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "json"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              JSON Input
            </button>
          </div>

          <div className="space-y-6">
            {activeTab === "upload" ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
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
                <textarea
                  placeholder='Enter JSON data (e.g., {"subject": "mountain landscape", "description": "during sunset"})'
                  className="w-full h-32 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  value={jsonInput}
                  onChange={handleJsonInput}
                />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={generateAltText}
              disabled={isLoading || (!imageFile && !jsonInput)}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Generating..." : "Generate Alt Text"}
            </button>

            {generatedAltText && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Generated Alt Text
                </h3>
                <p className="text-gray-700">{generatedAltText}</p>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(generatedAltText)
                  }
                  className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm"
                >
                  Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltTextGenerator;
