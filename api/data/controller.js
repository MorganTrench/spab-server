const db = require('../../models');

exports.getData = (req, res) => {
  res.send('data controller success');
};

exports.receiveData = (req, res) => {
  db.Sample.create({
    sourceId: 'SPAB',
    timestamp: Date.now(),
    latitude: (Math.random() - 0.5) * 100,
    longitude: (Math.random() - 0.5) * 100,
    temperature: (Math.random() - 0.5) * 15 + 25
  }).then(
    () => {
      res.send('success');
    },
    err => {
      console.log(err);
      res.status(500).send('err: ' + err);
    }
  );
};
