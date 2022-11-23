const { newTodo } = require('../../data/prisma/scripts/todos');

const regTodo = async (req, res) => {
  const data = req.body;
  const dataKeys = Object.keys(data);
  if (
    dataKeys.length != 3 ||
    !dataKeys.includes('userId') ||
    !dataKeys.includes('date') ||
    !dataKeys.includes('content')
  ) {
    console.log(`[Todo registration Failed] Invalid Request`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'Invalid Request' });
  }
  data.userId = Number(data.userId);
  const newTodoData = await newTodo(data);
  if (!newTodoData) {
    console.log(`[Todo registration Failed] DB interaction Failed`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'DB interaction Failed' });
  }
  console.log(
    `[Todo registration Success] Id : ${newTodoData.id} userId : ${newTodoData.userId}`
  );
  return res.status(200).json({
    status: 'success',
    content: {
      id: newTodoData.id,
      userId: newTodoData.userId,
    },
  });
};

module.exports = { regTodo };
