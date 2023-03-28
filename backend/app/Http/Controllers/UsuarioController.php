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
        Usuario::create([
            "nombre" => $request->nombre,
            "apellido" => $request->apellido,
            "correo" => $request->correo,
            "contraseña" => $request->contraseña,
        ]
            
        );
        $usuario = Usuario::select('id')->where('correo',$request->correo)->get();

        if(count($usuario)>0){
            return response()->json($usuario[0],201);
        }else{
            return response()->json(["message"=>"no se ha podido agregar al jurado"],404);
        };
    }
}
