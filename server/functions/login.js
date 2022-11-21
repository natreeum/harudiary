// prisma here

const login = (req, res) => {
  const data = req.body;
  const dataKeys = Object.keys(data);
  if (
    dataKeys.length != 2 ||
    !dataKeys.includes('username') ||
    !dataKeys.includes('password') ||
    !data
  )
    res.status(400).send('Invalid Request');
  else res.status(200).send('post success');
};

module.exports = {
  login,
};
