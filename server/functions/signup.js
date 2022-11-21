const { userSignUp } = require('../../data/prisma/scripts/user.js');

const signup = async (req, res) => {
  const data = req.body;
  const dataKeys = Object.keys(data);
  if (
    dataKeys.length != 3 ||
    !dataKeys.includes('username') ||
    !dataKeys.includes('password') ||
    !dataKeys.includes('email') ||
    !req.body
  )
    res.status(400).send('Invalid Request');

  const newUser = await userSignUp(data);
  if (!newUser) res.status(400).send('Invalid Request');
  else {
    res.status(200).json({
      status: 'success',
      userId: newUser.id,
      username: newUser.username,
    });
  }
};

module.exports = {
  signup,
};
