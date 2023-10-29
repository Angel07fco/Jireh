import React, { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import '../../assets/styles/Admin/Admin.css';
import { Button, TextareaAutosize } from '@mui/material';
import { WidthFull } from '@mui/icons-material';

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

  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState("En Clínica Veterinaria Jireh, somos un equipo de amantes de los animales que comparten una pasión por brindar el mejor cuidado posible.");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar lógica para guardar el contenido editado si es necesario
    setEditMode(false);
  };

  const [editHistoria, setEditHistoria] = useState(false);
  const [contentH, setContentH] = useState("La historia de la Clínica Veterinaria Jireh se remonta a su fundador, un apasionado amante de los animales y el significado bíblico del nombre JIREH (que significa Dios proveerá).")

  const handleEditHClick = () => {
    setEditHistoria(true);
  };

  const handleCancelHClick = () => {
    setEditHistoria(false);
  };

  const handleSaveHClick = () => {
    // Aquí puedes agregar lógica para guardar el contenido editado si es necesario
    setEditHistoria(false);
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
            <div>
              {editMode ? (
                <div className='textoContenidoE'>
                  <div className='frase'>
                    <textarea className='textareaE' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                  </div>
                  <div className='fraseButtonE'>
                    <Button
                      className='buttonEG'
                      variant="contained"
                      onClick={handleSaveClick}
                    >
                      Guardar
                    </Button>
                    <Button
                      className='buttonEC'
                      variant="contained"
                      onClick={handleCancelClick}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='textoContenidoE'>
                  <div className='frase'>
                    <h5>{content}</h5>
                  </div>
                  <div className='fraseButton'>
                    <Button
                      className='buttonE'
                      variant="contained"
                      onClick={handleEditClick}
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

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
            <div>
              {editHistoria ? (
                <div className='textoContenidoE'>
                  <div className='frase'>
                    <textarea className='textareaE' value={contentH} onChange={(e) => setContentH(e.target.value)}></textarea>
                  </div>
                  <div className='fraseButtonE'>
                    <Button
                      className='buttonEG'
                      variant="contained"
                      onClick={handleSaveHClick}
                    >
                      Guardar
                    </Button>
                    <Button
                      className='buttonEC'
                      variant="contained"
                      onClick={handleCancelHClick}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='textoContenidoE'>
                  <div className='frase'>
                    <h5>{contentH}</h5>
                  </div>
                  <div className='fraseButton'>
                    <Button
                      className='buttonE'
                      variant="contained"
                      onClick={handleEditHClick}
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>







      </div>

    </div>
  )
}

export default Admin