function Certificados() {
  return (
    <div>
      <p>Certificados</p>
    </div>
  );
}

export default Certificados;

// import { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import excel from "../pdf/Excel.pdf";

// function Certificados() {
//   const [showPreview, setShowPreview] = useState(false);

//   const handlePreviewClick = () => {
//     setShowPreview(true);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Certificados</title>
//       </Helmet>

//       <div className="certificados-container">
//         <div>
//           <p>
//             En el presente documento se muestra el certificado de Excel obtenido
//             en el 2015, en la Universidad Tecnológica del Perú.
//             <button onClick={handlePreviewClick}>
//               Visualizar
//             </button>
//           </p>
//         </div>
//         {showPreview && (
//           <div style={{ marginTop: '20px' }}>
//             <iframe
//               src={excel}
//               width="100%"
//               height="600px"
//               style={{ border: 'none' }}
//               title="Vista previa de Excel"
//             ></iframe>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Certificados;
