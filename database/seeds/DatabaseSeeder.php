<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('SimpleUserSeeder');
    }
}
class SimpleUserSeeder extends Seeder {
    public function run()
    {
            DB::table('users')->insert(
                array(
                    'name' => 'user',
                    'username' => 'user',
                    'password' =>bcrypt(123),
                    'email' => 'arshianajmipour@gmail.com',
                )
            );
	}
}