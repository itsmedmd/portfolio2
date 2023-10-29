import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, FormField, FormLoader } from "components";
const createSVGImagesObject =
  require("utils/createSVGImagesObject").createSVGImagesObject;

const Contact = ({ data }) => {
  // status of the form used for 'formStatus' state variable
  const status = {
    sending: "Sending email",
    success: "Email successfully sent",
    error: "An error occurred",
    idle: "",
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

  const setError = (error) => {
    setFormStatus(status.error);
    console.error("Error sending email!", error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        msg: message,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    };

    e.target.reset();
    setFormStatus(status.sending);

    fetch(
      "https://3jxqp8oiza.execute-api.eu-central-1.amazonaws.com/beta/contact/",
      options
    )
      .then((res) => {
        if (res.status === 200) setFormStatus(status.success);
        else setError(res);

        setTimeout(() => setFormStatus(status.idle), 3000);
      })
      .catch((error) => {
        setError(error);
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
          <h2 className="contact__links-title">You can reach me at:</h2>
          <a
            className="button-link button-link--no-margin button-link--medium contact__link-button"
            href="https://www.linkedin.com/in/deimantasbu"
          >
            <img className="button-link__image" src={images.linkedin} alt="" />
            LinkedIn
          </a>
          <a
            className="button-link button-link--no-margin button-link--medium contact__link-button"
            href="https://github.com/itsmedmd/"
          >
            <img className="button-link__image" src={images.github} alt="" />
            GitHub
          </a>
          <a
            href="mailto:deimantas.butenas@gmail.com"
            className="contact__email-link"
          >
            <span className="contact__email-link-word">deimantas.butenas</span>
            <span className="contact__email-link-word">@gmail.com</span>
          </a>
        </section>

        <aside className="contact__message">
          <h2 className="contact__message-title">
            Or send me a quick message:
          </h2>

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
                fieldClassName={
                  formStatus !== status.idle
                    ? "form-field--no-outline"
                    : undefined
                }
              ></FormField>

              <FormField
                fieldFor="email"
                fieldType="email"
                labelText="Email"
                handleChange={handleEmailChange}
                isRequired={true}
                fieldClassName={
                  formStatus !== status.idle
                    ? "form-field--no-outline"
                    : undefined
                }
              ></FormField>
            </div>

            <FormField
              fieldFor="message"
              fieldType="text"
              labelText="Message"
              handleChange={handleMessageChange}
              isRequired={true}
              isTextArea={true}
              fieldClassName={
                formStatus !== status.idle
                  ? "form-field--no-outline"
                  : undefined
              }
            ></FormField>

            <button
              type="submit"
              className={`button-link button-link--no-margin contact__submit ${
                formStatus !== status.idle ? "button-link--no-outline" : ""
              }`}
            >
              Submit
            </button>
          </form>
        </aside>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ContactImagesQuery {
    allFile(
      filter: { relativePath: { regex: "/(github.svg)|(linkedin.svg)/" } }
    ) {
      nodes {
        relativePath
        publicURL
      }
    }
  }
`;

export default Contact;
