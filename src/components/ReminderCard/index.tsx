import React from "react";

import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { green, red, teal, yellow } from "@material-ui/core/colors";

import { CheckCircle, Edit, RemoveCircle } from "@material-ui/icons";
import { Button, ButtonGroup } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Divider } from "@material-ui/core/";

interface PageHeaderProps {
  title: String;
  description?: String;
}

const ReminderCard: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <CardHeader
        title={props.title}
        avatar={
          <Avatar aria-label="level" className={classes.avatar}>
            A
          </Avatar>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Divider />
      <ButtonGroup disableElevation variant="text" className={classes.buttons}>
        <Button aria-label="finish" className={(classes.button, classes.check)}>
          <CheckCircle />
        </Button>
        <Button aria-label="edit" className={(classes.button, classes.edit)}>
          <Edit />
        </Button>
        <Button
          aria-label="remove"
          className={(classes.button, classes.remove)}
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
      gridTemplateColumns: "1fr 1fr 1fr",
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
