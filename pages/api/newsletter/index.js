// import fs from 'fs';
// import path from 'path';
import { MongoClient } from 'mongodb';

const connectToDB = async() => {
    const client = await MongoClient.connect('mongodb+srv://next_party_user:kawz8hoI89Whafwp@cluster0.dska4.mongodb.net/next-party?retryWrites=true&w=majority')
    return client;
}

const insertDoc = async(client, doc) => {
    const dbCollection = client.db();
    await dbCollection.collection('emails').insertOne(doc);
}

const NewsletterHandler = async(req,res) => {
    if(req.method==='POST') {
        let client;
        const emailAddress = req.body.email;
        // const filePath = path.join(process.cwd(),'data','emails.json');
        // const stringifiedData = fs.readFileSync(filePath);
        // const data = JSON.parse(stringifiedData);
        // data.unshift({id: Date.now(), email: emailAddress});
        // fs.writeFileSync(filePath,JSON.stringify(data));

        try {
            client = await connectToDB();
        } catch (error) {
            return res.status(500).json({message: 'Unable to connect to the DB'}); 
        }

       try {
        await insertDoc(client, {email: emailAddress});
        client.close();
        return res.status(201).json({message: 'Email Address registered!'});
       } catch (error) {
           return res.status(500).json({message: 'Failed to save the data'});     
       } 
    }
}

export default NewsletterHandler;