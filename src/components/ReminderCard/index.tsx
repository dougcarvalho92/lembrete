import { Box, Button, ButtonGroup, Fade } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Divider } from "@material-ui/core/";
import IReminder from "../../interfaces/IReminders";
import { Paper } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useReminder } from "../../context/ReminderContext";

const ReminderCard: React.FC<IReminder> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = [
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.secondary.main,
  ];
  const { handleRemove, handleClickOpen } = useReminder();

  const handleRemoveItem = (id: String) => {
    handleRemove(id);
  };

  return (
    <Fade in={true}>
      <Box
        borderColor={colors[props.level as number]}
        borderTop={10}
        borderRadius="borderRadius"
        component={Paper}
      >
        <CardHeader title={props.title} />

        <Divider />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <Divider />
        <ButtonGroup
          disableElevation
          variant="text"
          className={classes.buttons}
        >
          <Button
            aria-label="edit"
            className={(classes.button, classes.edit)}
            onClick={() => handleClickOpen(props)}
          >
            <Edit />
          </Button>
          <Button
            aria-label="remove"
            className={(classes.button, classes.remove)}
            onClick={() => {
              let removeOk = window.confirm("Tem certeza?");
              if (removeOk) {
                handleRemoveItem(props.id as string);
              }
            }}
          >
            <Delete />
          </Button>
        </ButtonGroup>
      </Box>
    </Fade>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    button: {
      borderRadius: 0,
    },
    edit: {
      color: theme.palette.warning.main,
    },
    remove: {
      color: theme.palette.secondary.main,
    },
  })
);
export default ReminderCard;
