"use client";
import React, { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const SEODashboard = () => {
  const [content, setContent] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generateKeywordHierarchy = () => {
    setIsLoading(true);
    setError("");

    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      try {
        // Example processing logic
        const keywords = content
          .toLowerCase()
          .split(" ")
          .filter((word) => word.length > 3)
          .sort((a, b) => b.length - a.length);

        const hierarchy = [
          ...new Set(
            keywords.map((keyword) => ({
              keyword,
              relevance: Math.random() * 100,
            }))
          ),
        ]
          .sort((a, b) => b.relevance - a.relevance)
          .map((item) => `${item.keyword} (${item.relevance.toFixed(1)}%)`);

        setResult(hierarchy);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to generate keyword hierarchy. Please try again.");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-blue-800">
              SEO Keyword Hierarchy Generator
            </h1>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-blue-700">
                Content
              </label>
              <textarea
                placeholder="Enter your content here..."
                className="w-full h-32 px-3 py-2 text-gray-700 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-blue-700">
                Context
              </label>
              <textarea
                placeholder="Enter context or additional information..."
                className="w-full h-32 px-3 py-2 text-gray-700 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={context}
                onChange={(e) => setContext(e.target.value)}
              />
            </div>

            <button
              onClick={generateKeywordHierarchy}
              disabled={!content || !context || isLoading}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Generating..." : "Generate Keyword Hierarchy"}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                </div>
                <p className="mt-2 text-sm text-red-700">{error}</p>
              </div>
            )}

            {result.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-blue-800">
                    Generated Keywords
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {result.map((keyword, index) => (
                    <div
                      key={index}
                      className="p-2 bg-white rounded-md shadow-sm text-blue-600"
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;
