<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          $users = factory(App\User::class, 15)->make()->toArray();

            foreach ($users as $user) {
                App\User::create($user);
            }
    }
}
