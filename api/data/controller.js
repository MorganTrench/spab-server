const db = require('../../models');

exports.getData = (req, res) => {
  db.Sample.findAll({
    order: [['timestamp', 'DESC']],
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt']
    }
  }).then(
    samples => res.status(200).json(samples),
    err => res.status(400).send(err)
  );
};

exports.receiveData = (req, res) => {
  const sample = Object.assign(Object.assign({}, req.body), {
    timestamp: Date.now()
  });
  db.Sample.create(sample).then(
    () => {
      res.send('success');
    },
    err => {
      console.log(err);
      res.status(500).send('err: ' + err);
    }
  );
};
