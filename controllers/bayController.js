const Bay = require('../models/bayModel');

// Create
exports.createBay = async (req, res) => {
  try {
    const bay = new Bay(req.body);
    const savedBay = await bay.save();
    res.status(201).json(savedBay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read All
exports.getAllBays = async (req, res) => {
  try {
    const bays = await Bay.find();
    res.status(200).json(bays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read One
exports.getBayById = async (req, res) => {
  try {
    const bay = await Bay.findById(req.params.id);
    if (!bay) return res.status(404).json({ message: 'Bay not found' });
    res.status(200).json(bay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateBay = async (req, res) => {
  try {
    const bay = await Bay.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bay) return res.status(404).json({ message: 'Bay not found' });
    res.status(200).json(bay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
exports.deleteBay = async (req, res) => {
  try {
    const bay = await Bay.findByIdAndDelete(req.params.id);
    if (!bay) return res.status(404).json({ message: 'Bay not found' });
    res.status(200).json({ message: 'Bay deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
