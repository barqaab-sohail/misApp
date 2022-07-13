<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Hr\HrEmployee;

class DashboardController extends Controller
{
    public function index(){
    	$employee = HrEmployee::where('user_id',Auth::user()->id)->first();
    	$picture = Auth::user()->picturePath();
    	return Inertia::render('Dashboard', compact('employee','picture'));
    }
}
