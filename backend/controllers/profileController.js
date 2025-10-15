const { profiles } = require('../utils/data');

// Get all profiles (filters)
const getProfiles = (req, res) => {
  let results = profiles;

  const { ageMin, ageMax, gender } = req.query;
  if (ageMin) results = results.filter(p => p.age >= Number(ageMin));
  if (ageMax) results = results.filter(p => p.age <= Number(ageMax));
  if (gender) results = results.filter(p => p.gender === gender);

  res.json(results);
};

// Get own profile
const getMyProfile = (req, res) => {
  const profile = profiles.find(p => p.userId === req.user.id);
  res.json(profile);
};

// Update profile
const updateProfile = (req, res) => {
  let profile = profiles.find(p => p.userId === req.user.id);

  if (!profile) {
    profile = { userId: req.user.id, ...req.body };
    profiles.push(profile);
  } else {
    Object.assign(profile, req.body);
  }

  res.json(profile);
};

module.exports = { getProfiles, getMyProfile, updateProfile };

