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
            $table->string('nejad')->nullable();
            $table->enum('jhen', ['hetero', 'hemo','none']);
            $table->enum('gone', ['boz', 'gosfand']);
            $table->integer('gale_id')->nullable();
            $table->foreign('gale_id')->references('gale_id')->on('gale');
            // $table->integer('vazn_id')->nullable();
            // $table->foreign('vazn_id')->references('vazn_id')->on('vazn');
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
