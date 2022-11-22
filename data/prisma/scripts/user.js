const { prisma } = require('./prisma.js');

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

async function userSignIn(data) {
  const { username, password } = data;
  try {
    const signInUser = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    return signInUser;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function userExist(data) {
  const { username } = data;
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    return findUser;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function emailExist(data) {
  const { email } = data;
  try {
    const findEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return findEmail;
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  userSignUp,
  userSignIn,
  userExist,
  emailExist,
};
