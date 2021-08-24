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
        for ($i = 0; $i < 10; $i++)
        {
            DB::table('users')->insert(
                array(
                    'name' => 'user',
                    'username' => 'user',
                    'password' =>'123',
                    'email' => 'arshianajmipour@gmail.com',
                )
            );
        }
	}
}