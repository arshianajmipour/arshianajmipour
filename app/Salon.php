<?php

namespace App;
use App\Gale;
use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    protected $table = 'salons';
    protected $guarded = array();    
    public function gales()
    {
        return $this->hasMany(Gale::class, 'salon_number');
    }
}
