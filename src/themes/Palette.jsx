const Palette = ({mode}) => {
  const colors = {
    pink: [
      "#FFB1B1",
      "#ff7878",
      "#FEECE2",
      "#FFC5C5",
      "#FFE5E5",
      "#FFCBCB",
      "#FFF6F6",
      "#FDF0F0",
      "#FEBBCC",
      "#FF9B9B",
    ],
    red: [
      "#FFEBEE",
      "#FFCDD2",
      "#EF9A9A",
      "#E57373",
      "#EF5350",
      "#F44336",
      "#E53935",
      "#D32F2F",
      "#C62828",
      "#B71C1C",
    ],
    gold: [
      "#FFF8E1",
      "#FFECB3",
      "#FFE082",
      "#FFD54F",
      "#FFCA28",
      "#FFC107",
      "#FFB300",
      "#FFA000",
      "#FF8F00",
      "#FF6F00",
    ],
    cyan: [
      "#E0F7FA",
      "#B2EBF2",
      "#80DEEA",
      "#4DD0E1",
      "#26C6DA",
      "#00BCD4",
      "#00ACC1",
      "#0097A7",
      "#00838F",
      "#006064",
    ],
    green: [
      "#E8F5E9",
      "#C8E6C9",
      "#A5D6A7",
      "#81C784",
      "#66BB6A",
      "#4CAF50",
      "#43A047",
      "#388E3C",
      "#2E7D32",
      "#1B5E20",
    ],
    grey: [
      "#ffffff",
      "#fafafa",
      "#f5f5f5",
      "#f0f0f0",
      "#d9d9d9",
      "#bfbfbf",
      "#8c8c8c",
      "#595959",
      "#262626",
      "#141414",
      "#000000",
    ],
  };

  const greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  const greyAscent = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  const greyConstant = ["#fafafb", "#e6ebf1"];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  return {
    mode,
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: colors.pink[5],
      mainLight: colors.pink[1],
      
    },
    secondary: {
      main: colors.grey[5],
      mainLight: colors.grey[6],
    },
    error: {
      main: colors.red[5],
    },
    warning: {
      main: colors.gold[5],
    },
    info: {
      main: colors.cyan[5],
    },
    success: {
      main: colors.green[5],
    },
    grey: colors.grey,
    text: {
      primary: colors.grey[8],
      primaryLight: colors.pink[0],
      secondary: colors.grey[6],
      disabled: colors.grey[4],
    },
    action: {
      disabled: colors.grey[3],
    },
    divider: colors.grey[2],
    background: {
      paper: colors.grey[0],
      default: colors.grey[1],
    },
  };
};

export default Palette;
