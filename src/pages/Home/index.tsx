import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ReminderCard from "../../components/ReminderCard";
import AddNewItem from "../../components/AddNewItem";
import Pagination from "@material-ui/lab/Pagination";
import DB from "../../services/IndexedDb";

export default function Home() {
  const [remindersList, setRemindersList] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
  ]);
  const [pagination, setPagination] = useState(0);
  const handleGetItems = async () => {
    return await DB.findAll();
  };
  const handleNumberPagination = () => {
    return setPagination(Math.ceil(remindersList.length / 12));
  };

  useEffect(() => {
    const items = handleGetItems();
    console.log(items);
    handleNumberPagination();
  }, [remindersList]);

  return (
    <Grid container spacing={3} style={{ display: "flex" }}>
   
      {remindersList.map((value, index) => (
        <Grid item sm={12} xs={12} md={3} key={index}>
          <ReminderCard
            title="Olá"
            description="Fazer caféasdasdasdasdasdasd"
          />
        </Grid>
      ))}
      <Grid item sm={12} xs={12} md={3} style={{ display: "flex" }}>
        <AddNewItem />
      </Grid>
    </Grid>
  );
}
