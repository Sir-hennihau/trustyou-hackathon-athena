"use client";

import { useState } from "react";

type Mode = "region" | "country" | "global";

interface ModeSelectorProps {
  onModeChange?: (mode: Mode) => void;
}

export default function ModeSelector({ onModeChange }: ModeSelectorProps) {
  const [selectedMode, setSelectedMode] = useState<Mode>("region");

  const handleModeChange = (mode: Mode) => {
    setSelectedMode(mode);
    onModeChange?.(mode);
  };

  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => handleModeChange("region")}
        className={`px-4 py-2 rounded-lg border ${
          selectedMode === "region"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Compare by Region
      </button>
      <button
        onClick={() => handleModeChange("country")}
        className={`px-4 py-2 rounded-lg border ${
          selectedMode === "country"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Compare by Country
      </button>
      <button
        onClick={() => handleModeChange("global")}
        className={`px-4 py-2 rounded-lg border ${
          selectedMode === "global"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Compare Globally
      </button>
    </div>
  );
}
