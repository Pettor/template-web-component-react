import type { ReactElement } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cardImgUrl from "~/assets/card-image.jpg";

export interface ExampleCardProps {
  label: string;
  onShare(): void;
}

export function ExampleCard({ label, onShare }: ExampleCardProps): ReactElement {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={cardImgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        </Typography>
      </CardContent>
      <CardActions>
        <Button data-testid="example-card__share-button" onClick={onShare} size="small">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
