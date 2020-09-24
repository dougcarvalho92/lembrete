import IReminder from "../interfaces/IReminders";
import api from "./api";

const endpoint = "reminders";

const RemindersService = {
  async list(page = 1) {
    var data = (await api.get(endpoint)).data;

    return data.sort((a: IReminder, b: IReminder) => {
     
      return a.level < b.level ? 1 : -1;
    });
  },
  async create(item: IReminder) {
    return await api.post(endpoint, item);
  },
  async update(item: IReminder) {
    const id = item.id;
    const newItem = {
      title: item.title,
      description: item.description,
      level: item.level,
    };
    return await api.put(`${endpoint}?id=${id}`, newItem);
  },
  async remove(id: String) {
    return await api.delete(`${endpoint}?id=${id}`);
  },
};
export default RemindersService;
