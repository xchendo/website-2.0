import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div id="form" className="contact-input">
          <h3>Using this form..</h3>
          <form className="form-horizontal" action="mailer.php" method="POST">
            <input type="hidden" name="_next" value="#contact" />

            <div className="form-group">
              <label className="control-label" htmlFor="name">Name:</label>
              <input type="text" className="form-control" placeholder="E.g. Johh Smith" name="name" />
            </div>

            <div className="form-group">
              <label className="control-label" htmlFor="email">Email:</label>
              <input type="email" className="form-control" placeholder="example@email.com" name="email" />
            </div>

            <div className="form-group">
              <label className="control-label" htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message here" name="message" />
            </div>
            <div className="form-group submit-container">
              <input id="send-btn" className="btn btn-primary send-button" type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="contact__links">
          <h3>Or send me an email!</h3>
          <div className="buttons">

            <div className="email">
              <a href="mailto:loaizageorge@gmail.com" target="_top">
                <i id="email-icon" className="fal fa-envelope" aria-hidden="true" />
              </a>
              <p id="email-url">loaizageorge@gmail.com</p>
            </div>

            <h3>I'm also at these sites!</h3>
            <a href="https://www.freecodecamp.com/xchendo" target="_blank" rel="noopener noreferrer" id="freecodecamp" role="button" className="btn btn-default btn-lg freecodecamp-btn">
              <i className="fab fa-free-code-camp" aria-hidden="true" />
              <span> FreeCodeCamp</span>
            </a>

            <a href="http://codepen.io/xchendo/" target="_blank" rel="noopener noreferrer" id="codepen" role="button" className="btn btn-default btn-lg codepen-btn">
              <i className="fab fa-codepen" />
              <span>CodePen</span>
            </a>

            <a href="https://github.com/xchendo" target="_blank" rel="noopener noreferrer" id="github" role="button" className="btn btn-default btn-lg github-btn">
              <i className="fab fa-github" aria-hidden="true" />
              <span> Github</span>
            </a>

          </div>


        </div>

      </div>
    </section>
  );
}

export default Contact;