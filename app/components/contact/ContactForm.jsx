import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return (
      <p>
        Thanks for submitting your query, we will be in contact with you
        shortly.
      </p>
    );
  }
  return (
    <div className='contact_form'>
      <div className='contact_form__header'>
        <h3>Get in touch</h3>
        <span>You can reach us anytime.</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='visually-hidden'>
            Full name
          </label>
          <input type='text' name='name' id='name' placeholder='Full name' />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>

        <div className='form-group'>
          <label htmlFor='email' className='visually-hidden'>
            Email (required)
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
            aria-required='true'
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>

        <div className='form-group form-group--span'>
          <label htmlFor='message' className='visually-hidden'>
            How can we help?
          </label>
          <textarea
            className='span'
            id='message'
            name='message'
            placeholder='How can we help?'
            rows='4'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>

        <button
          className='btn btn--light'
          type='submit'
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default ContactForm;
