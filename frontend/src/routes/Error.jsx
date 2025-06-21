import { Link, useLocation } from "react-router-dom";

import CardError from "../components/common/CardError";

const Error = () => {
  const location = useLocation();

  return (
    <>
      <CardError 
        message={location.state["message"]} 
        suggestion={location.state["suggestion"]}
      />
    </>
  );
};

export default Error;
