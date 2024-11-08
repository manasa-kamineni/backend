// import express
import express from 'express';
import {getblog,addblog} from'./src/blog.js';
const app = express();
const PORT = 3333;
app.use(express.json());
app.get('/blog', getblog);
app.post('/blog',addblog);
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);

});