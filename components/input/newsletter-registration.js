import { useRef } from 'react';

import { validateEmail } from '../utils/emailValidation';
import classes from './newsletter-registration.module.css';

const NewsletterRegistration = () => {
  const emailRef = useRef();
  const registrationHandler = (event) => {
    event.preventDefault();
    // fetch user input (refs)
    const userEmail = emailRef.current.value;
    //validate input
    const emailResult = validateEmail(userEmail);
    if(!emailResult) {
      alert('Enter a valid email address');
      return;
    }
    // send valid data to API
    fetch('http://localhost:3000/api/newsletter', {
      method:'POST',
      body: JSON.stringify({email: userEmail}),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(response=>response.json())
    .then(resData=>alert(resData.message))
    .catch(error=>console.log(error));
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