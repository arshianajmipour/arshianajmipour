<?php

namespace App;
use App\Animal;
use Illuminate\Database\Eloquent\Model;

class Vazn extends Model
{
    protected $table = 'vazns';
    protected $casts = [
        'vazn' => 'array',
        'tarikh' => 'array',
        'tozihat' => 'array',
    ];
    public function animal()
    {
        return $this->belongsTo(Animal::class, 'animal_id');
    }

}
