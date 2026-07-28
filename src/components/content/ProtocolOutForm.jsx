import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../../contexts/formContext";

export const ProtocolOutForm = () => {
  const { loadProtocol } = useContext(FormContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loadProtocol()) {
      navigate("/");
    }
  }, []);

  return <>Hello</>;
};
