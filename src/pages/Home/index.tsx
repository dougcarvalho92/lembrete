import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

import AddNewItem from "../../components/AddNewItem";
import FabButton from "../../components/FabButton";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import ReminderCard from "../../components/ReminderCard";
import RemindersService from "../../services/ReminderServices";
import { useReminder } from "../../context/ReminderContext";

export default function Home() {
  const { reminders, handleSetList } = useReminder();
  const classes = useStyles();
  const [pagination, setPagination] = useState({
    offset: 0,
    perPage: 8,
    currentPage: 0,
    length: 0,
  });

  const handleGetItems = async () => {
    const { items, requestData } = await RemindersService.list();
    handleSetList(items);
    setPagination(requestData);
  };
  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, currentPage: value });
    const { items, requestData } = await RemindersService.list(value );
    console.log(items);
  };
  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
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
          <FabButton />
        </Grid>
      </Grid>
      <Pagination
        count={pagination.length}
        shape="rounded"
        className={classes.pagination}
        page={pagination.currentPage}
        onChange={handleChange}
      />
    </>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alta: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: "flex",
    },
    pagination: {
      position: "absolute",
      bottom: 50,
    },
  })
);
