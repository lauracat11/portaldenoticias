import React from 'react'
import './ProfileComponent.css'

function ProfilePage() {

    return (
      
        <div className='container'>
            <div className='columnas'>
                <div className='foto'>
                    <a>imagen</a>
                    <br />
                    <input type="image" src="" alt=""/>
                    <label for="foto_perfil" type className='btn'>Guardar foto</label>
                    <input type="file" name="foto_perfil" id="foto_perfil" className='foto_perfil'/>
                </div>
                
                <div className='info_usuario'>
                    <input className='nombre' type="text" placeholder='Nombre'/>
                    <input className='apellidos' type="text" placeholder='Apellidos'/>
                    <br />
                    <input className='correo' type="email" name="" id="" placeholder='Correo'/>
                    <br />
                    <input className='telefono'  type="tel" name="" id="" placeholder='Telefono'/>
                </div>
                
            </div>

            <div>

                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-1" /><label for="nivel1-1">Cambiar contraseña</label>
                        <ul className='interior'>
                            <li>
                                <input type="password" name="" id="" />
                                <br />
                                <input type="password" name="" id="" />
                                <br />
                                <input type="password" name="" id="" />
                                <br />
                                <button className='btn_perfil' type="submit"></button>                                

                                
                            </li>
                        </ul>
                    </li>
                </ul>
                
                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-2" /><label for="nivel1-2">Restablecer contraseña</label>
                        <ul className='interior'>
                            <li>
                                <input type="password" name="" id="" placeholder='Correo'/>
                                <br />
                                <button className='btn_perfil' type="submit"></button>                                
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className='opcion'>
                    <li>
                        <input type="checkbox" name="opcion" id="nivel1-3" /><label for="nivel1-3">Eliminar cuenta</label>
                        <ul className='interior'>
                            <li>
                                <input type="email" name="" id="" placeholder='Correo'/>
                                <br />
                                <input type="password" name="" id="" placeholder='Contraseña'/>
                                <br />
                                <button className='btn_perfil' type="submit"></button>                                
                                
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
      
    )
  }
  
  export default ProfilePage