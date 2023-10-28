import React, { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import '../../assets/styles/Admin/Admin.css'

function Admin() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='admin-container'>

      <NavbarAdmin />

      <div className='contenidoA'>

        <h1>Clinica Veterinaria JIREH</h1>

        <div className='esloganA'>
          <div className='imageE'>
            <div className='imageSeleccionada'>
              {selectedImage && (
                <img src={selectedImage} alt="Imagen seleccionada" />
              )}
            </div>
            <div className='inputImage'>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="imageInput"
                style={{ display: 'none' }}
              />
              <label htmlFor="imageInput" className="custom-file-input">
                Seleccionar una imagen
              </label>
            </div>
          </div>
          <div className='textoE'>
            <h2>Eslogan o frase llamativa</h2>
            <div className='textoContenidoE'>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </div>









      </div>

    </div>
  )
}

export default Admin