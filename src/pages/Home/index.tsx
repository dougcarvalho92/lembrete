import {
  Backdrop,
  CircularProgress,
  Grid,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Form from "../../components/Form";
import { Pagination } from "@material-ui/lab";
import ReminderList from "../../components/ReminderList";
import { useReminder } from "../../context/ReminderContext";

export default function Home() {
  const { reminders, loading, handleLoading } = useReminder();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 8;
  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const indexOfLastReminder = currentPage * postPerPage;

  const indexOfFirsReminder = indexOfLastReminder - postPerPage;
  const currentReminder = reminders.slice(
    indexOfFirsReminder,
    indexOfLastReminder
  );
  const totalPages = Math.ceil(reminders.length / postPerPage);
  if (loading) {
    return (
      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={() => handleLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  } else {
    return (
      <>
        <ReminderList reminders={currentReminder} />
        <Pagination
          count={totalPages}
          shape="rounded"
          className={classes.pagination}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
        <Grid item sm={12} xs={12} md={3} style={{ display: "flex" }}>
          <Form />
        </Grid>
      </>
    );
  }
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alta: {
      marginTop: theme.spacing(2),
    },

    pagination: {
      [theme.breakpoints.down("sm")]: {
        position: "fixed",
      },
      [theme.breakpoints.up("md")]: {
        position: "absolute",
      },
      bottom: 50,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);
