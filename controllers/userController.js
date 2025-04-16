const User = require('../models/userModel');

// Create user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved); // show everything including password
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all users (SHOW password)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // no .select(), so password is included
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read user by ID (SHOW password)
exports.getUserById = async (req, res) => {
  const { userid } = req.query;
  if (!userid) return res.status(400).json({ message: 'User ID is required.' });

  try {
    const user = await User.findById(userid); // no .select()
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user (SHOW password)
exports.updateUser = async (req, res) => {
    const { user_id, ...updateData } = req.body;
    if (!user_id) return res.status(400).json({ message: 'User ID is required to update.' });
  
    try {
      const updated = await User.findByIdAndUpdate(user_id, updateData, { new: true });
      if (!updated) return res.status(404).json({ message: 'User not found' });
  
      res.status(200).json({
        message: 'User updated successfully',
        updatedUser: updated
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Delete user
exports.deleteUser = async (req, res) => {
  const { userid } = req.query;
  if (!userid) return res.status(400).json({ message: 'User ID is required to delete.' });

  try {
    const deleted = await User.findByIdAndDelete(userid);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login (HIDE password in response)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required.' });

  try {
    const user = await User.findOne({ email, password }).select('-password');
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    res.status(200).json({ message: 'User successfully logged in', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
