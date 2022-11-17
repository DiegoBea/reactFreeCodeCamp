import React from "react";
import "../stylesheets/Testimony.css";

// export function Testimony() {
function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="testimony-image"
        // src={require('../images/emma-testimony.png')}
        src={require(`../images/${props.image}-testimony.png`)}
        alt={props.name}
      />
      {/* <div className='testimony-text-container'>
        <p className='testimony-name'>Emma Bostian in Sweden</p>
        <p className='testimony-employee'>Spotify software engineer</p>
        <p className='testimony-text'>'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'</p>
      </div> */}
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimony-employee">
          <strong>{props.enterprise}</strong> {props.employee}
        </p>
        <p className="testimony-text">{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
