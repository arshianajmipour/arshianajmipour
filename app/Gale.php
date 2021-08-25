<?php

namespace App;
use App\Animal;
use App\Salon;

use Illuminate\Database\Eloquent\Model;

class Gale extends Model
{
    protected $table = 'gale';
    protected $guarded = array();    
    public function animals()
    {
        return $this->hasMany(Animal::class, 'gale_id');
    }
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_number');
    }
}
