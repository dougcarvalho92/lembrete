let db;
var request = indexedDB.open("Lembrate", 1);

function getObjectStore() {
  return db.transaction(["Reminders"], "readwrite").objectStore("Reminders");
}
const database = {
  start() {
    return new Promise((resolve) => {
      request.onsuccess = (event) => {
        db = request.result;
        resolve(this);
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        var remindersStore = db.createObjectStore("Reminders", {
          keyPath: "id",
        });
        remindersStore.createIndex("title", "title", { unique: false });
        remindersStore.createIndex("description", "description", {
          unique: false,
        });
        remindersStore.createIndex("level", "level", { unique: false });
      };
    });
  },
  find(id) {
    return new Promise((resolve) => {
      let request = getObjectStore().get(id);

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  },
  findAll() {
    return new Promise((resolve) => {
      let request = getObjectStore().getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  },
  insert(item) {
    return new Promise((resolve) => {
      item.id = new Date().getTime();

      let request = getObjectStore().add(item);
      request.onsuccess = () => {
        resolve(item);
      };
    });
  },
  update(item) {
    return new Promise((resolve) => {
      let request = getObjectStore().put(item);
      request.onsuccess = () => {
        resolve(item);
      };
    });
  },
  remove(id) {
    return new Promise((resolve) => {
      let request = getObjectStore().delete(id);
      request.onsuccess = () => {
        resolve(id);
      };
    });
  },
};
export default database;
