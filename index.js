const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;


const mongoURI = 'mongodb+srv://neel:12345@nov23quiz.lewfpmn.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'exams';


app.use(express.json());


app.get('/', async (req, res) => {
  try {

    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();


    const db = client.db(dbName);

    const collection = db.collection('quizexamrecords');
    const document = {
      name: 'Ahsweta Prasad',
      sid: '346536549'
    };

   
    await collection.insertOne(document);

    
    await client.close();

    res.status(200).send('Document added to the database.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
