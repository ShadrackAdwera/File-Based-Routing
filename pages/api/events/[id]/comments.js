// import fs from 'fs';
// import path from 'path';
import { connectToDB, insertDoc } from '../../../../components/utils/db-utils';

const commentsHandler = async (req, res) => {
  if (req.method === 'POST') {
    const eventId = req.query.id;
    const { email, name, text } = req.body;
    let client;
    // const filePath = path.join(process.cwd(),'data','comments.json');
    // const stringifiedData = fs.readFileSync(filePath);
    // const data = JSON.parse(stringifiedData);
    // data.unshift({id: Date.now(), name: name, email: email, comment: text, eventId: eventId});
    // fs.writeFileSync(filePath, JSON.stringify(data));

    try {
        client = await connectToDB();
    } catch (error) {
        res.status(500).json({message: 'Failed to connect to DB'});
        return;
    }

    try {
      await insertDoc(client,'comments',{ name, email, comment: text, eventId });
      res.status(201).json({ message: 'Your comment has been posted!' });
      client.close();
    } catch (error) {
        res.status(500).json({message: 'COuld not add comment, try again'});
    }
  } else {
    const eventId = req.query.id;
    // const filePath = path.join(process.cwd(),'data','comments.json');
    // const stringifiedData = fs.readFileSync(filePath);
    // const data = JSON.parse(stringifiedData);
    // const commentsFound = data.filter(d=>d.eventId===eventId);
    const commentsFound = await dbConnected
      .collection('comments')
      .find({ eventId: eventId })
      .sort({ _id: -1 })
      .toArray();
    return res
      .status(200)
      .json({ totalComments: commentsFound.length, comments: commentsFound });
  }
};

export default commentsHandler;
