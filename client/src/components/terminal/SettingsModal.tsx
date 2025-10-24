import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Palette, Type, Droplets } from "lucide-react";
import { accentOptions, fontSizeOptions } from "../../data/data";

export default function SettingsModal({
  show,
  onClose,
  settings,
  onSettingsChange,
  accent,
}) {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl border backdrop-blur-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            borderColor: accent.primary,
            boxShadow: `0 0 60px ${accent.glow}`,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: accent.primary }}
          >
            <h2
              className="text-xl font-bold flex items-center gap-2"
              style={{ color: accent.primary }}
            >
              <Palette className="w-5 h-5" />
              Settings
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Accent Color */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Palette
                  className="w-4 h-4"
                  style={{ color: accent.primary }}
                />
                Accent Color
              </label>
              <div className="grid grid-cols-4 gap-3">
                {accentOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      onSettingsChange({
                        ...settings,
                        accentColor: option.value,
                      })
                    }
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      settings.accentColor === option.value
                        ? "ring-2 ring-offset-2 ring-offset-black"
                        : ""
                    }`}
                    style={{
                      borderColor: option.color,
                      backgroundColor: `${option.color}20`,
                      ringColor: option.color,
                    }}
                  >
                    <div
                      className="w-full h-8 rounded"
                      style={{ backgroundColor: option.color }}
                    />
                    <p className="text-xs mt-2 text-gray-400">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Type className="w-4 h-4" style={{ color: accent.primary }} />
                Font Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {fontSizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      onSettingsChange({ ...settings, fontSize: option.value })
                    }
                    className={`p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                      settings.fontSize === option.value
                        ? "ring-2 ring-offset-2 ring-offset-black"
                        : ""
                    }`}
                    style={{
                      borderColor:
                        settings.fontSize === option.value
                          ? accent.primary
                          : "#333",
                      backgroundColor:
                        settings.fontSize === option.value
                          ? `${accent.primary}20`
                          : "rgba(0,0,0,0.3)",
                      ringColor: accent.primary,
                    }}
                  >
                    <p className="text-sm font-medium">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Transparency */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Droplets
                  className="w-4 h-4"
                  style={{ color: accent.primary }}
                />
                Background Transparency
              </label>
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.05"
                value={settings.transparency}
                onChange={(e) =>
                  onSettingsChange({
                    ...settings,
                    transparency: parseFloat(e.target.value),
                  })
                }
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${
                    accent.primary
                  } 0%, ${accent.primary} ${
                    settings.transparency * 200
                  }%, #333 ${settings.transparency * 200}%, #333 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Solid</span>
                <span>Transparent</span>
              </div>
            </div>

            {/* Info */}
            <div
              className="p-4 rounded-lg border"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderColor: `${accent.primary}50`,
              }}
            >
              <p className="text-xs text-gray-400 leading-relaxed">
                💡 Customize your terminal experience. Settings are saved
                locally and persist across sessions.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
