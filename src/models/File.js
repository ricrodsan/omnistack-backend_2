const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        require: true
    }

}, {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

File.virtual('url').get(function () {
    const url  = process.env.URL ||'http://localhost:3001' ;
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);