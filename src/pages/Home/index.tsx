import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ReminderCard from "../../components/ReminderCard";
import AddNewItem from "../../components/AddNewItem";
import Pagination from "@material-ui/lab/Pagination";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import RemindersService from "../../services/ReminderServices";
import { useReminder } from "../../context/ReminderContext";

export default function Home() {
  const { reminders, handleSetList } = useReminder();

  const handleGetItems = async () => {
    const { data } = await RemindersService.list();
    handleSetList(data);
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <Grid container spacing={3} style={{ display: "flex" }}>
      {reminders.map((item, index) => (
        <Grid
          item
          sm={12}
          xs={12}
          md={3}
          key={index}
          className={item.level === 20 ? "media" : "alta"}
        >
          <ReminderCard
            id={item.id}
            title={item.title}
            description={item.description}
            level={item.level}
          />
        </Grid>
      ))}
      <Grid item sm={12} xs={12} md={3} style={{ display: "flex" }}>
        <AddNewItem />
      </Grid>
    </Grid>
  );
}
makeStyles((theme: Theme) =>
  createStyles({
    alta: {
      marginTop: theme.spacing(2),
    },
    media: {
      borderTopColor: "#3d2d",
    },
  })
);
