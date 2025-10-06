const { profiles } = require("../data/users");

exports.getProfiles = (req, res) => {
  res.json(profiles);
};
