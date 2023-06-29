//handle mongodb connection

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ProjectManagement', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDb successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connet to mongodb");
    console.log(e);
});


module.exports = {
    mongoose
};
