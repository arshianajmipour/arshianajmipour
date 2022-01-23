<?php

namespace App\Http\Controllers;
use App\Animal;
use App\Gale;
use App\Salon;
use view;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use DB;

class GaleController extends Controller
{
	public function index()
	{
		//
	}

	public function getGales()
	{
		return ['data' => Gale::with('animals.vazns')->get()];
	}

}
