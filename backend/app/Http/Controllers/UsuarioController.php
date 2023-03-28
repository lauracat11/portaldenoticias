<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    function getUsuario(Request $request){
        // return $request->correo;
        $user = Usuario::select('*')->where('correo', $request->correo)->get();
        return $user;
    }
    function createUsuario(Request $request){
        $usuario = Usuario::select('id')->where('correo',$request->correo)->get();
        // return $usuario;
        // return (count($usuario));
        if(count($usuario)>0){
            return response()->json(["message"=>"ya existe un usuario con ese correo"]);
        }else{
            Usuario::create(["nombre" => $request->nombre,"apellido" => $request->apellido,"correo" => $request->correo,"contraseña" => $request->contraseña]);
            return response()->json(["message"=>"se ha agregado el usuario"]);
        };
        
        
        
    }
}
