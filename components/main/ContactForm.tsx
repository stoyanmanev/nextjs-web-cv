import {FormEvent, useState} from 'react';

const ContactForm: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(name,email,subject, msg)
    }

    return(
        <div className="form-container">
              <div className="block-title">
                <h3>
                  How Can I <span>Help You?</span>
                </h3>
              </div>
              <form
                id="contact_form"
                className="contact-form"
                method="post"
                noValidate={true}
                onSubmit={(e) => submitHandler(e)}
              >
                <div className="messages"></div>

                <div className="controls two-columns">
                  <div className="fields clearfix">
                    <div className="left-column">
                      <div className="form-group form-group-with-icon" onBlur={(e) => {e.currentTarget.classList.toggle('form-group-focus')}} onFocus={(e) => {e.currentTarget.classList.toggle('form-group-focus')}}>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder=""
                          required={true}
                          data-error="Name is required."
                          value={name}
                          onChange={(e) => {setName(e.target.value)}}
                        />
                        <label>Full Name</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group form-group-with-icon" onBlur={(e) => {e.currentTarget.classList.toggle('form-group-focus')}} onFocus={(e) => {e.currentTarget.classList.toggle('form-group-focus')}}>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder=""
                          required={true}
                          data-error="Valid email is required."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email Address</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group form-group-with-icon" onBlur={(e) => {e.currentTarget.classList.toggle('form-group-focus')}} onFocus={(e) => {e.currentTarget.classList.toggle('form-group-focus')}}>
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder=""
                          required={true}
                          data-error="Subject is required."
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <label>Subject</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="right-column">
                      <div className="form-group form-group-with-icon" onBlur={(e) => {e.currentTarget.classList.toggle('form-group-focus')}} onFocus={(e) => {e.currentTarget.classList.toggle('form-group-focus')}}>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder=""
                          rows={7}
                          required={true}
                          data-error="Please, leave me a message."
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                        ></textarea>
                        <label>Message</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="button btn-send disabled"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
    )

}

export default ContactForm;