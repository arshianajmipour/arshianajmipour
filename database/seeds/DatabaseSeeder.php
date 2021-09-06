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
        $this->call('SimpleGaleSeeder');
        $this->call('SimpleAnimalSeeder');
        $this->call('SimpleVaznSeeder');
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

class SimpleGaleSeeder extends Seeder {
    public function run()
    {
        for ($i = 0; $i < 5; $i++)
            DB::table('gales')->insert(
                array(
                    'name' => 'gale'.$i,
                    'salon_number' => $i
                )
            );
	}
}

class SimpleAnimalSeeder extends Seeder {
    public function run()
    {
        for ($i = 0; $i < 10; $i++)
            DB::table('animals')->insert(
                array(
                    'pelak' => $i,
                    'tavalod' => '[1400, 1, 1]',
                    // 'gone' => '0',
                    // 'jhen' => '0',
                    'gale_id' => 1,
                )
            );
	}
}

class SimpleVaznSeeder extends Seeder {
    public function run()
    {
        for ($i = 1; $i <= 10; $i++)
            DB::table('vazns')->insert(
                array(
                    'animal_id' => $i,
                    'vazn' => '[4, 200]',
                    'tarikh' => '[1400, 2, 1]',
                )
            );
	}
}