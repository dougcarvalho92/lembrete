import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red, teal, yellow } from "@material-ui/core/colors";
import { CheckCircle, Edit, RemoveCircle } from "@material-ui/icons";
import { Button, ButtonGroup } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Divider } from "@material-ui/core/";
import IReminder from "../../interfaces/IReminders";
import { useReminder } from "../../context/ReminderContext";

import RemindersService from "../../services/ReminderServices";
import { AxiosResponse } from "axios";

const ReminderCard: React.FC<IReminder> = (props) => {
  const classes = useStyles();
  const { reminders, handleSetList } = useReminder();

  const handleRemoveItem = (id: String) => {
    RemindersService.remove(id).then((result: AxiosResponse) => {
      if (result.status) {
        handleSetList(reminders.filter((reminder) => reminder.id !== id));
      }
    });
  };

  return (
    <Paper elevation={3}>
      <CardHeader title={props.title} />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Divider />
      <ButtonGroup disableElevation variant="text" className={classes.buttons}>
        <Button aria-label="edit" className={(classes.button, classes.edit)}>
          <Edit />
        </Button>
        <Button
          aria-label="remove"
          className={(classes.button, classes.remove)}
          onClick={() => {
            handleRemoveItem(props.id);
          }}
        >
          <RemoveCircle />
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: red[500],
    },
    buttons: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    button: {
      borderRadius: 0,
    },
    check: {
      color: teal[400],
    },
    edit: {
      color: yellow[400],
    },
    remove: {
      color: red[400],
    },
  })
);
export default ReminderCard;
