import React from 'react';

import Layout from "../layout/Layout";
import Inicio from "../components/Inicio";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  React.useEffect(() => {
    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0"
    );
    document.head.appendChild(metaViewport);
  }, []);

  return (
    <>
      <Layout pagina="Inicio">
        <Inicio />
        <AboutMe />
        <Projects />
        <ContactMe />
      </Layout>
    </>
  );
}
