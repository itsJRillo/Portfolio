import Layout from "../components/Layout";
import Inicio from "../components/Inicio";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"

export default function Home() {
  return (
    <>
      <Layout pagina="Inicio">
        <Inicio />
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </Layout>
    </>
  );
}
