<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Vazn;
use App\Gale;
class Animal extends Model
{

    protected $table = 'animals';
    protected $guarded = array();
    protected $casts = [
        
    ];
    public function animal()
    {
        return $this->belongsTo(Gale::class, 'gale_id');
    }
    public function vazn()
    {
    	return $this->hasOne(Vazn::class,'vazn_id');
    }
    
}
