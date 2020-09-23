import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

import { Pagination } from "@material-ui/lab";
import ReminderList from "../../components/ReminderList";
import RemindersService from "../../services/ReminderServices";
import { useReminder } from "../../context/ReminderContext";

export default function Home() {
  const { reminders, handleSetList } = useReminder();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(2);

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchReminders = async () => {
      setLoading(true);
      const items = await RemindersService.list();
      handleSetList(items.data);
      setLoading(false);
    };
    fetchReminders();
  }, []);

  const indexOfLastReminder = currentPage * postPerPage;

  const indexOfFirsReminder = indexOfLastReminder - postPerPage;
  const currentReminder = reminders.slice(
    indexOfFirsReminder,
    indexOfLastReminder
  );
  const totalPages = Math.ceil(reminders.length / postPerPage);
  return (
    <>
      <ReminderList reminders={currentReminder} loading={loading} />
      <Pagination
        count={totalPages}
        shape="rounded"
        className={classes.pagination}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alta: {
      marginTop: theme.spacing(2),
    },

    pagination: {
      position: "absolute",
      bottom: 50,
    },
  })
);
