/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  readonly settings: {
    googleAnalyticsMeasurementId: string;
    defaultPath: string;
    fontFamily: string;
    miniDrawer: boolean;
    container: boolean;
    themeDirection: string;
    title: string;
    title_split: string;
    background_url: string;
    description: string;
    logo: string;
    languages: string[];
    emojiEndpoint: string;
    startYear: number;
  };
}
