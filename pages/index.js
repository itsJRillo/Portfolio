import Layout from "../layout/Layout";
import Inicio from "../components/Inicio";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { send, init } from "emailjs-com";
import { useState } from "react";

export default function Home() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "jmorillolabour@gmail",
    message: "",
    telf: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    init(process.env.PUBLIC_KEY);

    send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, toSend)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setTimeout(() => {
          toSend.from_name = "";
          toSend.message = "";
          toSend.telf = "";
          toSend.reply_to = "";
        }, 2000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Layout pagina="Inicio">
        <Inicio />
        <AboutMe />
        <Projects />
        <ContactMe
          onSubmit={onSubmit}
          handleChange={handleChange}
          toSend={toSend}
        />
      </Layout>
    </>
  );
}
