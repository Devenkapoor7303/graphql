/**
 * User model
 * */
const MongoDbModel = require('../../bootloader/mongo');
// For Number types better reading
const Float = Number;
const Int = Number;

class Board extends MongoDbModel {

    /*Define which database to connect to*/
    static get connection() {
        return this.APP_DB;
    }

    /* Needed functions by the MongoDbModel Interface */
    static get Name() {
        return this.name;
    }

    static get Schema() {
        return mongoose => ({
            name: String,
            lists: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'List'
            }]
        });
    }

    static get Indexes() {
        return [];
    }
}

exports = module.exports = Board;

