import React, { createContext, useContext, useState } from "react";

import { AxiosResponse } from "axios";
import DBReminders from "../services/ReminderServices";
import IReminder from "../interfaces/IReminders";

//interface ReminderContextData, para definir o tipo de conteudo do Context
interface ReminderContexData {
  reminders: IReminder[];
  page: Number | 1;
  open: Boolean;
  id: String;
  level: Number;
  title: String;
  description: String;
  handleCreate(reminder: IReminder): Promise<void>;
  handleUpdate(reminder: IReminder): Promise<void>;
  handleRemove(id: String): Promise<void>;
  handleSetList(reminders: IReminder[]): Promise<void>;
  handleClickOpen(item: IReminder | null): Promise<void>;
  handleClose(): Promise<void>;
  handleChange(CustomFuncion: String, value: String | Number): Promise<void>;
}
const ReminderContext = createContext<ReminderContexData>(
  {} as ReminderContexData
);

export const ReminderProvider: React.FC = ({ children }) => {
  const [reminders, setReminders] = useState<IReminder[] | []>([]);
  const [level, setLevel] = useState(0);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  


  const handleClickOpen = async (item: IReminder | null) => {
    if (item) {
      setId(item.id as string);
      setTitle(item.title as string);
      setDescription(item.description as string);
      setLevel(item.level as number);
    }
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const handleCreate = async (reminder: IReminder) => {
    DBReminders.create(reminder).then((result: any) => {
      if (result.data.id) {
        handleSetList([...reminders, result.data]);
        return true;
      }
    });
  };
  const handleUpdate = async (reminder: IReminder) => {
    await DBReminders.update(reminder).then((result: any) => {
      if (result.data.id) {
        handleSetList([...reminders, result.data]);
        return true;
      }
    });
  };
  const handleRemove = async (id: String) => {
    DBReminders.remove(id).then((result: AxiosResponse) => {
      if (result.status === 200) {
        handleSetList(reminders.filter((reminder) => reminder.id !== id));
      }
    });
  };
  const handleSetList = async (reminders: IReminder[]) => {
    setReminders(reminders);
  };

  const handleChange = async (
    CustomFuncion: String,
    value: string | number
  ) => {
    switch (CustomFuncion) {
      case "setTitle":
        setTitle(value as string);
        break;
      case "setDescription":
        setDescription(value as string);
        break;
      case "setLevel":
        setLevel(value as number);
        break;
    }
  };
  return (
    <ReminderContext.Provider
      value={{
        reminders,
        handleCreate,
        handleUpdate,
        handleRemove,
        page,
        handleSetList,
        open,
        handleClose,
        handleClickOpen,
        title,
        description,
        level,
        id,
        handleChange,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export function useReminder() {
  const context = useContext(ReminderContext);
  return context;
}
