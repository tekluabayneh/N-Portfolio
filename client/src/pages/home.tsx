import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Settings,
  Minimize2,
  Maximize2,
} from "lucide-react";
import CommandInput from "../components/terminal/CommandInput";
import OutputRenderer from "../components/terminal/OutputRenderer";
import SettingsModal from "../components/terminal/SettingsModal";
import { accentColors } from "../constants/colors";
const INITIAL_COMMANDS = [
  { input: "neofetch", output: { type: "neofetch" }, timestamp: new Date() },
];

export default function Portfolio() {
  const [commands, setCommands] = useState(INITIAL_COMMANDS);
  const [currentPath, setCurrentPath] = useState("~");
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    accentColor: "cyan",
    fontSize: "medium",
    transparency: 0.1,
  });
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalRef = useRef(null);

  const accent = accentColors[settings.accentColor];

  const fontSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-color",
      accent.primary
    );

    document.documentElement.style.setProperty("--accent-glow", accent.glow);
  }, [accent]);

  const handleCommand = (input) => {
    const newCommand = {
      input,
      output: parseCommand(input),
      timestamp: new Date(),
    };
    setCommands((prev) => [...prev, newCommand]);
  };

  const parseCommand = (input) => {
    const parts = input.trim().toLowerCase().split(" ");
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case "help":
        return { type: "help" };
      case "about":
      case "whoami":
        return { type: "about" };
      case "projects":
      case "ls":
        return { type: "projects" };
      case "blog":
        return { type: "blog" };
      case "contact":
        return { type: "contact" };
      case "resume":
      case "cv":
        return { type: "resume" };
      case "clear":
        setCommands([]);
        return null;
      case "neofetch":
        return { type: "neofetch" };
      case "skills":
        return { type: "skills" };
      case "experience":
        return { type: "experience" };
      default:
        return {
          type: "error",
          message: `Command not found: ${command}. Type 'help' for available commands.`,
        };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      {/* Scanline effect */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)",
        }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Settings button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setShowSettings(true)}
        className="fixed top-6 right-6 z-40 p-3 rounded-lg backdrop-blur-xl border transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${settings.transparency + 0.5})`,
          borderColor: accent.primary,
          boxShadow: `0 0 20px ${accent.glow}`,
        }}
      >
        <Settings className="w-5 h-5" style={{ color: accent.primary }} />
      </motion.button>

      {/* Terminal Window */}
      <div
        className={`relative ${
          isMaximized
            ? "h-screen w-screen"
            : "container mx-auto px-4 py-8 md:py-12"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`backdrop-blur-2xl rounded-2xl border overflow-hidden shadow-2xl ${
            isMaximized ? "h-full" : "min-h-[600px] max-h-[85vh]"
          }`}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${settings.transparency + 0.7})`,
            borderColor: accent.primary,
            boxShadow: `0 0 60px ${accent.glow}, inset 0 0 60px rgba(0, 0, 0, 0.5)`,
          }}
        >
          {/* Window Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{
              backgroundColor: `rgba(0, 0, 0, ${settings.transparency + 0.3})`,
              borderColor: accent.primary,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <TerminalIcon
                  className="w-5 h-5"
                  style={{ color: accent.primary }}
                />
                <span
                  className={`font-bold ${fontSizes[settings.fontSize]}`}
                  style={{ color: accent.primary }}
                >
                  terminal@portfolio
                </span>
                <span className="text-gray-500">:</span>
                <span className="text-gray-400">{currentPath}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                {isMaximized ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className={`p-6 overflow-y-auto ${
              isMaximized
                ? "h-[calc(100vh-80px)]"
                : "h-[calc(85vh-80px)] max-h-[600px]"
            } ${fontSizes[settings.fontSize]}`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: `${accent.primary} transparent`,
            }}
          >
            {/* Command History */}
            <div className="space-y-4 mb-6">
              {commands.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  {/* Command Input Echo */}
                  <div className="flex items-center gap-2">
                    <span style={{ color: accent.primary }}>➜</span>
                    <span className="text-gray-400">~</span>
                    <span className="text-white">{cmd.input}</span>
                  </div>
                  {/* Command Output */}
                  {cmd.output && (
                    <OutputRenderer
                      output={cmd.output}
                      accent={accent}
                      fontSize={fontSizes[settings.fontSize]}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Command Input */}
            <CommandInput
              onCommand={handleCommand}
              accent={accent}
              fontSize={fontSizes[settings.fontSize]}
            />
          </div>
        </motion.div>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        show={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSettingsChange={setSettings}
        accent={accent}
      />

      {/* <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--accent-color);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent-glow);
        }
      `}</style> */}
    </div>
  );
}
