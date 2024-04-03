<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function storeOrUpdate(User $user,Request $request){
        $user->fill([
            'user_name' => $request->user_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_type' => $request->role_type,
        ])->save();
    }

    function showUsers(){
        $users = User::all();
        return $users;
    }

    function destroy(User $user){
        $user->delete();
    }

}
