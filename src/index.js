import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./App.jsx";

const contenido = 
(
  <div>
    <h1>Titulo</h1>
    <div>Hola desde React</div>
  </div>
);
/** Opcion mas rustica de hacer que pueda declarar un Componente para renderizar y que se transforme su contenido (en este caso un elemento h1 y un div)
 * function Componente ()
 * {
 *    return(
 *      <div> 
 *        <h1>Titulo</h1>
 *        <div>Hola desde React!</div>
 *      </div>
 *    );
 *  }
 *  
 *  ReactDOM.render(
 *    <Componente/>,
 *    document.getElementById('root')
 *    );
*/

/** Opcion trabajada con desestructuracion y enviando parametros desde la funcion ReactDOM.render. Se utiliza el objeto que se genera al enviar atributos para la desestructuracion.
 * Se envia titulo y contenido pero se recibe desestructurandolo en titulo y contenido como properties.
 * 
 * function Componente( {titulo, contenido} )
 * {
 *   return(
 *       <div> 
 *         <h1>{titulo}</h1>
 *         <div>{contenido}</div>
 *       </div>
 *   );
 * } 
 * 
 * ReactDOM.render(
 *   <Componente titulo="Titulo ejemplo 2" contenido="Hola desde React ejemplo 2"/>,
 *     document.getElementById('root')
 * );
 */

function Componente({ titulo, children }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);