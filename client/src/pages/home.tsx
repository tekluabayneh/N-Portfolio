import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as Settings } from "lucide-react";
import SettingsModal from "../components/terminal/SettingsModal";
import { accentColors } from "../constants/colors";
import TerminalContext from "../components/terminal/TerminalContent";
import type { CommandType, settingStateType } from "../types/dataType";

const INITIAL_COMMANDS: CommandType[] = [
  { input: "neofetch", output: { type: "neofetch" }, timestamp: new Date() },
];

export default function Portfolio() {
  const [settings, setSettings] = useState<settingStateType>({
    accentColor: "cyan",
    fontSize: "medium",
    transparency: 0.1,
  });

  const [commands, setCommands] = useState<CommandType[]>(INITIAL_COMMANDS);
  const [showSettings, setShowSettings] = useState(false);

  const [isMaximized, setIsMaximized] = useState(false);
  const terminalRef = useRef(null);

  const accent = accentColors[settings.accentColor];

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-color",
      accent.primary
    );

    document.documentElement.style.setProperty("--accent-glow", accent.glow);
  }, [accent]);

  const handleCommand = (input: string) => {
    const newCommand = {
      input,
      output: parseCommand(input),
      timestamp: new Date(),
    };
    setCommands((prev) => [...prev, newCommand]);
  };

  const parseCommand = (input: string) => {
    const parts = input.trim().toLowerCase().split(" ");
    const command = parts[0];

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
      <TerminalContext
        commands={commands}
        terminalRef={terminalRef}
        isMaximized={isMaximized}
        accent={accent}
        settings={settings}
        handleCommand={handleCommand}
        setIsMaximized={setIsMaximized}
      />

      {/* Settings Modal */}
      <SettingsModal
        show={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSettingsChange={setSettings}
        accent={accent}
      />
    </div>
  );
}
