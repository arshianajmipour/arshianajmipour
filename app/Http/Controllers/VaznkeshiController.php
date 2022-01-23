<?php

namespace App\Http\Controllers;
use App\Animal;
use App\Gale;
use App\Salon;
use App\Vazn;
use view;
use Illuminate\Http\Request;

use Illuminate\Http\RedirectResponse;
use DB;

class VaznkeshiController extends Controller
{
	public function index()
	{
		return view('vaznkeshi');
	}

	public function createVazns(Request $req)
	{
		foreach (json_decode($req->vazns_array) as $vazn)
		{
			Vazn::create([
				'animal_id' => $vazn->animal_id,
				'vazn' => json_encode([$vazn->vazn->kilo, $vazn->vazn->geram]),
				'tarikh' => $req->tarikh,
				'tozihat' => $req->tozihat,
			]);
		}

		return response()->json('ok');
	}
}
