import React, { useState } from "react";
import "./index.scss";
import { Layout, FormField } from "components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      msg: message
    };
  };

  //////////////////////////////////////// fix default button styles

  return (
    <Layout className="contact">
      <h1 className="side-title-left">Contact</h1>

      <article className="contact__content">
        <section className="contact__links">
          <a href="mailto:deimantas.butenas@gmail.com">deimantas.butenas@gmail.com</a>
          <a className="button-link" href="linkedin">LinkedIn</a>
          <a className="button-link" href="https://github.com/ElqBell">GitHub</a>
        </section>

        <aside className="contact__message">
            <h2>Send me a message.</h2>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <FormField fieldFor="name" labelText="Name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleNameChange}
                    required
                  />
                </FormField>

                <FormField fieldFor="email" labelText="Email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                    required
                  />
                </FormField>
              </div>

              <FormField fieldFor="message" labelText="Message">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  onChange={handleMessageChange}
                  required
                />
              </FormField>

              <button type="submit" className="button-link">Submit</button>
            </form>
        </aside>
      </article>
    </Layout>
  );
};

export default Contact;
