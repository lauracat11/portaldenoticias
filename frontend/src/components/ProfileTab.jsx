import React from 'react'
import './ProfileComponent.css'

function ProfilePage() {

    return (
        <div className='container'>
            <div className='columnas'>
                <div className='foto'>
                    <a>imagen</a>
                    <br />
                    <input className='imagen_perfil' type="image" src="" alt=""/>
                    <label for="foto_perfil" type className='btn'>Guardar foto</label>
                    <input type="file" name="foto_perfil" id="foto_perfil" className='foto_perfil'/>
                </div>
                
                <div className='info_usuario'>
                    <input className='input_perfil' type="text" placeholder='Nombre'/>
                    <input className='input_perfil' type="text" placeholder='Apellidos'/>
                    <br />
                    <input className='input_perfil' type="email" name="" id="" placeholder='Correo'/>
                    <br />
                    <input className='input_perfil'  type="tel" name="" id="" placeholder='Telefono'/>
                </div>
                
            </div>

            <div className='columnas2'>

                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-1" /><label className='label_opcion' for="nivel1-1">Cambiar contraseña</label>
                        <ul className='interior'>
                            <li>
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Contraseña Actual'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Nueva Contraseña'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Repetir Contraseña'/>
                                <br />
                                <div>
                                    <button className='btn_perfil' type="submit">Guardar</button>                                
                                </div>

                                
                            </li>
                        </ul>
                    </li>
                </ul>
                
                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-2" /><label className='label_opcion' for="nivel1-2">Restablecer contraseña</label>
                        <ul className='interior'>
                            <li>
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Correo'/>
                                <br />
                                <div>
                                    <button className='btn_perfil' type="submit"> Restablecer</button>
                                </div>
                                                              
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-3" /><label className='label_opcion' for="nivel1-3">Eliminar cuenta</label>
                        <ul className='interior'>
                            <li>
                                <input className='input_perfil2' type="email" name="" id="" placeholder='Correo'/>
                                <br />
                                <input className='input_perfil2' type="password" name="" id="" placeholder='Contraseña'/>
                                <br />
                                <div>
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