// Importamos React y el hook useState para manejar el estado
import { useState } from 'react';

// Importamos los estilos de la barra lateral
import './SideBar.css';

// Importamos la imagen del botón de agregar
import addImage from '../../assets/add.png';

// Componente funcional SideBar
const SideBar = (props) => {

    // Estado para manejar si la lista de colores está abierta o cerrada
    const [isListOpen, setIsListOpen] = useState(false);

    // Lista de colores en tonos grises
    const colorList = [
        '#8C8C8C', // Gris oscuro sofisticado
        '#4F4F4F', // Gris oscuro con un tono más frío
        '#666666', // Gris neutro ligeramente más claro
        '#484848', // Gris profundo con un toque más apagado
        '#707070', // Gris medio más suave y elegante
        '#3D3D3D', // Gris carbón oscuro, más intenso
        '#5A5A5A', // Gris profundo y moderno
    ];
      
    return (
        // Contenedor de la barra lateral
        <div className='sidebar'>
            
            {/* Botón para abrir/cerrar la lista de colores */}
            <img 
                className='sidebar__add-img' 
                src={addImage} alt="add image" 
                onClick={() => setIsListOpen(!isListOpen)} // Alterna el estado de la lista
            />
            
            {/* Lista de colores, que se muestra solo si `isListOpen` es true */}
            <ul className={ `sidebar__colorlist ${isListOpen ? "sidebar__colorlist_active" : "" }` }>
                { isListOpen &&
                    colorList.map((color, index) =>
                        <li 
                            className='sidebar__colorlist_color'
                            key={index} // Se usa `index` como clave única
                            style={{ backgroundColor: color }} // Aplica el color dinámicamente
                            onClick={() => props.addTheme(color)} // Llama a `addTheme` con el color seleccionado
                        ></li>
                    )
                }
            </ul>
        
        </div>
    )
}

// Exportamos el componente para su uso en otros archivos
export default SideBar;
