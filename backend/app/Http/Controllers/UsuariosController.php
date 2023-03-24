<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;

class UsuariosController extends Controller
{
    function getUsuario(Request $request){
        // return $request->correo;
        $user = Usuarios::select('*')->where('correo', $request->correo)->get();
        return $user;
    }
}
