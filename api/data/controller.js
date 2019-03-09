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

// setInterval(() => {
//   const thing = {
//     sourceId: 'SPAB',
//     timestamp: '2019-02-28T15:17:07.989Z',
//     latitude: (Math.random() - 0.5) * 10,
//     longitude: (Math.random() - 0.5) * 10,
//     temperature: (Math.random() - 0.5) * 10 + 20
//   };
//   db.Sample.create(thing).then(
//     () => {},
//     err => {
//       console.log(err);
//     }
//   );
// });
