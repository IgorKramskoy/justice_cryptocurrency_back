const {UserSchema} = require('../../schemas/user.schema');
const action = async (req, res) => {

  if(!req.body) return res.sendStatus(400);

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const candidate =  await UserSchema.findOne({email: req.body.email})
  if(!candidate) {
    try {
      const newUser = UserSchema.create(user, function(err){
        if(err) return console.log(err);
      });
      await newUser.save()
    } catch (e) {
      console.log(e.message)
    }

    await res.status(201).send('created');
  } else {
    await res.status(403).send('user already exists')
  }

};

module.exports = {
  action,
};