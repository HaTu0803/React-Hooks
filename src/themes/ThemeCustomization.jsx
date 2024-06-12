import { useMemo } from "react";
import Palette from "./Palette";
import Typography from "./Typography";
import CustomShadows from "./Shadows";

const useTheme = () => {
  const theme = useMemo(() => Palette("light"), []);
  const themeTypography = useMemo(
    () => Typography(`'Public Sans', sans-serif`),
    []
  );
  const themeCustomShadows = useMemo(() => CustomShadows(), []);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        borderRadius: "8px",
        padding: "16px",
        margin: "0 16px 16px 0",
        
        maxWidth: "320px",
        minHeight: "46px",
      },
      palette: theme,
      shadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  return themeOptions;
};

export default useTheme;
