const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        // Connect With Mongoose 
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });

        // Connect Express to Mongo
        mongoose.connection.once('open', ()=> {
            console.log('connected to mongo');
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;