import React from 'react';

const HolaMundo = () => {
      const hello = 'Hola mundo';
      const isTrue = false;

      return(
          <div className="HolaMundo">
              <h1>{hello}</h1>
              <h2>Curso de React JS</h2>
              <img src="https://arepa.s3.amazonaws.com/react.png" alt="REACT"/>
              {isTrue ? <h4>Es verdadero</h4> : <h5>Soy false</h5>}
              {/* otra forma */}
              {isTrue && <h4>soy verdadero</h4> }
         </div>
      );
};

export default HolaMundo;