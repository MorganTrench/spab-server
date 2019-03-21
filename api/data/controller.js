const db = require('../../models');
const serverEmitter = require('../../events');
const eventListings = require('../../util').events;

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
  console('hit');
  console.log(JSON.stringify(req.body));
  const sample = Object.assign(Object.assign({}, req.body), {
    timestamp: Date.now()
  });
  db.Sample.create(sample).then(
    () => {
      serverEmitter.emit(eventListings.SAMPLE_RECIEVED, sample);
      res.send('success');
    },
    err => {
      console.log(err);
      res.status(500).send('err: ' + err);
    }
  );
};
