// prisma here
const { userSignIn } = require('../../data/prisma/scripts/user');

const login = async (req, res) => {
  const data = req.body;
  const dataKeys = Object.keys(data);
  if (
    dataKeys.length != 2 ||
    !dataKeys.includes('username') ||
    !dataKeys.includes('password') ||
    !data
  )
    res.status(400).send('Invalid Request');
  const signInUser = await userSignIn(data);
  if (!signInUser)
    res.status(400).json({ status: 'failed', content: 'No matched user' });
  else {
    res.status(200).json({
      status: 'success',
      userId: signInUser.id,
    });
  }
};

module.exports = {
  login,
};
