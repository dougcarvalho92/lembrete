import IReminder from "../interfaces/IReminders";
import api from "./api";

const endpoint = "reminders";

var requestData = {
  offset: 0,
  perPage: 1,
  currentPage: 0,
  length: 0,
};

const RemindersService = {
  async list(page = 1) {
    console.log(page);
    return await api.get(endpoint).then((res) => {
      const data = res.data;
      const slice = data.slice((page - 1) * data.length, page * data.length);
      requestData.currentPage = page;
      requestData.length = Math.ceil(data.length / requestData.perPage);
      return { items: slice, requestData };
    });
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
