import React from 'react'


function CerrarSesionTab() {

    return (
      
        <div className='contenedor'>
            <form className='formulario_cs' action="">
                Seguro que quieres cerrar su sesion?
                <div>
                    <button className='btn_cs' value={1} type="submit">Sí</button>
                    <button className='btn_cs' value={0} type="submit">No</button>
                </div>
                
            </form>
        </div>
      
    )
  }
  
  export default CerrarSesionTab