const adityaModel = require('../model/adityaModel');

// CREATE
exports.createDetails = async (req, res) => {
  try {
    const newDetails = await adityaModel.create(req.body);
    res.status(201).json(newDetails);
    console.log(newDetails);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
exports.getAllDetails = async (req, res) => {
  try {
    const details = await adityaModel.find().sort({ _id: -1 }).limit(1);
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// READ ONE
exports.getDetailsById = async (req, res) => {
  try {
    const details = await adityaModel.findById(req.params.id);
    if (!details) {
      return res.status(404).json({ message: "Details not found" });
    }
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
exports.updateDetails = async (req, res) => {
  try {
    const updatedDetails = await adityaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDetails) {
      return res.status(404).json({ message: "Details not found" });
    }
    res.status(200).json(updatedDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteDetails = async (req, res) => {
  try {
    const deletedDetails = await adityaModel.findByIdAndDelete(req.params.id);
    if (!deletedDetails) {
      return res.status(404).json({ message: "Details not found" });
    }
    res.status(200).json({ message: "Details deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
