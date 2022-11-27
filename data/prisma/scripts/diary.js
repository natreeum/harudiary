const { prisma } = require('./prisma.js');

const newDiary = async (data) => {
  const { date, userId, content } = data;
  try {
    const newDiaryData = await prisma.diary.create({
      data: { date, userId, content },
    });
    return newDiaryData;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const modifyDiary = async () => {};

const deleteDiary = async () => {};

const getDiary = async () => {};

module.exports = {
  newDiary,
};
