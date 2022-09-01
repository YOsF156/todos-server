const todos = require("../DL/controllers/todoController");

const allTasks = async () => {
  try {
    const allTodos = await todos.read({});
    console.log("🚀 ~ file: todoLogic.js ~ line 6 ~ allTasks ~ allTodos", allTodos)
    return allTodos;
  } catch (error) {
    return error;
  }
};

const addNewTask = async (body) => {
  try {
    const {
      date,
      details,
      priority,
      repeat,
      time,
      title
    } = body;


    const newTodo = {
      date,
      details,
      priority,
      repeat,
      time,
      title,
    };
    const createTodo = await todos.create(newTodo);
    return createTodo;
  } catch (err) {
    console.log("🚀 ~ file: todoLogic.js ~ line 36 ~ addNewTask ~ err", err)
    throw err;
  }
};

const updateTodo = async (body) => {
  const { id, ...updateData } = body
  try {
    const newTodo = await todos.update(body._id, updateData);
    if (newTodo._id) {
      return newRoom + " המשימה עודכנה בהצלחה";
    } else {
      throw { message: "המטלה לא נשמרה - בעייה בהגשת הנתונים", status: 500 };
    }
  } catch (e) {
    throw { error: e }
  }
};

const deleteTodo = async (id) => {
  try {

    const roomDelete = await todos.del({ _id: id });
    if (roomDelete) {
      return "המשימה נמחקה בהצלחה";
    } else {
      throw ({ message: "מחיקת הרשומה לא הצליחה" });
    }
  } catch (error) {
    throw error;
  }
};

const findUniqueTodo = async (id) => {
  const room = await todos.readOne({ _id: id });
  if (room) {
    return room;
  } else {
    return false;
  }
};

module.exports = {
  allTasks,
  findUniqueTodo,
  addNewTask,
  updateTodo,
  deleteTodo,
};
