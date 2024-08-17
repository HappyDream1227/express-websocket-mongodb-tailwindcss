import query from '../models/comments.model.js';

export default {
  getAll : async (req, res) => {
    console.log("getAll")
    try {
      let result = await query.findAll();
      res.json(result);
    } catch (error) {
      console.error("Error getAll:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  
  getOneByID : async (req, res) => {
    console.log("getOneByID : ", req.params.id)
    try {
      let result = await query.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.error("Error getOneByID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 

  insertOne : async (req, res) => {
    console.log("insert data : ", req.body.data)
    try {
      let result = await query.insertOne(req.body.data);
      res.json({"status" : true});
    } catch (error) {
      console.error("Error insertOne:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 

  updateOne : async (req, res) => {
    let request = req.body
    console.log("update id and data : ", request.id,  request.data)
    try {
      let result = await query.updateOne(request.id, request.data);
      res.json({"status" : true});
    } catch (error) {
      console.error("Error updateOne:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 

  updateMany : async (req, res) => {
    let request = req.body
    console.log("update ids and datas : ", request.condition, request.data)
    try {
      let result = await query.updateMany(request.condition, request.data);
      res.json({"status" : true});
    } catch (error) {
      console.error("Error updateMany:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 

  deleteOne : async (req, res) => {
    console.log("delete id : ", req.body.id)
    try {
      let result = await query.deleteOne(req.body.id);
      console.log(result)
      res.json({"status" : true});
    } catch (error) {
      console.error("Error deleteOne :", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 

  deleteMany : async (req, res) => {
    let request = req.body
    console.log("delete many condition : ", request.id,  request.data)
    try {
      let result = await query.deleteMany(request.condition);
      res.json({"status" : true});
    } catch (error) {
      console.error("Error deleteMany :", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, 
}

// Or you can implement like this.
// export default class Comments {
//   static async getAll(req, res) {
//     console.log("getAll")
//     try {
//       let result = await query.findAll();
//       res.json(result);
//     } catch (error) {
//       console.error("Error getAll:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
//   /// add more functions ///
// }