<?php

use Illuminate\Support\Facades\Route;

Route::post("/login", "Auth\LoginController@login");
Route::post("/logout", "Auth\LoginController@logout");
