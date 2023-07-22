import mongoose from 'mongoose'

const Connection = async(USERNAME, PASSWORD) => {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@shivam.aope6eo.mongodb.net/Shivam?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Connect to database successfully');
    }catch(error){
        console.log('Error while connecting to the database ',error.message);
    }
}

export default Connection