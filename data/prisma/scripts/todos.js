const { prisma } = require('./prisma.js');

const newTodo = async (data) => {
  const { userId, date, content } = data;
  try {
    const newTodoData = await prisma.todos.create({
      data: {
        userId,
        date,
        content,
      },
    });
    return newTodoData;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const modifyTodo = async (data) => {};

const deleteTodo = async (data) => {};

const getTodo = async (data) => {};

module.exports = {
  newTodo,
  modifyTodo,
  deleteTodo,
  getTodo,
};
