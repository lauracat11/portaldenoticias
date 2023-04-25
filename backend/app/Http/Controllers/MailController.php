<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailConfirmation;

class MailController extends Controller
{
    //
    public function sendMailConfirmation( Request $request){
        // return $request->correo;
        if($request->correo){
            Mail::to($request->correo)->send(new MailConfirmation());
            return response()->json(['message'=>'Mensaje enviado']); 
        }else{
            return response()->json(['message'=>'Mensaje no enviado']); 
        }
        

    }
}
