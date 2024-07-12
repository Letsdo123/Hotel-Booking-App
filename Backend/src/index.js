import dotenv from 'dotenv'
import { app } from './app.js';

dotenv.config({
    path: './env'
})
// calling the connectDB Function
let PORT =  3000;

app.listen(PORT, () => {
    // console.log(`The server is started at ${https//localhot:${PORT}}`);
    console.log("The server is started at", PORT);
}) 