import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ModalResponsiveContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  minWidth: "500px",
  minHeight: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: theme.palette.background.default,
  borderRadius: theme.borderRadius.default,

  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
    maxWidth: "100%",
    width: "100%",
    minHeight: "100dvh",
    borderRadius: 0,
  },
}));

export default ModalResponsiveContent;
