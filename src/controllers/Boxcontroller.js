const Box = require('../models/Box')

class BoxController {
    async store(req, res) {

        const box = await Box.create(req.body);

        return res.json(box);
    }

    async  getAll(req, res) {

        const boxes = await Box.find();

        return res.json(boxes);
    }

    async  get(req, res) {

        const boxes = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        })
        return res.json(boxes);
    }

}

module.exports = new BoxController();