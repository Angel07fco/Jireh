import React, { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import '../../assets/styles/Admin/Admin.css';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

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

  const [imageH, setImageH] = useState(null);

  const imageHChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageH(reader.result);
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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

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
              {imageH && (
                <img src={imageH} alt="Imagen seleccionada" />
              )}
            </div>
            <div className='inputImage'>
              <input
                type="file"
                accept="image/*"
                onChange={imageHChange}
                id="imageInputH"
                style={{ display: 'none' }}
              />
              <label htmlFor="imageInputH" className="custom-file-input">
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

        <div className='valoresA'>
            <h2>Valores</h2>
            <Link href="/admin/valor" className='link-button'>
              <Button variant="contained" fullWidth className='button-val'>Nuevo Valor</Button>
            </Link>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Imagen</TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>

        <div className='esloganA'>
          <div className='imageE'>
            <div className='imageSeleccionada'>
              {imageH && (
                <img src={imageH} alt="Imagen seleccionada" />
              )}
            </div>
            <div className='inputImage'>
              <input
                type="file"
                accept="image/*"
                onChange={imageHChange}
                id="imageInputH"
                style={{ display: 'none' }}
              />
              <label htmlFor="imageInputH" className="custom-file-input">
                Seleccionar una imagen
              </label>
            </div>
          </div>
          <div className='textoE'>
            <h2>Mision</h2>
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

        <div className='esloganA'>
          <div className='imageE'>
            <div className='imageSeleccionada'>
              {imageH && (
                <img src={imageH} alt="Imagen seleccionada" />
              )}
            </div>
            <div className='inputImage'>
              <input
                type="file"
                accept="image/*"
                onChange={imageHChange}
                id="imageInputH"
                style={{ display: 'none' }}
              />
              <label htmlFor="imageInputH" className="custom-file-input">
                Seleccionar una imagen
              </label>
            </div>
          </div>
          <div className='textoE'>
            <h2>Vision</h2>
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

        <div className='valoresA'>
            <h2>Slider</h2>
            <Link href="/admin/slider" className='link-button'>
              <Button variant="contained" fullWidth className='button-val'>Nuevo Slider</Button>
            </Link>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Imagen</TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>

        <div className='valoresA'>
            <h2>Noticias</h2>
            <Link href="/admin/noticia" className='link-button'>
              <Button variant="contained" fullWidth className='button-val'>Nuevo Noticia</Button>
            </Link>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Imagen</TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>

        <div className='valoresA'>
            <h2>Promociones</h2>
            <Link href="/admin/noticia" className='link-button'>
              <Button variant="contained" fullWidth className='button-val'>Nuevo Noticia</Button>
            </Link>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Imagen</TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Admin