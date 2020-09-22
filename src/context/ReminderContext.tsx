import React, { createContext, useState, useContext } from "react";
import IReminder from "../interfaces/IReminders";

//interface ReminderContextData, para definir o tipo de conteudo do Context
interface ReminderContexData {
  reminders: IReminder[];
  page: Number | 1;
  handleCreate(reminder: IReminder): Promise<void>;
  handleUpdate(reminder: IReminder): Promise<void>;
  handleRemove(id: Number): Promise<void>;
  handleSetList(reminders: IReminder[]): Promise<void>;
}
const ReminderContext = createContext<ReminderContexData>(
  {} as ReminderContexData
);

export const ReminderProvider: React.FC = ({ children }) => {
  const [reminders, setReminders] = useState<IReminder[] | []>([]);
  const [page, setPage] = useState(1);

  const handleCreate = async (reminder: IReminder) => {};
  const handleUpdate = async (reminder: IReminder) => {};
  const handleRemove = async (id: Number) => {};
  const handleSetList = async (reminders: IReminder[]) => {
    setReminders(reminders);
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
