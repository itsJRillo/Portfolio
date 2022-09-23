import { createContext, useState } from "react";
import { send, init } from "emailjs-com";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "jmorillolabour@gmail",
    message: "",
    telf: "",
    reply_to: "",
  });

  const onSubmit = async (e) =>  {
    e.preventDefault();

    await init(process.env.PUBLIC_KEY);

    await send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, toSend)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setTimeout(() => {
          toSend.from_name = "";
          toSend.message = "";
          toSend.telf = "";
          toSend.reply_to = "";
        }, 500);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <PortfolioContext.Provider value={{handleChange, onSubmit, toSend}}>{children}</PortfolioContext.Provider>
  );
};

export { PortfolioProvider };

export default PortfolioContext;
