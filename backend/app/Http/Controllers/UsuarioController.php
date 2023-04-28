<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class UsuarioController extends Controller
{
    public function getUsuario(Request $request){

        // return $request->correo;
        $user = Usuario::select('*')->where('correo', $request->correo)->get();
        $password = Usuario::select('contraseña')->where('correo', $request->correo)->get();
        
        // return $request->contraseña;
        return $password->contraseña;

        if($password == $request->contraseña){
            return $user;
        }else{
            return response()->json(["message" => "Contraseña incorrecta"]);
        }
    
    }

    public function createUsuario(Request $request)
    {
        $usuario = Usuario::select('id')->where('correo', $request->correo)->get();
        // return $usuario;
        // return (count($usuario));
        if (count($usuario) > 0) {
            return response()->json(["message" => "ya existe un usuario con ese correo"]);
        } else {
            Usuario::create(["nombre" => $request->nombre, "apellido" => $request->apellido, "correo" => $request->correo, "contraseña" => $request->contraseña]);
            return response()->json(["message" => "se ha agregado el usuario"]);
        };
    }

    public function updateUsuario(Request $request)
    {
        $usuario = Usuario::find($request->id);
        // return $usuario;

        if ($usuario) {
            $usuario->nombre = $request->nombre;
            $usuario->apellido = $request->apellido;
            $usuario->correo = $request->correo;
            $usuario->contraseña = $request->contraseña;
            $usuario->save();
            return response()->json(["message" => "El usuario se ha actualizado correctamente."]);
        } else {
            return response()->json(["message" => "No se ha encontrado el usuario."]);
        }
    }

    public function deleteUsuario(Request $request){
        $usuario= Usuario::find($request->id);
        // return $usuario;

        if ($usuario) {
            $usuario->delete();
            return response()->json(["message" => "El usuario se ha eliminado correctamente."]);
        } else {
            return response()->json(["message" => "No se ha encontrado el usuario."]);
        }
    }


    public function allUsers(){
        $usuarios = Usuario::all();
        return $usuarios;
    }
}
