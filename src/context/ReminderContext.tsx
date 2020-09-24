import React, { createContext, useContext, useEffect, useState } from "react";

import { AxiosResponse } from "axios";
import DBReminders from "../services/ReminderServices";
import IReminder from "../interfaces/IReminders";
import ReminderContexData from "../interfaces/ReminderContextData";

const ReminderContext = createContext<ReminderContexData>(
  {} as ReminderContexData
);

export const ReminderProvider: React.FC = ({ children }) => {
  const [reminders, setReminders] = useState<IReminder[] | []>([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLoading = async (loading: boolean) => {
    setLoading(loading);
  };

  const handleLoadData = async () => {
    const remindersData = await DBReminders.list();
    setReminders(remindersData);
  };

  const handleClickOpen = async (item: IReminder | null) => {
    handleSetTitle(item?.title as String);
    handleSetDescription(item?.description as String);
    handleSetLevel(item?.level as Number);
    handleSetId(item?.id as String);
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const handleCreate = async (reminder: IReminder) => {
    DBReminders.create(reminder).then((result: any) => {
      if (result.data.id) {
        handleLoadData();
        return true;
      }
    });
  };
  const handleUpdate = async (reminder: IReminder) => {
    await DBReminders.update(reminder).then((result: any) => {
      if (result.data.id) {
        handleLoadData();
        return true;
      }
    });
  };
  const handleRemove = async (id: String) => {
    DBReminders.remove(id).then((result: AxiosResponse) => {
      if (result.status === 200) {
        handleLoadData();
      }
    });
  };
  const handleSetList = async (reminders: IReminder[]) => {
    setReminders(reminders);
  };
  const handleSetTitle = async (title: String) => {
    setTitle(title as string);
  };
  const handleSetDescription = async (description: String) => {
    setDescription(description as string);
  };
  const handleSetLevel = async (level: Number) => {
    setLevel(level as number);
  };
  const handleSetId = async (id: String) => {
    setId(id as string);
  };
  return (
    <ReminderContext.Provider
      value={{
        reminders,
        title,
        description,
        level,
        open,
        id,
        loading,
        handleSetId,
        handleCreate,
        handleUpdate,
        handleRemove,
        handleSetList,
        handleClose,
        handleClickOpen,
        handleSetTitle,
        handleSetDescription,
        handleSetLevel,
        handleLoadData,
        handleLoading,
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
