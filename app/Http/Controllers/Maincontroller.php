<?php

namespace App\Http\Controllers;
use App\Animal;
use App\Gale;
use App\Salon;
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

    public function newGaleRegistration()
    {
        return view('newGaleRegistration');
    }

    public function newSalonRegistration()
    {
        return view('newSalonRegistration');
    }

    public function damList()
    {
    	$data = DB::table('animals')->get();
 
        return view('damList2')->withData($data);

    }

    public function serachAnimals($searched)
    {

    	$animals = Animal::where('pelak' ,$searched)
    							->orWhere('jensiat', 'LIKE', "%$searched%")
    							->orWhere('gone', 'LIKE', "%$searched%")
    							->orWhere('jhen', 'LIKE', "%$searched%")
    							->get();
    	$data = array('data' => $animals);
    	return $data;
    }

    public function getAnimals()
    {

    	$data = array('data' => Animal::all() );
    	return $data;
    }

    public function editAnimals(Request $req)
    {
    	$animal = Animal::where('id',$req->id)->first();
    	$animal->pelak = $req->input('pelak');
    	$animal->jensiat = $req->input('jensiat');
    	$animal->tavalod = $req->input('tavalod');
    	$animal->gone = $req->input('gone');
    	$animal->jhen = $req->input('jhen');
    	if($animal->save()){
        	$data = array('data' => Animal::all() );
    		return $data;
    	}
    }

    public function deleteAnimals($id){
    	$animal =Animal::findOrFail($id);
    	$animal->pelak =123;
    	if($animal->delete()){
    		$data = array('data' => Animal::all() );
    		return $data;
    	}
    }

    public function damDelete($id){
    	return $id;
    }
    public function newDam(Request $req)
    {
	    $animal=Animal::create([
    		'pelak' => $req->input('pelak'),
    		'gone' => $req->input('gone'),
    		'jhen' => $req->input('jhen'),
    		'jensiat' => $req->input('jensiat')
		]);
	    $animal->tavalod = $req->input('tavalod');
	    $animal->gale_id = $req->input('gale');
	    $animal->save();
	    return redirect('newDamRegistration');
    }

    public function newGale(Request $req)
    {
	    $gale=Gale::create([
    		'name' => $req->input('name'),
    		'salon_number'=>$req->input('salon')
		]);
	    $gale->save();
	    return redirect('newGaleRegistration');
    }

    public function newSalon(Request $req)
    {
	    $salon=Salon::create([
	    	'salon_number'=> $req->input('salon_number')
	    ]);

	    $salon->save();
	    return redirect('newSalonRegistration');
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
