const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let commands = [
  {
    id: 1,
    action: 'moveTo',
    latitude: -31.96,
    longitude: 115.86
  },
  {
    id: 2,
    action: 'moveTo',
    latitude: -31.97,
    longitude: 115.86
  },
  {
    id: 3,
    action: 'moveTo',
    latitude: -31.97,
    longitude: 115.87
  },
  {
    id: 4,
    action: 'moveTo',
    latitude: -31.96,
    longitude: 115.88
  }
];

exports.getCommands = (req, res) => {
  // console.log(JSON.parse(req.query['status']));

  // let allowableStatuses = ['queued', 'executing'];
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
  res.status(200).send(commands);
};

exports.updateCommands = (req, res) => {
  const newCommands = req.body;
  if (newCommands.length > 0) {
    const first = newCommands[0];
    let firstPreserved = false;
    db.Command.findAll().then(commands => {
      commands.forEach((command, index) => {
        if (index === 0) {
          // Check if the first new command is 'idential' to the previous, as not to alter its status
          if (
            command.action === first.action &&
            command.latitude === first.latitude &&
            command.longitude === first.longitude
          ) {
            // Do nothing, TODO add checks for commands that aren't just the simple 'moveTo'
            firstPreserved = true;
          } else {
            command.destroy(console.log);
          }
        } else {
          command.destroy(console.log);
        }
      });
    });
    if (firstPreserved) newCommands.shift();
    db.Command.bulkCreate(newCommands);
  }
  res.status(200).send();
};

exports.updateProgress = (req, res) => {
  res.status(200).send();
};
