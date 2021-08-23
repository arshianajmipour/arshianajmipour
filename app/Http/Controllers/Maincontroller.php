<?php

namespace App\Http\Controllers;
use App\Animal;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
class Maincontroller extends Controller
{
    public function newDamRegistration()
    {
        return view('newDamRegistartion');
    }
    public function newDam(Request $req)
    {
	    $animal=Animal::create([
    		'pelak' => $req->input('pelak'),
    		'gone' => $req->input('gone'),
    		'jhen' => $req->input('jhen'),
    		'jensiat' => $req->input('jensiat')
		]);

	    $animal->save();
	    return redirect('\newDamRegistartion');
    }
}
