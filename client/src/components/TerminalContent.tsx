import {
  Maximize2,
  Minimize2,
  TerminalIcon,
  type Terminal,
} from "lucide-react";
import CommandInput from "./terminal/CommandInput";
import OutputRenderer from "./terminal/OutputRenderer";
import { motion } from "framer-motion";
import { fontSizes } from "../data/data";

const TerminalContext = ({
  commands,
  terminalRef,
  isMaximized,
  accent,
  settings,
  handleCommand,
  setIsMaximized,
}) => {
  return (
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
              <span className="text-gray-400">~</span>
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
            {commands.map((cmd, index:number) => (
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
  );
};
export default TerminalContext;
