const Admin = require('../models/Adminmodel');

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required' });

  try {
    const admin = await Admin.findOne({ email, password });
    if (!admin) return res.status(401).json({ message: 'Invalid admin credentials' });

    // You can send a session token or JWT here if needed
    res.status(200).json({ message: 'Admin login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
