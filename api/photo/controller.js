const db = require('../../models');

exports.recievePhoto = (req, res) => {
  const file = req.file;
  const sample = Object.assign({ filename: file.filename }, req.body);
  db.Photo.create(sample).then(
    () => {
      res.send('success');
    },
    err => {
      console.log(err);
      res.status(500).send('err: ' + err);
    }
  );
};

exports.listPhotos = (req, res) => {
  db.Photo.findAll({
    order: [['timestamp', 'DESC']],
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt']
    }
  }).then(
    photos => res.status(200).json(photos),
    err => res.status(400).send(err)
  );
};
