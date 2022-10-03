import styles from "../styles/ContactMe.module.css";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

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

    let data = {
      nombre,
      mail,
      telefono,
      mensaje,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  };

  const notify = () => toast("Mensaje enviado");

  return (
    <div className={styles.contenido}>
      <hr className={`${styles.centerDiamond} ${styles.hr} `} />
      <h2 className="heading">Contáctame</h2>
      <p>Si tienes cualquier duda o pregunta solo enviame un mensaje!</p>
      <div className={styles.contactUs}>
        <div className={styles.info}>
          <h2>Información de contacto</h2>
          <p>Rellena el formulario y me pondré en contacto lo antes posible</p>

          <span>
            <div>
              <a>
                <Image
                  layout="responsive"
                  src="/icons/phone.png"
                  width={40}
                  height={40}
                  alt={`logo phone`}
                />
              </a>
              <p>+34 62 30 45 380</p>
            </div>

            <div>
              <a>
                <Image
                  layout="responsive"
                  src="/icons/mail.png"
                  width={40}
                  height={40}
                  alt={`logo mail`}
                />
              </a>
              <p>jmorillolabour@gmail.com</p>
            </div>
            <div>
              <a>
                <Image
                  layout="responsive"
                  src="/icons/map pin.png"
                  width={40}
                  height={40}
                  alt={`logo map pin`}
                />
              </a>
              <p>Barcelona, España</p>
            </div>
          </span>
        </div>

        <form id="form" className={styles.form}>
          <div>
            <label>Nombre</label>
            <input
              className={styles.nombre}
              name="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
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
              onChange={(e) => {
                setMail(e.target.value);
              }}
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
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
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
              onChange={(e) => {
                setMensaje(e.target.value);
              }}
              placeholder="Escribe tu mensaje..."
              required
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              onSubmit(e);
              notify();
              cleanInputs();
            }}
            className={styles.send}
          >
            Enviar Mensaje
          </button>

          {nombre === "" ||
          mail === "" ||
          telefono === null ||
          mensaje === "" ? null : (
            <ToastContainer />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
