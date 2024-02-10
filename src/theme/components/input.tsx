const Input = {
  baseStyle: {
    field: {
      _focus: {
        borderColor: "primary.500",
      },
    },
  },
  sizes: {
    sm: {
      field: {
        fontSize: "sm",
        px: "3",
        py: "1",
      },
    },
    md: {
      field: {
        fontSize: "md",
        px: "4",
        py: "2",
      },
    },
    lg: {
      field: {
        fontSize: "lg",
        px: "4",
        py: "3",
      },
    },
  },
  variants: {
    primary: {
      field: {
        borderColor: "primary.500",
        _hover: {
          borderColor: "primary.600",
        },
        _focus: {
          borderColor: "primary.700",
        },
      },
    },
    secondary: {
      field: {
        borderColor: "secondary.500",
        _hover: {
          borderColor: "secondary.600",
        },
        _focus: {
          borderColor: "secondary.700",
        },
      },
    },
    tertiary: {
      field: {
        borderColor: "tertiary.500",
        _hover: {
          borderColor: "tertiary.600",
        },
        _focus: {
          borderColor: "tertiary.700",
        },
      },
    },
    outline: {
      field: {
        borderColor: "gray.400",
        _hover: {
          borderColor: "gray.500",
        },
        _focus: {
          borderColor: "primary.500",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
export default Input;
