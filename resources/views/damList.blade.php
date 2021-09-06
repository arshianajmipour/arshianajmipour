@extends('layouts.app')

@section('content')
<?php use App\Vazn;
use App\Gale;
use App\Animal;?>



	@csrf
	<table id="editable" class="table table-bordered table-scripted" name="editable">
		<thead>
			<tr>
				<th></th>
				<th>پلاک</th>
				<th>گونه</th>
				<th>ژن</th>
				<th>نژاد</th>
				<th>تولد</th>
				<th>جنسیت</th>
				<th>وزن</th>
				<th>گله</th>
				<th>عملیات</th>
			</tr>
		</thead>
		<tbody>
			@foreach ($data as $row)
				<tr>
					<td>{{$row->id}}</td>
					<td>{{$row->pelak}}</td>
					<td>{{$row->gone}}</td>
					<td>{{$row->jhen}}</td>
					<td>{{$row->nejad}}</td>
					<td>{{$row->tavalod}}</td>
					<td>{{$row->jensiat}}</td>
					<td>{{0}}</td>
					<td>{{$row->gale_id}}</td>
					<td>
						<a href="damEdit/{{$row->id}}"><i class="fa fa-edit"></i></a>
						<button onclick="deleteRow({{$row->id}})"><i class="fa fa-trash" style="color: red;"></i></button>
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
<script type="text/javascript">
	function deleteRow(id){
		<?php 
			
			$id = "<script>document.write(id)</script>";
			DB::table('animals')->where('id',$id)->delete();
		 ?>
	}

</script>


@endsection
