// require('../db').connect()
const TodoModel = require("../models/todo");

async function read(filter, proj) {
  return await TodoModel.find(filter, proj);
}

async function readOne(filter, proj) {
  const res = await TodoModel.findOne(filter, proj);
  return res;
}

// async function readOneAndPopulate(filter, proj, populate) {
//   return await TodoModel.findOne(filter, proj).populate(populate);
// }

async function create(newTodo) {
  return await TodoModel.create(newTodo);
}

async function update(id, updatedTodo) {
  return await TodoModel.findByIdAndUpdate(id, updatedTodo, { new: true });
}

async function del(filter) {
  return await TodoModel.findOneAndDelete(filter);
}

module.exports = {
  read,
  readOne,
  // readOneAndPopulate,
  create,
  update,
  del,
};

