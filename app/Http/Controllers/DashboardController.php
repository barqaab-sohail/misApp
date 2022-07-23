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
		$userName = $employee->first_name." ". $employee->last_name;
    	$picture =  "https://hrms.barqaab.pk/storage/".Auth::user()->picturePath();
    	return Inertia::render('Dashboard', compact('userName','picture'));
	}
	
	public function totalEmployee(){
		$allEmployee = HrEmployee::whereIn('hr_status_id',array(1,5))->count() - 10;
		
		return response()->json (['Total_Employee'=>$allEmployee]);
	}
}
