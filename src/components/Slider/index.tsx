import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingRight: 24,
      paddingLeft: 24,
    },
    margin: {
      height: theme.spacing(3),
    },
  })
);

const marks = [
  {
    value: 1,
    label: "Baixa",
  },
  {
    value: 2,
    label: "Média",
  },
  {
    value: 3,
    label: "Média",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function SliderLevel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Prioridade
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        max={3}
        min={1}
      />
    </div>
  );
}
