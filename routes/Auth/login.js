const {UserSchema} = require('../../schemas/user.schema');

const action = async (req, res) => {

  const candidate =  await UserSchema.findOne({email: req.body.email})

  if (candidate && candidate.password === req.body.password) {
    res.send(candidate)
  } else {
    res.status(403).send('user already exists')
  }


};

module.exports = {
  action,
};