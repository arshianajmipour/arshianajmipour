<?php

namespace App;
use App\Animal;
use Illuminate\Database\Eloquent\Model;

class Vazn extends Model
{
    protected $fillable = ['animal_id', 'vazn', 'tarikh', 'tozihat'];
    protected $guarded = [];
    protected $table = 'vazns';
    protected $casts = [
        'vazn' => 'array',
        'tozihat' => 'array',
    ];
    public function animal()
    {
        return $this->belongsTo(Animal::class, 'animal_id');
    }

}
