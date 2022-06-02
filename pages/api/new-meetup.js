import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://ydg:Q0qN4QQ2LKMQamOl@cluster0.9au98.mongodb.net/meetup?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    // 에러처리

    client.close();

    res.status(201).json({ message: 'meetup inserted!' });
  }
}
export default handler;
