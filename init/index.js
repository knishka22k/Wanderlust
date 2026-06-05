const mongoose = require("mongoose"); 
main() 
.then(() => {  
    console.log("connection successful"); 
}) 
.catch(err => console.log(err));  
async function main(){  
    await mongoose.connect("mongodb+srv://wanderlust_db:mango123@cluster0.pu3nir7.mongodb.net/wanderlust?retryWrites=true&w=majority");
}  

const Content = require("../models/content.js");
const initdata = require("./data.js");

const initDB = async () => {
    await Content.deleteMany({});
    await Content.insertMany(initdata.data);
    console.log("data was initalized");
};
initDB();