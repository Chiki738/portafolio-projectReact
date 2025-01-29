// import { useEffect, useState } from "react";
// import "../styles/dialog-style.css";

// function Dialog() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const dialogShown = sessionStorage.getItem("dialogShown");

//     if (!dialogShown) {
//       setIsOpen(true);
//       sessionStorage.setItem("dialogShown", "true");
//     }
//   }, []);

//   const handleClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     isOpen && (
//       <>
//         <div className="overlay"></div>
//         <dialog open className="dialog-ms">
//           <p>
//             Visita mi repositorio para reportar errores o compartir sugerencias.
//           </p>

//           <div>
//             <button onClick={handleClick}>
//               <i className="fa-solid fa-check"></i>&nbsp;ACEPTAR
//             </button>
//           </div>
//         </dialog>
//       </>
//     )
//   );
// }

// export default Dialog;
