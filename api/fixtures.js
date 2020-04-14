const mongoose = require('mongoose');
const config = require("./config");
const nanoid = require('nanoid');

const Artist = require('./model/Artist');
const Album = require('./model/Album');
const Track = require('./model/Track');
const User = require('./model/User');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collection = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collection) {
        await mongoose.connection.db.dropCollection(coll.name);
    }
    await User.create({
        username: 'User',
        password: '123',
        avatar: 'fixtures/цой.webp',
        displayName: 'Виктор Цой',
        token: nanoid()
    }, {
        username: 'Admin',
        password: '123',
        displayName: 'Александер Анашист',
        avatar: 'fixtures/зипуля.jpeg',
        role: 'admin',
        token: nanoid()

    });
    mongoose.connection.close();
};

run().catch(e => {
    throw e;
});
