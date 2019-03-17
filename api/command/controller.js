const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.getCommands = (req, res) => {
  console.log(JSON.parse(req.query['status']));

  let allowableStatuses = ['queued', 'executing'];
  // db.Command.findAll({
  //   order: [['createdAt', 'DESC']],
  //   where: {
  //     [Op.or]: allowableStatuses.map(status => {
  //       return {
  //         status
  //       };
  //     })
  //   },
  //   attributes: {
  //     exclude: []
  //   }
  // }).then(
  //   commands => res.status(200).json(commands),
  //   err => res.status(400).send(err)
  // );
  res.status(200).send();
};

exports.updateCommands = (req, res) => {
  res.status(200).send();
};

exports.updateProgress = (req, res) => {
  res.status(200).send();
};
