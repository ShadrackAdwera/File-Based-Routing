// import fs from 'fs';
// import path from 'path';
import { MongoClient } from 'mongodb';


const NewsletterHandler = async(req,res) => {
    if(req.method==='POST') {
        const emailAddress = req.body.email;
        // const filePath = path.join(process.cwd(),'data','emails.json');
        // const stringifiedData = fs.readFileSync(filePath);
        // const data = JSON.parse(stringifiedData);
        // data.unshift({id: Date.now(), email: emailAddress});
        // fs.writeFileSync(filePath,JSON.stringify(data));

       try {
        const client = await MongoClient.connect('mongodb+srv://next_party_user:kawz8hoI89Whafwp@cluster0.dska4.mongodb.net/next-party?retryWrites=true&w=majority')
        const dbCollection = client.db();
        await dbCollection.collection('emails').insertOne({email: emailAddress});
        client.close();
       } catch (error) {
           console.log(error);
       } 
      return res.status(201).json({message: 'Email Address registered!'});
    }
}

export default NewsletterHandler;