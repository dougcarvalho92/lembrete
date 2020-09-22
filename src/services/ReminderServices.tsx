import api from "./api";
const endpoint = "reminders";

const RemindersService = {
  async list(page = 1) {
    return await api.get(endpoint);
  },
  async create(item: Object) {
    return await api.post(endpoint, item);
  },
  async update(item: Object) {
    return await api.put(endpoint, item);
  },
  async remove(id: String) {
    return await api.delete(`${endpoint}/${id}`);
  },
};
export default RemindersService;
