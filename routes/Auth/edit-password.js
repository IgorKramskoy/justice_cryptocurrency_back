const {UserSchema} = require('../../schemas/user.schema');
const bcrypt = require('bcrypt');

const action = async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const {name, email, city, birthday, phone, password, avatar, passwordNew, _id} = req.body;
  const candidate =  await UserSchema.findOne({email: req.body.email})

  if (await bcrypt.compare(password, candidate.password)) {
    const hashedPassword = await bcrypt.hash(passwordNew, 10)
    const user = await UserSchema.findOneAndUpdate(
      _id,
      {
        name,
        email,
        city,
        birthday,
        phone,
        password: hashedPassword,
        avatar,
      },
    );
    await user.save()
    res.send(await UserSchema.findOne({email: req.body.email}))
  } else {
    res.status(403).send('password not')
  }


};

module.exports = {
  action,
};