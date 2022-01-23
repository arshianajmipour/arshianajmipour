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
class newBornController extends Controller
{
	public function index()
	{
		$nar = Animal::all()->where('jensiat'=='nar');
		$made = Animal::all()->where('jensiat'=='made');
		return view('newBorn')withNar($nar)->withMade($made);
	}	
}
