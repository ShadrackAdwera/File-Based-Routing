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
        data.unshift({id: Date.now(), name: userName, email: emailAddress, comment: userComment, eventId: eventId});
        fs.writeFileSync(filePath, JSON.stringify(data));
        return res.status(201).json({message: 'Your comment has been posted!'});
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
