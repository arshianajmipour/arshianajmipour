<?php

namespace App\Http\Controllers;
use App\Animal;
use view;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use DB;
class Maincontroller extends Controller
{
    public function newDamRegistration()
    {
        return view('newDamRegistration');
    }

    public function damList()
    {
    	$data = DB::table('animals')->get();
 
        return view('damList')->withData($data);
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
	    return redirect('newDamRegistration');
    }

    public function damListAction(Request $req)
    {
    	if($req->ajax()){
    		if($req->action == 'Edit'){
    			$data = array(
					'pelak' => $req->pelak,
    				'gone' => $req->gone,
    				'jhen' => $req->jhen,
    				'jensiat' => $req->jensiat,
    				'nejad' =>$req->nejad,
    				'gale' =>$req->gale,
    			);
    			DB::table('animals')->where('id',$req->id)->update($data);
    		}
    	}
    	if($req->action == 'delete'){
    		DB::table('animals')->where('id',$req->id)->delete();
    	}
    	return request()->json($req);
    }

}
