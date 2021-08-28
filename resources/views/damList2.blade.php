@extends('layouts.app')

@section('content')
<?php 
use App\Gale;
use App\Animal;?>

	<div id="data1">
		<nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2">
			<div class="container">
				<a href="#">لیست دام ها</a>
			</div>
		</nav>
		<div class="container">

			<div id="app" >
			@foreach($data as $animal)				
					<animal></animal>
			@endforeach		
			</div>
		</div>
	</div>
<!-- 	<script type="application/javascript">
		var app2 = new Vue({
			el : '#app2' ,
			data:{
				pelak:''
			}
			


		})
	</script> -->
@endsection
