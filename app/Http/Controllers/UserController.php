<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request){
        $user = $request->user();
        return response()->json($user);
    }

    public function update(Request $request){
        $uid   = $request->user()->id;
        $body  = $request->collect()['body'];
        // $body  = json_decode($body,TRUE);
        $name  = $body['name'];
        $mail  = $body['email'];
        $bday  = $body['birthday'];

        $data = [];
        if(!empty($name)){
            $data['name'] = $name;
        }

        if(!empty($mail)){
            $data['email'] = $mail;
        }

        if(!empty($bday)){
            $data['birthday'] = $bday;
        }

        $user = User::where('id',$uid)->update($data);
        return response()->json($data);
    }
}
