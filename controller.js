const Lights = require("./model");
const Bollards = require("./model")

exports.bollardsGetUser = async (req, res) => {
  try {
    const bollards = await Bollards.find();
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.bollardsPostUser = async (req, res) => {
  try {
    const data = req.body
    const result = await Bollards.insertMany(data)
    res.send({ status: true, message: 'Data Successfully Added', data: result });
  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.updateBollardsUser = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Bollards.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


exports.getUser = async (req, res) => {
  try {
    const lights = await Lights.find();
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.postUser = async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await Lights.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Lights.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
