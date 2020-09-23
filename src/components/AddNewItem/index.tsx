import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core/";
import React, { useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { useReminder } from "../../context/ReminderContext";

const AddNewItem: React.FC = () => {
  const classes = useStyles();

  const {
    handleCreate,
    handleClose,
    open,
    title,
    description,
    level,
    id,
    handleChange,
    handleUpdate,
  } = useReminder();

  useEffect(() => {});

  async function handleAddItem() {
    const result = handleCreate({ title, description, level });
    if (result) {
      handleClose();
    }
  }
  return (
    <div>
      <Dialog
        open={open as boolean}
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
                value={title}
                autoFocus
                margin="dense"
                label="Titulo"
                type="text"
                fullWidth
                onChange={(item) => {
                  handleChange("setTitle", item.target.value as string);
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="Level">Level</InputLabel>
              <Select
                labelId="Level"
                value={level}
                onChange={(item) => {
                  handleChange("setLevel", item.target.value as number);
                }}
                label="Level"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>Baixa</MenuItem>
                <MenuItem value={1}>Média</MenuItem>
                <MenuItem value={2}>Alta</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl} fullWidth>
              <TextField
                value={description}
                label="Descrição"
                multiline
                rows={4}
                rowsMax={4}
                onChange={(item) => {
                  handleChange("setDescription", item.target.value as string);
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
            {id ? "Atualizar" : "Salvar"}
          </Button>
        </DialogActions>
      </Dialog>
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
