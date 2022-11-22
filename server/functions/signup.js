const {
  userSignUp,
  userExist,
  emailExist,
} = require('../../data/prisma/scripts/user.js');

const signUp = async (req, res) => {
  const data = req.body;
  const dataKeys = Object.keys(data);
  if (
    dataKeys.length != 3 ||
    !dataKeys.includes('username') ||
    !dataKeys.includes('password') ||
    !dataKeys.includes('email') ||
    !req.body
  ) {
    console.log(`[SignUp Failed] Invalid Request`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'Invalid Request' });
  }

  const finduser = await userExist(data);
  if (finduser) {
    console.log(`[SignUp Failed] username already exist`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'username Already Exist' });
  }

  const findEmail = await emailExist(data);
  if (findEmail) {
    console.log(`[SignUp Failed] email already exist`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'email Already Exist' });
  }

  const newUser = await userSignUp(data);
  if (!newUser) {
    console.log(`[SignUp Failed] DB interaction failed`);
    return res
      .status(400)
      .json({ status: 'failed', content: 'DB interaction failed' });
  } else {
    console.log(
      `[SignUp Success] userId : ${newUser.id}, username : ${newUser.username}`
    );
    res.status(200).json({
      status: 'success',
      content: {
        userId: newUser.id,
        username: newUser.username,
      },
    });
  }
};

module.exports = {
  signUp,
};
