import {
  Badge,
  CircularProgress,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core/";
import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { ColorLensRounded } from "@material-ui/icons";
import FabButton from "../FabButton";
import PopUp from "../PopUp";
import { useReminder } from "../../context/ReminderContext";

const Form: React.FC = () => {
  const classes = useStyles();
  const {
    title,
    description,
    level,
    id,
    handleSetTitle,
    handleSetDescription,
    handleSetLevel,
  } = useReminder();

  return (
    <div>
      <PopUp>
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              value={title}
              autoFocus
              margin="dense"
              label="Titulo"
              type="text"
              required
              fullWidth
              onChange={(item) => {
                handleSetTitle(item.target.value);
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="Level">Level</InputLabel>
            <Select
              labelId="Level"
              value={level}
              required
              onChange={(item) => {
                handleSetLevel(item.target.value as Number);
              }}
              label="Level"
              disabled={id ? true : false}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={0}>
                <ListItemIcon>
                  <ColorLensRounded />
                </ListItemIcon>
                <ListItemText primary="Baixa" />
              </MenuItem>
              <MenuItem value={1}>
                <ListItemIcon>
                  <ColorLensRounded />
                </ListItemIcon>
                <ListItemText primary="Média" />
              </MenuItem>
              <MenuItem value={2}>
                <ListItemIcon>
                  <ColorLensRounded />
                </ListItemIcon>
                <ListItemText primary="Alta" />
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              value={description}
              label="Descrição"
              multiline
              rows={4}
              rowsMax={4}
              required
              onChange={(item) => {
                handleSetDescription(item.target.value);
              }}
            />
          </FormControl>
        </form>
      </PopUp>
      <FabButton />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "max-width",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    fabButton: {
      position: "fixed",
      bottom: 50,
      right: 50,
    },
  })
);

export default Form;
