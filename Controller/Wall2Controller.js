const { Lights, Bollards  } = require("../Models/Wall2");
exports.BollardsGetAll = async (req, res) => {
  try {
    const bollards = await Bollards.find().sort({sNo:1});
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
exports.bollardsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const bollards = await Bollards.findById( id);
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.lightsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await Lights.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.bollardsPost = async (req, res) => {
  try {
    const data = req.body
    const result = await Bollards.insertMany(data)
    res.send({ status: true, message: 'Data Successfully Added', data: result });
  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.updateBollardsData = async (req, res) => {
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


exports.LightsGetAll = async (req, res) => {
  try {
    const lights = await Lights.find().sort({sNo:1});
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.postAllLights= async (req, res) => {
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
exports.updateLightsData = async (req, res) => {
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





//  exports.newOrder = async (req, res) => {
//   try {
//     const { productId, username, quantity, price, date } = req.body;
    
//     // Create a new order
//     const newOrder = new Orders({ productId, username, quantity, price, date });
//     await newOrder.save();

//     // Push order ID to the product's orders array
//     await Lights.findByIdAndUpdate(productId, { $push: { orders: newOrder._id } });

//     res.status(201).json({ message: 'Order created successfully', order: newOrder });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// exports.GetOrder = async (req, res) => {
//   try {
//     const product = await Lights.findById(req.params.id).populate('orders');
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }




