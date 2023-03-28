<?php

use App\Http\Controllers\UsuarioController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/login', [UsuarioController::class, 'getUsuario']);
Route::post('/login/registro', [UsuarioController::class, 'createUsuario']);
