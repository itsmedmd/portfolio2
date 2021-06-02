import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, FormField, FormLoader } from "components";
const createSVGImagesObject = require("utils/createSVGImagesObject").createSVGImagesObject;

const Contact = ({ data }) => {
  // status of the form used for 'formStatus' state variable
  const status = {
    sending: "Sending email",
    success: "Email successfully sent",
    error: "An error occurred",
    idle: ""
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(status.idle);
  const images = createSVGImagesObject(data.allFile.nodes);

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
    const url = 'https://3jxqp8oiza.execute-api.eu-central-1.amazonaws.com/beta/contact/';

    const options = {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        msg: message
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    e.target.reset();
    setFormStatus(status.sending);

    fetch(url, options)
    .then(res => {
      if(res.status === 200) {
        setFormStatus(status.success);
        console.log("Success sending email!");
      } else {
        setFormStatus(status.error);
        console.error("Error sending email!", res);
      }
      setTimeout(() => setFormStatus(status.idle), 3000);
    })
    .catch(error => {
      setFormStatus(status.error);
      console.error("Error sending email!", error);
      setTimeout(() => setFormStatus(status.idle), 3000);
    });
  };

  return (
    <Layout className="contact" centered={true}>
      <Helmet>
        <title>Deimantas Butėnas - Contact</title>
      </Helmet>

      <h1 className="side-title-right">Contact</h1>

      <article className="contact__content">
        <section className="contact__links">
          <a
            href="mailto:deimantas.butenas@gmail.com"
            className="contact__email-link"
          >
            deimantas.butenas@gmail.com
          </a>
          <a
            className="button-link button-link--medium"
            href="https://www.linkedin.com/in/deimantas-but%C4%97nas-85870a192/"
          >
            <img className="button-link__image" src={images.linkedin} alt=""/>
            LinkedIn
          </a>
          <a
            className="button-link button-link--medium"
            href="https://github.com/ElqBell/"
          >
            <img className="button-link__image" src={images.github} alt=""/>
            GitHub
          </a>
        </section>

        <aside className="contact__message">
            <h2 className="contact__message-title">Send me a quick message.</h2>

            <form className="contact__form" onSubmit={handleSubmit}>
              <FormLoader
                status={formStatus}
                defaultStatus={status.idle}
                successStatus={status.success}
                errorStatus={status.error}
                fadeTimeoutTime={2500}
              />

              <div className="form-row">
                <FormField
                  fieldFor="name"
                  fieldType="text"
                  labelText="Name"
                  handleChange={handleNameChange}
                  isRequired={true}
                ></FormField>

                <FormField
                  fieldFor="email"
                  fieldType="email"
                  labelText="Email"
                  handleChange={handleEmailChange}
                  isRequired={true}
                ></FormField>
              </div>

              <FormField
                fieldFor="message"
                fieldType="text"
                labelText="Message"
                handleChange={handleMessageChange}
                isRequired={true}
                isTextArea={true}
              ></FormField>

              <button type="submit" className="button-link contact__submit">Submit</button>
            </form>
        </aside>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ContactImagesQuery {
    allFile(filter: {relativePath: {regex: "/(github.svg)|(linkedin.svg)/"}}) {
      nodes {
        relativePath
        publicURL
      }
    }
  }
`;

export default Contact;
