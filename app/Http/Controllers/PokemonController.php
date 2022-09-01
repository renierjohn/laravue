<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pokemons;

class PokemonController extends Controller
{
    public function index(Request $request){
        $uid      = $request->user()->id;
        $result   = Pokemons::where('user',$uid)->get();
        return response()->json($result);
    }

    public function run(Request $request){
        $uid      = $request->user()->id;
        $likes    = $request->input('likes');
        $dislikes = $request->input('dislikes');
        
        $result   = Pokemons::where('user',$uid)->get();
        $data = [];
        $data['likes'] = '';
        $data['dislikes'] = '';
        if(!empty($likes)){
            $data['likes'] = $likes;
        }

        if(!empty($dislikes)){
            $data['dislikes'] = $dislikes;
        }

        if(empty(json_decode($result,TRUE)) ){
            Pokemons::create([
                'user'     => $uid,
                'likes'    => $likes ? $likes : '',
                'dislikes' => $dislikes ? $dislikes : ''
            ]);
        }else{
            Pokemons::where('user',$uid)->update($data);
        }

        return response()->json([
            'status'  => $result
        ]);
    }
}
