import { Fab, Theme, createStyles, makeStyles } from "@material-ui/core";

import { Add } from "@material-ui/icons";
import React from "react";
import { useReminder } from "../../context/ReminderContext";

// import { Container } from './styles';

const FabButton: React.FC = () => {
  const { handleClickOpen } = useReminder();
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => handleClickOpen(null)}
      className={classes.fabButton}
    >
      <Add />
    </Fab>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fabButton: {
      position: "fixed",
      bottom: 50,
      right: 50,
    },
  })
);

export default FabButton;
