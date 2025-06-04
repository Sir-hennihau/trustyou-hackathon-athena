"use client";

import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Create a new graph, e.g. how is my hotel comparing in food compared to the country"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
