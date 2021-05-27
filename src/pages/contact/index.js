import React, { useState } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, FormField } from "components";
import { createSVGImagesObject } from "utils";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
    const data = {
      name,
      email,
      msg: message
    };
  };

  return (
    <Layout className="contact" centered={true}>
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

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <FormField
                  fieldFor="name"
                  type="text"
                  labelText="Name"
                  handleChange={handleNameChange}
                  isRequired={true}
                ></FormField>

                <FormField
                  fieldFor="email"
                  type="email"
                  labelText="Email"
                  handleChange={handleEmailChange}
                  isRequired={true}
                ></FormField>
              </div>

              <FormField
                fieldFor="message"
                type="text"
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
