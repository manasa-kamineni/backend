import { client } from './dbconnect.js'; // No need to import Client if it's unused

// Function to get blogs
export const getblog = async (req, res) => {
 await get(req,res)
};

// Function to add a blog
export const addblog = (req, res) => {
    console.log("add Blog start",req.body);
    run(req,res);
    res.send();
};
async function run(req,res) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
        const collection = await  client.db('test').collection('blog');;
        const blog = req.body;
        console.log(collection)
        collection.insertOne(blog, (err, result) => {
            if (err) {
              res.send().status(500).send(err);
            } else {
              res.send().json(result);
            }
            console.log(res)
             client.close();
             // Make sure to close the client connection
          });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }catch(e){
        console.log(e)
    }
  }

  async function get(req,res) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
        const collection = await  client.db('test').collection('blog');;
        collection.find().toArray((err, result) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.json(result);
            }
            // Make sure to close the client connection
          });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }