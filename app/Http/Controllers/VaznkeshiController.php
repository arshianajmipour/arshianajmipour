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
}
