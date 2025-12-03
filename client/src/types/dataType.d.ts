export type accentColorsType = {
  cyan: { primary: string; glow: string };
  purple: { primary: string; glow: string };
  magenta: { primary: string; glow: string };
  green: { primary: string; glow: string };
};
export type CommandPropesType = {
  onCommand: (input: type) => void;
  accent: accentColorsType[0];
  fontSize: string;
};
export type OutPutPropesType = {
  accent: accentColorsType[0];
  fontSize: string;
  output: {
    type: string;
    message?: string;
  };
};

export type TerminalcontentPropesType = {
  commands;
  terminalRef;
  isMaximized;
  accent: accentColorsType[0];
  settings: settingStateType;
  handleCommand;
  setIsMaximized;
};

export type SettingPropesType = {
  show;
  onClose;
  settings: settingStateType;
  onSettingsChange;
  accent: accentColorsType[0];
};

export type CommandType = {
  input: string;
  output: {
    type: string;
  };
  timestamp: Date;
};

type AccentColor = keyof typeof accentColors;
export type settingStateType = {
  accentColor: AccentColor;
  fontSize: "small" | "medium" | "large";
  transparency: number;
};

export type blogpostType = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

interface BlogPageType {
  accent: accentColorsType[0];
  blogPosts: blogpostType[];
}
export type neoFetchtype = {
  accent: accentColorsType;
  fontSize: string;
  accent: accentColorsType[0];
};
