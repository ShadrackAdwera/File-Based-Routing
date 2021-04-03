import { useEffect, useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import Spinner from '../ui/Spinner';
import NotificationContext from '../../store/notification-context';

const Comments = (props) => {
  const { eventId } = props;
  const ctx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [eventComments, setEventsComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    if(showComments) {
      setIsLoading(true);
      fetch(`http://localhost:3000/api/events/${eventId}/comments`)
      .then(response=>{
        if(response.ok) {
          return response.json();
        }
        return response.json().then(data=>{
          setIsLoading(false);
          throw new Error(data.message || 'Something went wrong');
        })
      })
      .then(resData=>{
        setIsLoading(false);
        setEventsComments(resData.comments);
      })
      .catch(error=>{
        ctx.showNotification({title:'Error', message: error.message || 'Something went wrong, try again', status: 'error'});
      })
    }
  },[showComments]);

const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

const addCommentHandler = (commentData) => {
    // send data to API
    ctx.showNotification({title:'Loading...',message:'Posting comments...', status: 'pending'});
    fetch(`http://localhost:3000/api/events/${eventId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers : {
        'Content-Type':'application/json'
      }
    }).then(response=>{
      if(response.ok) {
        return response.json();
      }
      return response.json().then(data=>{
        throw new Error(data.message || 'Unable to post comments');
      })
    })
    .then(resData=>{
      ctx.showNotification({title:'Success', message: resData.message, status: 'success'});
    })
    .catch(error=>{
      ctx.showNotification({title:'Error', message: error.message || 'Something went wrong, try again', status: 'error'});
    });
  }

  let renderedComponent = showComments && <CommentList comments={eventComments}/>

  if(isLoading) {
    renderedComponent = <p className='center'>Loading...</p>
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {renderedComponent}
    </section>
  );
}

export default Comments;