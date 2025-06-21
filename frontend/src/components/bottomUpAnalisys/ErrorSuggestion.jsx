import React from "react";

const ErrorSuggestion = ({ error }) => {
  if (!error) return null;

  return (
    <div className="border border-danger px-3 pb-3 mt-3">
      <h4 className="mt-3 border-bottom border-danger">Erro Detectado</h4>
      <div className="alert alert-danger">
        <h5>{error.message}</h5>
        <p><strong>Sugestão:</strong> {error.suggestion}</p>
        
        {error.type === "sintatico" && error.expected && error.expected.length > 0 && (
          <div>
            <p><strong>Tokens esperados:</strong></p>
            <ul className="list-group">
              {error.expected.map((token, index) => (
                <li className="list-group-item" key={index}>{token}</li>
              ))}
            </ul>
          </div>
        )}
        
        {error.position !== undefined && (
          <p className="mt-2">
            <strong>Posição do erro:</strong> {error.position}
          </p>
        )}
      </div>
    </div>
  );
};

export default ErrorSuggestion;