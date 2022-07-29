const {UserSchema} = require('../../schemas/user.schema');
const objectId = require("mongodb").ObjectId;

const action = async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const id = new objectId(req.body._id);
  const {name, email, city, birthday, phone, password, avatar} = req.body;

  const user = await UserSchema.findOneAndUpdate(
    {_id: id},
    {
      $set: {
        name: name,
        email: email,
        city: city,
        birthday: birthday,
        phone: phone,
        password: password,
        avatar: avatar,
      }
    },
    );
  await user.save()
  const candidate =  await UserSchema.findOne({email: req.body.email})
  res.send(candidate)
};

module.exports = {
  action,
};