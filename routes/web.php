<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/list', function () {
    return Inertia::render('PokeApi');
})->middleware(['auth', 'verified'])->name('pokeAPI');

Route::get('/admin/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');



Route::middleware('auth')->group(function () {
    Route::get('/api/status', [PokemonController::class, 'index'])
                ->name('pokemon.controller');
    
    Route::get('/api/status/run', [PokemonController::class, 'run'])
                ->name('pokemon_run.controller');

    Route::get('/api/status/user', [UserController::class, 'index'])
            ->name('user.controller');

    Route::post('/api/status/user/update', [UserController::class, 'update'])
        ->name('user_update.controller');
});


require __DIR__.'/auth.php';
