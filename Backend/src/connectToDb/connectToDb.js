import mongoose from "mongoose";

const connectToDb = async()=>{
    await mongoose.connect("mongodb://aayushshahnirala_db_user:yV4nrsqAZ2wb8TDe@ac-ex8vo0e-shard-00-00.8tfeos4.mongodb.net:27017,ac-ex8vo0e-shard-00-01.8tfeos4.mongodb.net:27017,ac-ex8vo0e-shard-00-02.8tfeos4.mongodb.net:27017/?ssl=true&replicaSet=atlas-idbz80-shard-0&authSource=admin&appName=Sunway_MERN");
    console.log("Connected to Db");
};

export default connectToDb