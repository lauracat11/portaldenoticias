import React from 'react'
import './ProfileComponent.css'

function ProfilePage() {

    return (
        <div className='container'>
            <div className='columnas'>
                <div className='foto'>
                    <img className='imagen_perfil' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    <div class="file btn btn-lg btn-primary">
                        Cambiar foto
                        <input className='archivo' type="file" name="file" />
                    </div>                    
                </div>
                
                <div className='info_usuario'>
                    <input className='input_perfil' type="text" placeholder='Nombre'/>
                    <input className='input_perfil' type="text" placeholder='Apellidos'/>
                    <br />
                    <input className='input_perfil' type="email" name="" id="" placeholder='Correo'/>
                    <br />
                    <input className='input_perfil'  type="tel" name="" id="" placeholder='Telefono'/>
                    <div className='div_btn'>
                        <button className='btn_info_perfil' type="submit">Guardar</button>                                
                    </div>
                </div>
                
            </div>

            <div className='columnas2'>

                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-1" /><label className='label_opcion' for="nivel1-1"><a className='contenido_label_opcion'>Cambiar contraseña</a></label>
                        <ul className='interior'>
                            <li>
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Contraseña Actual'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Nueva Contraseña'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Repetir Contraseña'/>
                                <br />
                                <div className='div_btn'>
                                    <button className='btn_perfil' type="submit">Guardar</button>                                
                                </div>

                                
                            </li>
                        </ul>
                    </li>
                </ul>
                
                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-3" /><label className='label_opcion' for="nivel1-3"><a className='contenido_label_opcion'>Eliminar cuenta</a></label>
                        <ul className='interior'>
                            <li>
                                <input className='input_perfil2' type="email" name="" id="" placeholder='Correo'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Contraseña'/>
                                <br />
                                <div className='div_btn'>
                                    <button className='btn_perfil' type="submit">Eliminar</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
      
    )
  }
  
  export default ProfilePage