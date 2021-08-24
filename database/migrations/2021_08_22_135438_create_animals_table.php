<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->id();
            //$table->primary('id');
            $table->timestamps();
            $table->integer('pelak');
            $table->json('tavalod')->nullable();
            $table->enum('jensiat', ['nar', 'made']);
            $table->string('nejad');
            $table->enum('jhen', ['hetero', 'hemo','none']);
            $table->enum('gone', ['boz', 'gosfand']);
            $table->integer('gale_id');
            $table->integer('vazn_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animals');
    }
}
