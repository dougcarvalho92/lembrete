import { Theme, createStyles, makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import IReminder from "../../interfaces/IReminders";
import React from "react";
import ReminderCard from "../../components/ReminderCard";
import { useReminder } from "../../context/ReminderContext";

// import { Container } from './styles';
interface ReminderData {
  loading: Boolean;
  reminders: IReminder[];
}
const ReminderList: React.FC<ReminderData> = ({ reminders, loading }) => {
  const classes = useStyles();

  if (loading) {
    return <h2>Carregando</h2>;
  } else {
    return (
      <Grid container spacing={3} className={classes.container}>
        {reminders.map((item: IReminder) => (
          <Grid
            item
            sm={12}
            xs={12}
            md={3}
            className={item.level === 20 ? "media" : "alta"}
            key={item.id as string}
          >
            <ReminderCard
              id={item.id}
              title={item.title}
              description={item.description}
              level={item.level}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
    },
  })
);

export default ReminderList;
