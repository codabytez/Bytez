const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "md",
    boxShadow: "md",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      padding: "0.5rem 1rem",
    },
    md: {
      fontSize: "md",
      fontWeight: "normal",
      padding: "0.75rem 1rem",
    },

    lg: {
      fontSize: "lg",
      padding: "1.25rem 1.5rem",
    },
    xl: {
      fontSize: "xl",
      padding: "1.5rem 2rem",
    },
  },
  variants: {
    primary: {
      bg: "primaryButton",
      borderRadius: "80px",
      border: "1px solid #B964001A",
      // boxShadow: "button",
      _hover: {
        bg: "primaryButtonHover",
      },
    },
    secondary: {
      color: "white",
      bg: "secondary",
      _hover: {
        bg: "secondaryHover",
      },
    },
    tertiary: {
      color: "white",
      bg: "tertiary",
      _hover: {
        bg: "tertiaryHover",
      },
    },
    outline: {
      color: "primary",
      bg: "transparent",
      border: "2px",
      borderColor: "primary",
      _hover: {
        bg: "primary",
        color: "white",
      },
    },
    link: {
      color: "primary",
      bg: "transparent",
      _hover: {
        textDecoration: "underline",
      },
    },
    destructive: {
      color: "white",
      bg: "red.500",
      _hover: {
        bg: "red.600",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
