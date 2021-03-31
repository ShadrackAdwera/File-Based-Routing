import fs from 'fs';
import path from 'path';

const NewsletterHandler = (req,res) => {
    if(req.method==='POST') {
        const emailAddress = req.body.email;
        const filePath = path.join(process.cwd(),'data','emails.json');
        const stringifiedData = fs.readFileSync(filePath);
        const data = JSON.parse(stringifiedData);
        data.unshift({id: Date.now(), email: emailAddress});
        fs.writeFileSync(filePath,JSON.stringify(data));
        return res.status(201).json({message: 'Email Address registered!'});
    }
}

export default NewsletterHandler;