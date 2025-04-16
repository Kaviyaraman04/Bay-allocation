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

exports.getBayById = async (req, res) => {
    const { bayid } = req.query;  // Get ID from query parameter
    if (!bayid) return res.status(400).json({ message: 'ID is required to fetch the bay.' });
  
    try {
      const bay = await Bay.findById(bayid); // Use query parameter ID
      if (!bay) return res.status(404).json({ message: 'Bay not found' });
      res.status(200).json(bay);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Update (Pass ID and Data in the Request Body)
exports.updateBay = async (req, res) => {
  const { _id, bay_name, bay_description, no_of_manpower, is_active } = req.body;

  if (!_id) return res.status(400).json({ message: 'ID is required to update the bay.' });

  try {
    const bay = await Bay.findByIdAndUpdate(
      _id, 
      { bay_name, bay_description, no_of_manpower, is_active },
      { new: true }
    );
    if (!bay) return res.status(404).json({ message: 'Bay not found' });
    res.status(200).json(bay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete (Use Query Parameter)
exports.deleteBay = async (req, res) => {
  const { bayid } = req.query;  // Get ID from query parameter
  if (!bayid) return res.status(400).json({ message: 'ID is required to delete the bay.' });

  try {
    const bay = await Bay.findByIdAndDelete(bayid); // Use query parameter ID
    if (!bay) return res.status(404).json({ message: 'Bay not found' });
    res.status(200).json({ message: 'Bay deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
