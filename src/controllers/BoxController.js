const Box = require("../models/Box");

class BoxController {
  async index(req, res) {
    const boxs = await Box.find({});
    return res.json(boxs);
  }
  async store(req, res) {
    const box = await Box.create(req.body);
    return res.json(box);
  }

  async show(req, res) {
    return res.json(
      await Box.findById(req.params.id).populate({
        path: "files",
        options: { sort: { createdAt: -1 } }
      })
    );
  }
}

module.exports = new BoxController();
