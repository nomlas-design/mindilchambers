const ContactForm = () => {
  return (
    <div className='contact_form'>
      <div className='contact_form__header'>
        <h3>Get in touch</h3>
        <span>You can reach us anytime.</span>
      </div>
      <form>
        <input type='text' placeholder='Full name' />
        <input type='email' placeholder='Email' />
        <textarea className='span' placeholder='How can we help?' rows='4' />
        <button className='btn btn--light' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
