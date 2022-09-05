import { createContext, useState} from "react";
import {send, init} from "emailjs-com";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "jmorillolabour@gmail",
    message: "",
    telf: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    init(process.env.public_key);

    send(process.env.service_id, process.env.template_id, toSend)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    document.getElementById("form").reset()
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <PortfolioContext.Provider
      value={{
        onSubmit,
        handleChange,
        toSend
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider };

export default PortfolioContext;
