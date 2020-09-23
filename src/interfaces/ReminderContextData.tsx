import IReminder from "../interfaces/IReminders";

export default interface ReminderContexData {
  reminders: IReminder[];
  open: Boolean;
  title: String;
  description: String;
  level: Number;
  id?: String | null;
  handleSetTitle(title: String): Promise<void>;
  handleSetDescription(description: String): Promise<void>;
  handleSetLevel(level: Number): Promise<void>;
  handleSetId(id: String): Promise<void>;
  handleCreate(reminder: IReminder): Promise<void>;
  handleUpdate(reminder: IReminder): Promise<void>;
  handleRemove(id: String): Promise<void>;
  handleSetList(reminders: IReminder[]): Promise<void>;
  handleClickOpen(item: IReminder | null): Promise<void>;
  handleClose(): Promise<void>;
  handleLoadData():  Promise<void>;
}
