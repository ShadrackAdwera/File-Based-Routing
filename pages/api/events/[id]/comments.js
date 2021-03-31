import fs from 'fs';
import path from 'path';

const commentsHandler = (req,res) => {
    if(req.method==='POST') {
        const eventId = req.query.id;
        const emailAddress = req.body.email;
        const userName = req.body.name;
        const userComment = req.body.comment;

        const filePath = path.join(process.cwd(),'data','comments.json');
        const stringifiedData = fs.readFileSync(filePath);
        const data = JSON.parse(stringifiedData);
        data.unshift({id: Date.now(), name: userName, email: emailAddress, comment: userComment});
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: 'Your comment has been posted!'});
    }

}

export default commentsHandler;
