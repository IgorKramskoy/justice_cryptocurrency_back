const {UserSchema} = require('../../schemas/user.schema');
const bcrypt = require('bcrypt');

const action = async (req, res) => {

  const candidate =  await UserSchema.findOne({email: req.body.email})
  console.log(candidate);
  if (await bcrypt.compare(req.body.password, candidate.password)) {
    res.send(candidate)
  } else {
    res.status(403).send('user already exists')
  }


};

module.exports = {
  action,
};