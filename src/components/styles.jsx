const styles = (theme) => ({
  form: {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.mixins.borderRadius,
    boxShadow: theme.shadows.z1,
    margin: theme.mixins.margin,
    padding: theme.mixins.padding,
  },
  label: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.h4.fontSize,
  },
  input: {
    padding: "8px",
    margin: "10px 0",
    border: `1px solid ${theme.palette.secondary.mainLight}`,
    borderRadius: theme.mixins.borderRadius,
    fontSize: theme.typography.h6.fontSize,
    ":focus": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  textarea: {
    padding: "8px",
    margin: "5px 0",
    border: `1px solid ${theme.palette.secondary.mainLight}`,
    borderRadius: theme.mixins.borderRadius,
    fontSize: "14px",
    minHeight: "100px",
  },
  submitButton: {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: theme.palette.primary.main,
    border: "none",
    borderRadius: theme.mixins.borderRadius,
    cursor: "pointer",
    fontSize: theme.typography.fontSize,
    outline: "none",
    transition: "0.3s ease-in-out",
    boxShadow: theme.shadows.z1,
    ":hover": {
      backgroundColor: theme.palette.primary.mainLight,
      boxShadow: theme.shadows.z2,
      border: "1px solid #ff7878",
    },
  },
  h2: {
    color: theme.palette.primary.mainLight,
    textAlign: "center",
  },

  card: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.mixins.borderRadius,
    boxShadow: theme.shadows.z1,
    margin: theme.mixins.margin,
    padding: theme.mixins.padding,
    display: "flex",
    flexDirection: "column",
    flex: `1 1 200px`,
  },
  h3: {
    color: theme.palette.primary.contrastText,
  },
  p: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.h4.fontSize,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "10px",
    margin: "10px 0",
  },
});

export default styles;
