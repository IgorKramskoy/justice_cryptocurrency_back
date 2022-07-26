const action = async (req, res) => {
  const collection = req.app.locals.collection;
  await collection.find({}).toArray((err, users) => {
    if (err) return console.log(err);
    const authUser = users.find((item) => item.email === req.body.email)
    if(authUser && authUser.password === req.body.password) {
      res.send(authUser)
    } else {
      res.status(403).send('user already exists')
    }
  })

};

module.exports = {
  action,
};