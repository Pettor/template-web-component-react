import type { ReactElement } from "react";
import type { PaletteMode } from "@mui/material";
import Grid from "@mui/material/Grid";
import type { PaletteColor } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import DocumentationDecorator from "../decorators/DocumentationDecorator";
import { DocumentationLayout } from "../layout/DocumentationLayout";
import CreateAppTheme from "~/libs/theme/Theme";
export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
};

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  alignItems: "center",
  height: "100%",
  display: "flex",
}));

function ColorRow(label: string, color: PaletteColor): ReactElement {
  const { contrastText, dark, light, main } = color;
  return (
    <>
      <Grid item xs={3}>
        <Item>
          <Typography variant="subtitle1">{label}</Typography>
        </Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: main }}>
        <Item>{main}</Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: light }}>
        <Item>{light}</Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: dark }}>
        <Item>{dark}</Item>
      </Grid>
    </>
  );
}

export const Colors = {
  render: (_: unknown, { globals: { theme: selectedTheme } }: { globals: { theme: PaletteMode } }) => {
    const theme = CreateAppTheme(selectedTheme);
    const { primary, secondary, info, success, warning, error } = theme.palette;

    return (
      <DocumentationLayout label="Colors">
        <Grid container>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h6">Name</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h6">Main</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h6">Light</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h6">Dark</Typography>
            </Item>
          </Grid>
          {ColorRow("Primary", primary)}
          {ColorRow("Secondary", secondary)}
          {ColorRow("Info", info)}
          {ColorRow("Success", success)}
          {ColorRow("Warning", warning)}
          {ColorRow("Error", error)}
        </Grid>
      </DocumentationLayout>
    );
  },
};
