import { Link } from "react-router-dom";

const CardError = ({ message, suggestion }) => {
  return (
    <div className="container">
      <div className="card text-white bg-danger mb-3">
        <div className="card-header">Houve um erro inesperado.</div>
        <div className="card-body">
          <p className="card-text">{message}</p>
          {suggestion && (
            <div className="alert alert-light mt-3">
              <h5>Sugestão:</h5>
              <p>{suggestion}</p>
            </div>
          )}
          <Link to="/" className="link-light">
            Clique aqui para voltar ao início...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardError;
