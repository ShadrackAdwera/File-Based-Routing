import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

const Comments = (props) => {
  const { eventId, comments } = props;

  const [showComments, setShowComments] = useState(false);
  const [eventComments, setEventsComments] = useState([]);

  useEffect(()=>{
    if(showComments) {
      fetch(`http://localhost:3000/api/events/${eventId}/comments`)
      .then(response=>response.json())
      .then(resData=>setEventsComments(resData.comments))
      .catch(error=>console.log(error))
    }
  },[showComments]);

const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

const addCommentHandler = (commentData) => {
    // send data to API
    fetch(`http://localhost:3000/api/events/${eventId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers : {
        'Content-Type':'application/json'
      }
    }).then(response=>response.json())
    .then(resData=>alert(resData.message))
    .catch(error=>console.log(error));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={eventComments}/>}
    </section>
  );
}

export default Comments;