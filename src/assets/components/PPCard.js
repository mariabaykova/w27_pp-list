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
    cursor: "pointer",
  },
  notSelected: {
    mt: 1,
    boxShadow: 1,
    minWidth: 275,
    height: 200,
    cursor: "pointer",
  },
};

export default function PPCard(props) {
  // вместо состояния isSelected нужно использовать проп props.isSelected.
  // когда мы хотим изменить состояние карточки, мы должны вызывать props.onCardClick(), который получен от родительского компонента

  function handleCardClick() {
    props.onCardClick({ ppId: props.ppId });
  }

  const styleSelected =
    props.isSelected.ppId === props.ppId ? "selected" : "notSelected";

  return (
    <Card
      sx={boxStyle[styleSelected]}
      variant="outlined"
      onClick={handleCardClick}
    >
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
