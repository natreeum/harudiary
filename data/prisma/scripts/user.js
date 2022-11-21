const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function userSignUp(data) {
  const { username, password, email } = data;
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    return newUser;
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  userSignUp,
};
