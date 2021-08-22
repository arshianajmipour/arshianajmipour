<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $table = 'animals';
    protected $casts = [
        'tavalod' => 'array'
    ];
    public function animal()
    {
        return $this->belongsTo(Gale::class, 'gale_id');
    }
}
