@extends('layouts.app')

@section('content')
<?php use App\Vazn;
use App\Gale;?>



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
				</tr>
			@endforeach
		</tbody>
	</table>

	<script type="text/javascript">

		$(document).ready(function(){
			$.ajaxSetup({
				headers:{
					'X-CSRF-Token' : $("input[name=_token]").val()
				}
			});
			$('#editable').Tabledit({
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
    <script scr="/js/tabledit.min.js"></script>

@endsection
