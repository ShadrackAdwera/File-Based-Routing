// import fs from 'fs';
// import path from 'path';
import { insertDoc, connectToDB } from '../../../components/utils/db-utils';

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
        await insertDoc(client,'emails',{email: emailAddress});
        client.close();
        res.status(201).json({message: 'Email Address registered!'});
       } catch (error) {
        res.status(500).json({message: 'Failed to save the data'});     
       } 
    }
}

export default NewsletterHandler;