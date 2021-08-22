<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $table = 'my_flights';
    protected $casts = [
        'tavalod' => 'array'
    ];
}
