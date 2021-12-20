<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;


class UserInfo extends Model
{
    use HasApiTokens,HasFactory,SoftDeletes;

    protected $fillable = [
        'user_id','phone_number','about','gender','image','date_of_joining','document'
    ];
}
