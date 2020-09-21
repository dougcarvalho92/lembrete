import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import RememberCard from "./../../components/Card/index";
import AddNewItem from "../../components/AddNewItem";

export default function Home() {
  return (
    <Grid container spacing={3} style={{display:"flex"}} >
      {[0, 1, 2, 3].map((value) => (
        <Grid item sm={12} md={3}>
          <RememberCard title="Olá" description="Fazer café" />
        </Grid>
      ))}
      <Grid item sm={12} md={3}  style={{display: 'flex'}}>
        <AddNewItem/>
      </Grid>
    </Grid>
  );
}
