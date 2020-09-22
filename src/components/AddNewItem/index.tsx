import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import DBReminders from "../../services/ReminderServices";
import { useReminder } from "../../context/ReminderContext";

const AddNewItem: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [prioridade, setPrioridade] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { reminders, handleSetList } = useReminder();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function handleAddItem() {
    const item = { title, description, level: prioridade };
    await DBReminders.create(item).then((result: any) => {
      if (result.data.id) {
        handleSetList([...reminders, result.data]);
        handleClose();
      } else {
        handleClose();
        alert("Houve um falha! Entre em contato ou tente novamente mais tarde");
      }
    });
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="form-dialog-title">
          Adicione um novo lembrete
        </DialogTitle>

        <DialogContent>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl} fullWidth>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Titulo"
                type="text"
                fullWidth
                onChange={(item) => {
                  setTitle(item.target.value as string);
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="Prioridade">Prioridade</InputLabel>
              <Select
                labelId="Prioridade"
                id="demo-simple-select-outlined"
                value={prioridade}
                onChange={(item) => {
                  setPrioridade(item.target.value as string);
                }}
                label="Prioridade"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Baixa</MenuItem>
                <MenuItem value={20}>Média</MenuItem>
                <MenuItem value={30}>Alta</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl} fullWidth>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Descrição"
                rows={5}
                onChange={(item) => {
                  setDescription(item.target.value as string);
                }}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAddItem} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.fabButton}
      >
        <Add />
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "max-width",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    fabButton: {
      position: "fixed",
      bottom: 50,
      right: 50,
    },
  })
);

export default AddNewItem;
