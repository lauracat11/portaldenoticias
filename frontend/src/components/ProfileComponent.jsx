import { useState } from 'react';
import React from 'react';

import ProfileTab from './ProfileTab';
import CerrarSesionTab from './CerrarSesionTab';
import './ProfileComponent.css';

function ProfilePage() {

    const [Tab, settab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Perfil',
            content: <ProfileTab/>
        },
        {
            id: 2,
            tabTitle: 'Cerrar Sesion',
            content: <CerrarSesionTab/>
        }
    ]

    const triggerTabClick = (e) => {
        settab(e.target.id);
    }

    return (
      
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button className='btn_tab_perfil' key={i} id={tab.id} disabled={Tab === `${tab.id}`} onClick={(triggerTabClick)}>{tab.tabTitle}</button>
                )}
            </div>

            <div className='content'>
                    {tabs.map((tab, i) =>
                        <div>
                            {Tab === `${tab.id}` && <div><p>{tab.content}</p></div>}
                        </div>
                    )}
            </div>
        </div>
      
    )
  }
  
  export default ProfilePage