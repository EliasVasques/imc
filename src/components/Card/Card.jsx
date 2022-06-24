import React from "react";

export const Card = ({
  className,
  name,
  msg,
  isResult,
  thumbSrc,
  onCLickReturn,
  imc,
}) => {
  return (
    <button className={className}>
      <div className="images">
        {isResult && (
          <img
            src="src/assets/img/leftarrow.png"
            className="return"
            alt="return"
            onClick={onCLickReturn}
          />
        )}
        <img src={thumbSrc} className="thumb" alt="" />
      </div>
      <h4>{name}</h4>
      {isResult &&
        <p className="seu-imc">Seu IMC é de {imc} kg/m2</p>
      }
      <p className="msg">{msg}</p>
    </button>
  );
};
