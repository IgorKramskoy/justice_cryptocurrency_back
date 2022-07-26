const action = async (req, res) => {
  if(!req.body) return res.sendStatus(400);

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const collection = req.app.locals.collection;
  const candidate =  await collection.findOne({email: req.body.email})
  if(!candidate) {
    await collection.insertOne(user, function(err){
      if(err) return console.log(err);
    });
    await res.status(201).send('created');
  } else {
    await res.status(403).send('user already exists')
  }

};

module.exports = {
  action,
};