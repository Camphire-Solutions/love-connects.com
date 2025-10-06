const { users } = require("../data/users");

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ success: true, message: "Login successful", user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

exports.getUsers = (req, res) => {
  res.json(users);
};
