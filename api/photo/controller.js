const db = require('../../models');

exports.recievePhoto = (req, res) => {
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
