import { useRef, useContext } from 'react';

import { validateEmail } from '../utils/emailValidation';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

const NewsletterRegistration = () => {
  const emailRef = useRef();
  const ctx = useContext(NotificationContext);

  const registrationHandler = (event) => {
    event.preventDefault();
    ctx.showNotification({title:'Registering...',message:'Your email is being registered', status: 'pending'});
    // fetch user input (refs)
    const userEmail = emailRef.current.value;
    //validate input
    const emailResult = validateEmail(userEmail);
    if(!emailResult) {
      ctx.showNotification({title:'Invalid email',message:'Enter a valid email address', status: 'error'});
      return;
    }
    // send valid data to API
    fetch('http://localhost:3000/api/newsletter', {
      method:'POST',
      body: JSON.stringify({email: userEmail}),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(response=>{
      if(response.ok) {
        return response.json();
      }
      return response.json().then(data=>{
        throw new Error(data.message || 'Something went wrong');
      })
    })
    .then(resData=>{
      emailRef.current.value = '';
      ctx.showNotification({title:'Success', message: resData.message, status: 'success'});
    })
    .catch(error=>{
      ctx.showNotification({title:'Error', message: error.message || 'Something went wrong, try again', status: 'error'});
    });
  }

  return (
    <section className={classes.newsletter}>
      <h3>Sign up to stay updated!</h3>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            required
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;