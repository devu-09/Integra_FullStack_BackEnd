const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://DevanG:5zLruO3rTVSkKoFQ@cluster0.bmwjt.mongodb.net/Article?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true});
        
    } catch(err) {
        console.log("hello hi");
        console.log(err);
        process.exit();
    }
}

