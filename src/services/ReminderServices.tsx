import IReminder from "../interfaces/IReminders";
import api from "./api";

const endpoint = "reminders";

const RemindersService = {
  async list(page = 1) {
    return await api.get(endpoint);
  },
  async create(item: IReminder) {
    return await api.post(endpoint, item);
  },
  async update(item: IReminder) {
    return await api.put(`${endpoint}?id=${item.id}`, item);
  },
  async remove(id: String) {
    return await api.delete(`${endpoint}?id=${id}`);
  },
};
export default RemindersService;
