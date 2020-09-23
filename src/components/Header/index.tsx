import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import DBReminders from "../../services/ReminderServices";
import IReminder from "../../interfaces/IReminders";
import InputBase from "@material-ui/core/InputBase";
import { Search } from "@material-ui/icons/";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useDebounce from "../../hooks/useDebounce";
import { useReminder } from "../../context/ReminderContext";

export default function Header() {
  const classes = useStyles();
  const { reminders, handleSetList, handleLoadData } = useReminder();
  const [textFilter, setTextFilter] = useState("");
  const filtro = useDebounce(textFilter, 1000);

  useEffect(() => {
    DBReminders.list().then(({ data }) => {
      if (filtro) {
        let filters = data.filter((item: IReminder) =>
          item.title.includes(filtro.toString())
        );

        handleSetList(filters);
        return;
      } else {
        handleSetList(data);
      }
    });
  }, [filtro]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Lembra-te
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Procurar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(item) => setTextFilter(item.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
