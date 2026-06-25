const dotenv =require("dotenv")
const app = require('../backend/app')
const connectDB = require('../backend/src/config/db');

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000



app.listen(PORT,()=>{
   console.log(`Server is running successfully at ${PORT}`);
})
