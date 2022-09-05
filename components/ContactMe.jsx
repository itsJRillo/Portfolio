import styles from "../styles/ContactMe.module.css";
import Image from "next/image";
import usePortfolio from "../hooks/usePortfolio";

const ContactMe = () => {
  const {handleChange, onSubmit, toSend} = usePortfolio()
  
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

        <form id="form" onSubmit={onSubmit} className={styles.form}>
          <div>
            <label>Nombre</label>
            <input
            className={styles.nombre}
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.infoUser}>
            <label>E-mail</label>
            <label>Teléfono</label>
            <input
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              type="email"
              placeholder="email@email.com"
              required
            />
            <input
              name="telf"
              value={toSend.telf}
              onChange={handleChange}
              type="tel"
              placeholder=""
              required
            />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea
              className={styles.mensaje}
              name="message"
              value={toSend.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              required
            />
          </div>

          <button type="submit" className={styles.send}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
