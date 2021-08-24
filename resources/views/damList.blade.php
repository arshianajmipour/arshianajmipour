@extends('layouts.app')

@section('content')
<?php use App\Vazn;
use App\Gale;?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<script scr="https://markcell.github.io/jquery-tabledit/assets/js/tabledit.min.js"></script>
	@csrf
	<table id="editable" class="rable table-bordered table-scriped">
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
			</tr>
		</thead>
		<tbody>
			@foreach ($data as $row)
				<tr>
					<th>{{$row->id}}</th>
					<th>{{$row->pelak}}</th>
					<th>{{$row->gone}}</th>
					<th>{{$row->jhen}}</th>
					<th>{{$row->nejad}}</th>
					<th>{{$row->tavalod}}</th>
					<th>{{$row->jensiat}}</th>
					<th>{{0}}</th>
					<th>{{$row->gale_id}}</th>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection
<script type="text/javascript">
	$(document).ready(function(){
		$.ajaxSetup({
			headers:{
				'X-CSRF-Token' : $("input[name=_token]").val()
			}
		});
		$('#editable').tabledit({
			url:'{{ route("damList.action")}}',
			dataType:"json",
			columns:{
				identifier:[0,'id'],
				editable : [[1,'pelak'],[2,'gone',{"boz":"بز","gosfand":"گوسفند"}]
				,[3,'jhen',{"hetero":"هتروزیگوت","hemo":"هموزیگوت"  , "none":"هیچکدام"}]
				,[4,'nejad'],[5,'tavalod']
				,[6,'jensiat',{"nar":"نر","made":"ماده"}],[8,'gale']]
			},
			restoreButton:false,
			onSuccess:function(data,textStatus,jqXHR){
				if(data.action == 'delete')
				{
					$('#'+data.id).remove();
				}
			}
		});

	});
</script>