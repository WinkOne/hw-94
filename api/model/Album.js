const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    titleAlbum: {
        type: String,
        required: true,
    },
    executor: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
    },
    yearOfIssueAlbum: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    imageCover: {
        type: String,
    },
    public: false
});

const Album = mongoose.model( 'Album', AlbumSchema);

module.exports = Album;