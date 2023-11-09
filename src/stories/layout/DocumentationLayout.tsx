import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: 10,
  background: theme.palette.background.default,
  padding: theme.spacing(2),
}));

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props): ReactElement {
  return (
    <div className="m-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="prose card-title">
            <h1>{label}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
