import React from 'react'
import Navbar from '../components/Navbar';
import "../assets/styles/PoliticaCookies.css";
import {Link} from '@mui/material';
import Footer from '../components/Footer';

function PoliticasCookies() {

  const data = [
    { id: 1, tipo: 'Necesaria', nombre: 'Id_token', duracion: '4 meses', finalidad: 'Mantener la sesión activa del usuario.', proter: 'Propia', datos: 'ID de sesión' },
    { id: 2, tipo: 'Necesaria', nombre: 'auth_user_id', duracion: '4 meses', finalidad: 'Comprobar si el usuario está autorizado para acceder a ciertos servicios o zonas del sitio web.', proter: 'Propia', datos: 'ID de usuario' },
    { id: 3, tipo: 'Necesaria', nombre: 'remember_form_data', duracion: 'No finaliza', finalidad: 'Recordar cierta información, como los datos que haya introducido en formularios de citas o contacto al navegar por distintas páginas en una misma sesión del sitio web.', proter: 'Propia', datos: 'Datos introducidos en formularios' },
    { id: 4, tipo: 'Necesaria', nombre: 'cart_id', duracion: 'No finaliza', finalidad: 'Recordar los productos añadidos al carrito de compras del usuario, incluso si el usuario ha cerrado la sesión del sitio web.', proter: 'Propia', datos: 'ID del carrito, productos añadidos' },
    { id: 5, tipo: 'Preferencia', nombre: 'country', duracion: '24 horas', finalidad: 'Averiguar en qué país o región se encuentra el usuario que accede o visita el sitio.', proter: 'Propia', datos: 'País o región' },
    { id: 6, tipo: 'Preferencia', nombre: 'theme', duracion: 'No finaliza', finalidad: 'Recordar determinados ajustes que haya utilizado, como el diseño, el tamaño del texto y los colores.', proter: 'Propia', datos: 'Diseño, tamaño del texto, colores' },
    { id: 7, tipo: 'Preferencia', nombre: 'survey', duracion: 'Expira al finalizar la sesión del usuario', finalidad: 'Recordar si ya le hemos preguntado si desea participar en una encuesta.', proter: 'Propia', datos: 'ID de encuesta' },
    { id: 8, tipo: 'Estadísticas', nombre: 'ga', duracion: '24 horas', finalidad: 'Saber en qué secciones está más interesado el usuario.', proter: 'Tercero', datos: 'ID de usuario, páginas visitadas, tiempo de permanencia en cada página, etc.' },
    { id: 9, tipo: 'Estadísticas', nombre: 'visits', duracion: '24 horas', finalidad: 'Número de visitas en el sitio.', proter: 'Tercero', datos: 'Número de visitas, fecha de la primera visita, fecha de la última visita, etc.' },
    { id: 10, tipo: 'Estadísticas', nombre: 'active_time', duracion: 'Expira al finalizar la sesión del usuario', finalidad: 'Medir el tiempo de actividad que un usuario permanece en el sitio.', proter: 'Tercero', datos: 'Tiempo de permanencia en el sitio, páginas visitadas durante la sesión, etc.' },
    { id: 11, tipo: 'Estadísticas', nombre: 'clicks', duracion: '1 semana', finalidad: 'Si hace un clic en algún slider o banner publicitario.', proter: 'Tercero', datos: 'ID del clic, página en la que se hizo el clic, etc.' },
    { id: 12, tipo: 'Estadísticas', nombre: 'referrer', duracion: '24 horas', finalidad: 'Saber a qué otro sitio accede une vez que visito el nuestro.', proter: 'Tercero', datos: 'URL del sitio anterior, fecha de la visita anterior, etc.' },
    { id: 13, tipo: 'Estadísticas', nombre: 'errors', duracion: 'Expira al finalizar la sesión del usuario', finalidad: 'Ayudan a identificar posibles problemas técnicos o errores en el sitio web al rastrear las páginas que generan mensajes de error.', proter: 'Tercero', datos: 'ID de la página, mensaje de error, etc.' },
    { id: 14, tipo: 'Marketing', nombre: 'ad_id', duracion: 'Expira al finalizar la sesión del usuario', finalidad: 'Conocer las preferencias de servicios o productos.', proter: 'Tercero', datos: 'ID de usuario, intereses, historial de navegación, etc.' },
    { id: 15, tipo: 'Marketing', nombre: 'product_interests', duracion: 'No finaliza', finalidad: 'Al conocer tus patrones de navegación, podemos presentarte ofertas, promociones, productos y servicios que se alinean a tus necesidades y preferencias.', proter: 'Tercero', datos: 'ID de usuario, intereses, historial de navegación, etc.' },
    { id: 16, tipo: 'Marketing', nombre: 'ad_performance', duracion: '1 semana', finalidad: 'En campañas publicitarias nos ayudan a conocer como interactúas con nuestros anuncios, a fin de evaluar el rendimiento y que contribuya en la toma de decisiones en un futuro.', proter: 'Tercero', datos: 'ID del anuncio, página en la que se mostró el anuncio, clics en el anuncio, etc.' },
  ];

  return (
    <div className='cookies'>
      
      <Navbar />

      <section className='section-cookies'>
        <h1 className='title'>Politica de Cookies</h1>
        <h5>En la Clínica Veterinaria Jireh, nos preocupamos por ofrecer la mejor experiencia a nuestros usuarios, y es por eso que utilizamos cookies y tecnologías similares en nuestro sitio web. Estas herramientas nos permiten brindar servicios y funcionalidades que mejoran la navegación y personalizan la interacción en nuestras páginas.</h5>
        <h5>Al aceptar el uso de cookies, estás permitiendo que aprovechemos al máximo estas funcionalidades para adaptarnos a tus preferencias y necesidades. Nuestra Política de Cookies está diseñada para informarte sobre cómo utilizamos estas tecnologías y cuáles son tus opciones al respecto.</h5>
      
        <div style={{marginBottom: "50px"}}>
          <h3 style={{color: "#00A5cb"}}>¿Qué Son las Cookies?</h3>
          <h5>En Jireh utilizamos archivos de texto que se almacenan en tu ordenador, conocidos comúnmente como cookies. Las cookies almacenan y recuperan información cuando navegas. En general, estas tecnologías pueden servir para finalidades muy diversas, por ejemplo, reconocerte como usuario, obtener información sobre tus hábitos de navegación o personalizar la forma en que se muestra el contenido. Los usos concretos que hacemos de estas tecnologías se describen a continuación.</h5>
          <h5>Utilizamos cookies para ayudarte en tu recorrido por la web y las cookies que usamos son seguras. La información que recogemos con las cookies nos ayuda a identificar cualquier error que tengamos, o mostrarte productos que creemos que pueden interesarte. Si creas una cuenta de usuario, nuestras cookies también nos permitirán recordarte cada vez que te identifiques o inicies sesión, simplificando algún proceso en el que se necesite introducir todos tus datos de nuevo.</h5>
          <h5>El consentimiento de estas cookies en el dispositivo del usuario se producirá siempre de manera posterior a la recogida del consentimiento y/o configuración de éstas. No obstante, las cookies que son necesarias para el funcionamiento del sitio web (cookies estrictamente necesarias) estarán activadas por defecto, sin que sea necesario recabar el consentimiento del usuario para su instalación.</h5>
          <h5>Sin embargo, si prefieres restringir, bloquear o eliminar cookies de Jireh, podrás hacerlo a través del configurador que se habilita a  través de las preferencias de tu navegador, tal y como se explica más abajo.</h5>
          <h5>Se utilizan Cookies para:</h5>
          <ul>
            <li>Asegurar que las páginas web puedan funcionar correctamente.</li>
            <li>Almacenar las preferencias, si selecciono alguna preferencia por ejemplo para problemas visuales donde la letra toma otro aspecto.</li>
            <li>Conocer la experiencia de navegaciones del usuario.</li>
            <li>Conocer servicios o productos de interés del usuario.</li>
            <li>Recopilar información estadística, como páginas que ha visitado el usuario o cuánto tiempo ha estado en el sitio web.</li>
          </ul>
        </div>

        <div style={{marginBottom: "50px"}}> 
          <h3 style={{color: "#00A5cb"}}>¿Qué tipos de cookies utilizamos en Jireh?</h3>
          <h5>Este sitio web utiliza diferentes tipos de cookies:</h5>
          <h5>Las <strong>cookies ‘estrictamente necesarias’</strong> le permitirán navegar con facilidad por el sitio web. Estas Cookies son utilizadas exclusivamente por nosotros y, por lo tanto, son cookies de origen. Esto significa que toda la información almacenada en las cookies solo se almacena en este sitio web. Este tipo de cookies no se utilizan para recopilar información personal que pueda utilizarse con fines de marketing, ni tampoco para recordar los sitios de Internet a los que ha accedido. Utilizamos las cookies estrictamente necesarias para:</h5>
          <ul>
            <li>Mantienen al usuario identificado de forma que, si abandona el sitio web, el navegador o el dispositivo y en otro momento vuelve a acceder a la misma página, seguirá identificado, facilitando así su navegación sin tener que volver a identificarse por delimitado  tiempo.</li>
            <li>Comprobar si el usuario esté autorizado para acceder a ciertos servicios o zonas del sitio web.</li>
            <li>Recordar cierta información, como los datos que haya introducido en formularios de citas o contacto al navegar por distintas páginas en una misma sesión del navegador web.</li>
            <li>Recordar los productos de su carrito de compras una vez que haya cerrado la sesión</li>
          </ul>

          <h5>Las <strong>cookies de ‘preferencia’</strong> como su propio nombre indica, estas cookies guardan los datos según la preferencia de configuración que establezca cada usuario. Permiten al usuario acceder al sitio web con algunas características de preferencia general predefinidas por el mismo usuario. Estas cookies se usan para definir las preferencias del usuario y su uso como:</h5>
          <ul>
            <li>Averiguar en qué país o región se encuentra el usuario que accede o visita el sitio.</li>
            <li>Recordar determinados ajustes que haya utilizado, como el diseño, el tamaño del texto y los colores.</li>
            <li>Recordar si ya le hemos preguntado si desea participar en una encuesta.</li>
          </ul>
        
          <h5>Las <strong>cookies de ‘estadísticas’</strong> también conocidas como cookies analíticas, son herramientas fundamentales para recopilar información sobre cómo los usuarios interactúan con un sitio web. Estas cookies recopilan datos de manera anónima y se utilizan para analizar y entender el comportamiento de los visitantes. La información recopilada ayuda a los propietarios del sitio a tomar decisiones informadas para mejorar la experiencia del usuario y la eficacia del sitio. Estas cookies nos ayudan a:</h5>
          <ul>
            <li>Saber en que secciones está más interesado el usuario.</li>
            <li>Numero de visitas en el sitio.</li>
            <li>Medir el tiempo de actividad que un usuario permanece en el sitio.</li>
            <li>Si hace un clic en algún slider o banner publicitario.</li>
            <li>Saber a qué otro sitio accede une vez que visito el nuestro.</li>
            <li>Ayudan a identificar posibles problemas técnicos o errores en el sitio web al rastrear las páginas que generan mensajes de error.</li>
          </ul>

          <h5>Las <strong>cookies de ‘marketing’</strong> son herramientas valiosas que utilizamos para personalizar y optimizar tu experiencia en nuestro sitio web. Su función principal es recopilar información sobre tus preferencias y hábitos de navegación, permitiéndonos ofrecerte contenidos publicitarios adaptados a tus intereses.</h5>
          <h5>A través de estas cookies, podemos segmentar a nuestra audiencia de manera eficiente, presentando ofertas, promociones y productos que se ajusten a tus gustos específicos. Además, contribuyen a medir la efectividad de nuestras campañas publicitarias y evaluar el rendimiento de los anuncios que visualizas. Estas cookies nos ayudan a:</h5>
          <ul>
            <li>Conoces las preferencias de servicios o productos.</li>
            <li>Al conoces tus patrones de navegación, podemos presentarte ofertas, promociones, productos y servicios que se alinean a tus necesidades y preferencias.</li>
            <li>En campañas publicitarias nos ayudan a conocer como interactúas con nuestros anuncios, a fin de evaluar el rendimiento y que contribuya en la toma de decisiones en un futuro.</li>
          </ul>
        </div>

        <div style={{marginBottom: "50px"}}>
          <h3 style={{color: "#00A5cb"}}>Cookies propias y de terceros</h3>

        <table className="my-table">
          <thead>
            <tr>
              <th className="th-1">Tipo de Cookie</th>
              <th className="th-2">Nombre</th>
              <th className="th-3">Duración</th>
              <th className="th-4">Finalidad</th>
              <th className="th-5">Propia / Tercero</th>
              <th className="th-6">Datos / información que recaba</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.tipo}</td>
                <td>{item.nombre}</td>
                <td>{item.duracion}</td>
                <td>{item.finalidad}</td>
                <td>{item.proter}</td>
                <td>{item.datos}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      
        <div style={{marginBottom: "50px"}}>
          <h3 style={{color: "#00A5cb"}}>Gestión de Cookies</h3>
          <h5>El usuario puede libremente y en cualquier momento decidir acerca de la implementación o no en su dispositivo de nuestras cookies, así como su eliminación.</h5>
          <h5>Como se ha mencionado hay que cookies que necesitamos estrictamente ya que son las que proporcionan cierta funcionalidad al sitio además de que nos ayudan a identificar si los usuarios son personas reales y así evitar algún tipo de hacking en un futuro.</h5>
          <h5>Si el usuario rechaza las cookies estas simplemente no serán instaladas en su sistema, pero se tiene en cuenta que algunas funcionalidades del sistema pueden no funcionar de la manera que se espera.</h5>
          <h5>Si el usuario acepta la política de cookies y desea revocar su consentimiento puede hacerlo de la siguiente manera, para que el usuario pueda bloquear o eliminar las cookies deberá de identificar el tipo de navegador que utiliza y de este modo acceder a alguno de los siguientes enlaces de acorde a su navegador:</h5>
          <ul>

            <li>
              Microsoft Internet Explorer o Microsoft Edge: 
              <Link href="https://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">
                <u style={{color: "#00A5cb", marginLeft: "5px"}}>
                  https://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies
                </u>
              </Link>
            </li>

            <li>
            	Mozilla Firefox: 
              <Link href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">
                <u style={{color: "#00A5cb", marginLeft: "5px"}}>
                  https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia
                </u>
              </Link>
            </li>

            <li>
              Google Chrome: 
              <Link href="https://support.google.com/accounts/answer/61416?hl=es">
                <u style={{color: "#00A5cb", marginLeft: "5px"}}>
                  https://support.google.com/accounts/answer/61416?hl=es
                </u>
              </Link>
            </li>

            <li>
              Safari:
              <Link href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies">
                <u style={{color: "#00A5cb", marginLeft: "5px"}}>
                  http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies
                </u>
              </Link>
            </li>

            <li>
              Opera:
              <Link href="https://help.opera.com/Linux/10.60/es-ES/cookies.html">
                <u style={{color: "#00A5cb", marginLeft: "5px"}}>
                  https://help.opera.com/Linux/10.60/es-ES/cookies.html
                </u>
              </Link>
            </li>

          </ul>
        </div>

        <div style={{flex: 1, justifyContent: "flex-start"}}>
          <h5 style={{color: "#00A5cb", textAlign: "right"}}>Última actualización: 14/11/2023 </h5>
        </div>
        
      </section>

      <Footer />

    </div>
  )
}

export default PoliticasCookies