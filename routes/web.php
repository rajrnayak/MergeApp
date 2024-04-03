<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::post('/user/store-or-update/{user?}',[UserController::class,'storeOrUpdate'])->name('user.storeOrUpdate');
Route::get('/user/show-users',[UserController::class,'showUsers'])->name('user.show_users');
Route::get('/user/destroy/{user}',[UserController::class,'destroy'])->name('user.destroy');

Route::get('/{path?}', function () {
    return view('app');
});

Route::fallback(function() {
    return view('app');
});
