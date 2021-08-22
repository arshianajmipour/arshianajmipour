<?php

namespace App;
use App\Animal;
use Illuminate\Database\Eloquent\Model;

class Gale extends Model
{
    protected $table = 'gale';
    public function animals()
    {
        return $this->hasMany(Animal::class, 'gale_id');
    }
}
