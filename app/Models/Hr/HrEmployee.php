<?php

namespace App\Models\Hr;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HrEmployee extends Model
{
    use HasFactory;
    
    public function user(){
        return $this->belongsTo('App\User');
    }    
}
