export type ThemeDirection = "ltr" | "rtl";
export type FontFamily =
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`
  | string;

// ==============================|| CONFIG TYPES  ||============================== //

export type CustomizationActionProps = {
  type: string;
  payload?: CustomizationProps;
};

export type CustomizationProps = {
  defaultPath: string;
  fontFamily: FontFamily;
  miniDrawer: boolean;
  container: boolean;
  themeDirection: ThemeDirection;
  onChangeContainer: VoidFunction;
  onChangeDirection: (direction: ThemeDirection) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
};
