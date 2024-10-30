<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', fn(Request $request) => $request->user());


