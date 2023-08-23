import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cleanInputs = () => {
    setTimeout(() => {
      setNombre("");
      setMail("");
      setTelefono(0);
      setMensaje("");
      setSubmitted(true);
    }, 3000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !mail || !telefono || !mensaje) {
      return;
    }

    const data = {
      nombre,
      mail,
      telefono,
      mensaje,
    };

    try {
      const response = await axios.post("/api/contact", data);
      console.log("Response received");

      if (response.status === 200) {
        console.log("Response succeeded!");
        cleanInputs();
        notify("Mensaje enviado exitosamente", "success");
      } else {
        notify("Error al enviar el mensaje", "error");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
      notify("Error al enviar el mensaje", "error");
    }
  };

  const notify = (message, type) => {
    toast(message, { type });
  };

  return (
    <div className={styles.contenido}>
      <hr className={`${styles.centerDiamond} ${styles.hr} `} />
      <h2 className="heading">Contáctame</h2>
      <p className={styles.textInfo}>
        Si tienes cualquier duda o pregunta solo enviame un mensaje!
      </p>
      <div className={styles.contactUs}>
        <div className={styles.info}>
          <h2>Información de contacto</h2>
          <p>Rellena el formulario y me pondré en contacto lo antes posible</p>

          <div className={styles.contact}>
            <div>
              <a>
                <img
                  src="/icons/phone.png"
                  width={40}
                  height={40}
                  alt="logo phone"
                />
              </a>
              <p>+34 62 30 45 380</p>
            </div>

            <div>
              <a>
                <img
                  src="/icons/mail.png"
                  width={40}
                  height={40}
                  alt="logo mail"
                />
              </a>
              <p>jmorillolabour@gmail.com</p>
            </div>
            <div>
              <a>
                <img
                  src="/icons/map pin.png"
                  width={40}
                  height={40}
                  alt="logo map pin"
                />
              </a>
              <p>Barcelona, España</p>
            </div>
          </div>
        </div>

        <form id="form" className={styles.form}>
          <div>
            <label>Nombre</label>
            <input
              className={styles.nombre}
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.infoUser}>
            <label>E-mail</label>
            <input
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              placeholder="email@email.com"
              required
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="tel"
              placeholder="600 000 000"
              required
            />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea
              className={styles.mensaje}
              name="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
              required
            />
          </div>

          <button type="submit" onClick={onSubmit} className={styles.send}>
            Enviar Mensaje
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
