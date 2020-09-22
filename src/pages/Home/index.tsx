import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import RememberCard from "./../../components/Card/index";
import AddNewItem from "../../components/AddNewItem";
import Pagination from "@material-ui/lab/Pagination";
import DB from "../../services/IndexedDb";
import { common } from "@material-ui/core/colors";

export default function Home() {
  const [remindersList, setRemindersList] = useState([]);

  const handleGetItems = async () => {
    return await DB.findAll();
  };

  useEffect(() => {
    const items = handleGetItems();
    console.log(items);
  }, []);

  return (
    <Grid container spacing={3} style={{ display: "flex" }}>
      {[0, 1, 2, 3].map((value) => (
        <Grid item sm={12} md={3}>
          <RememberCard
            title="Olá"
            description="Fazer caféasdasdasdasdasdasd"
          />
        </Grid>
      ))}
      <Grid item sm={12} md={3} style={{ display: "flex" }}>
        <AddNewItem />
      </Grid>
      <Pagination count={10} variant="outlined" />
    </Grid>
  );
}
