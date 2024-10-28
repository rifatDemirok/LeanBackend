const mongoose = require('mongoose');


const database =()=>{

    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to database')
        })
        .catch((error) => {
            console.log('Error in connecting to database:', error)
        })
            
        
    } catch (error) {
        console.log('Error in connecting to database:', error)
    }
}

module.exports = database;