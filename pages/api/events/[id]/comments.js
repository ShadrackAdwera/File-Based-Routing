import fs from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';

const commentsHandler = async(req,res) => {
    if(req.method==='POST') {
        const eventId = req.query.id;
        const { email, name, text } = req.body;
        // const filePath = path.join(process.cwd(),'data','comments.json');
        // const stringifiedData = fs.readFileSync(filePath);
        // const data = JSON.parse(stringifiedData);
        // data.unshift({id: Date.now(), name: name, email: email, comment: text, eventId: eventId});
        // fs.writeFileSync(filePath, JSON.stringify(data));
        try {
            const client = await MongoClient.connect('mongodb+srv://next_party_user:kawz8hoI89Whafwp@cluster0.dska4.mongodb.net/next-party?retryWrites=true&w=majority')
        const dbConnected = client.db();
        await dbConnected.collection('comments').insertOne({name,email,comment:text, eventId});
        res.status(201).json({message: 'Your comment has been posted!'});
        client.close();
        } catch (error) {
        console.log(error);    
        }
    } else {
        const eventId = req.query.id;
        const filePath = path.join(process.cwd(),'data','comments.json');
        const stringifiedData = fs.readFileSync(filePath);
        const data = JSON.parse(stringifiedData);
        const commentsFound = data.filter(d=>d.eventId===eventId);
        return res.status(200).json({totalComments: commentsFound.length, comments: commentsFound});
    }

}

export default commentsHandler;
