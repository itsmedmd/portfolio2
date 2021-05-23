import React, { useState } from "react";
import "./index.scss";
import { Layout } from "components";

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
      message
    };
    console.log(data);
  };

  return (
    <Layout className="contact">
      <h1 className="side-title-left">Contact</h1>

      <article className="contact__content">
        <section className="contact__section">
          <h2 className="heading-1">Send me a message.</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleNameChange}
                required
              />

              <label htmlFor="email">Email</label><br/>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleEmailChange}
                required
              />
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              onChange={handleMessageChange}
              required
            />

            <button type="submit" className="button-link">Submit</button>
          </form>
        </section>

        <aside className="contact__aside">
          <h2>Or if you'd rather contact me directly:</h2>
          <a href="mailto:deimantas.butenas@gmail.com">deimantas.butenas@gmail.com</a>
        </aside>
      </article>
    </Layout>
  );
};

export default Contact;
