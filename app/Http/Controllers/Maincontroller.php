<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Maincontroller extends Controller
{
    public function newDamRegistration()
    {
        return view('newDamRegistartion');
    }
}
