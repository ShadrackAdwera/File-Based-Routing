import styles from './comment-list.module.css';

const CommentList = (props) => { 
  return (props.data && props.data.commentsFound.length>0? <ul className={styles.comments}>
      {/* Render list of comments - fetched from API */}
      {props.data.commentsFound.map(commentFound=><li>
        <p>{commentFound.comment}</p>
        <div>
          By <address>{commentFound.name}</address>
        </div>
      </li>)}
    </ul> : <p className='center'>No comments found</p>
  );
}

export default CommentList;

// export async function getStaticProps(context) {
//   console.log('Method running...');
// }

export async function getServerSideProps(context) {
  const eventId = context.params.id;
  const response = await fetch(`http://localhost:3000/api/events/${eventId}/comments`);
  const resData = await response.json();
    if (!resData) {
      return {
        notFound: true,
      }
    }
    return { props: { data: resData } };
}