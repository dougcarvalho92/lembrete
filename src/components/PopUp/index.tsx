import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";

import React from "react";
import { useReminder } from "../../context/ReminderContext";

// import { Container } from './styles';

const PopUp: React.FC = ({ children }) => {
  const {
    open,
    handleCreate,
    handleClose,
    handleUpdate,
    id,
    title,
    description,
    level,
  } = useReminder();

  async function handleAddItem() {
    if (!id) {
      await handleCreate({ title, description, level });
      console.log("CRIAR");
    } else {
      await handleUpdate({ id, title, description, level });
      console.log("ATUALIZAR");
    }

    handleClose();
  }
  return (
    <Dialog
      open={open as boolean}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth={"sm"}
      onLoadStart={() => {
        console.log("Ol´pa");
      }}
    >
      <DialogTitle id="form-dialog-title">
        Adicione um novo lembrete
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>

        <Button onClick={handleAddItem} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUp;
