const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../utils/data');

const register = async (req, res) => { /* ... */ };
const login = async (req, res) => { /* ... */ };

module.exports = { register, login };
