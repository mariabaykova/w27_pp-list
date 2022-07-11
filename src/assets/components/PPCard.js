import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const boxStyle = {
  selected: {
    mt: 0.5,
    mx: -0.5,
    boxShadow: 24,
    minWidth: 400,
    height: 210,
    zIndex: "tooltip",
  },
  notSelected: {
    mt: 1,
    boxShadow: 1,
    minWidth: 275,
    height: 200,
  },
};

export default function PPCard(props) {
  let isSelected = "notSelected";
  if (props.selected) {
    isSelected = "selected";
  }
  return (
    <Card sx={boxStyle[isSelected]} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {props.ppName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.subscrFee} руб/мес
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.speed} Мбит/сек
        </Typography>
        <Typography variant="body2">
          Объем включенного трафика {props.trafficVolume}
        </Typography>
      </CardContent>
    </Card>
  );
}
