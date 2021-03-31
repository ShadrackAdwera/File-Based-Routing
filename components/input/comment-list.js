import styles from './comment-list.module.css';

const CommentList = () => { 
  return (
    <ul className={styles.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>This is my comment Cabron!!</p>
        <div>
          By <address>Deez Nuts</address>
        </div>
      </li>
      <li>
        <p>Another comment yo!</p>
        <div>
          By <address>Likon Deez Nuts</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;