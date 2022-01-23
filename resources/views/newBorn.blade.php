@extends('layouts.app')

@section('content')

<form id="newBornForm" action="newBornSubmit" method="post">
	<h2>اطلاعات زایمان</h2>
	<div class="form-row">
		<label for="madePelak">پلاک ماده</label>
		<select name="madePelak">
			@foreach($made as m)
				<option value="{{m->pelak}}">m->pelak</option>			
			@endforeach
		</select>
		<label for="narPelak">لاک نر</label>
		<select name="narPelak">
			@foreach($nar as n)
				<option value="{{n->pelak}}">n->pelak</option>			
			@endforeach
		</select>
	</div>
	<div class="form-row">
		<label for="zayemanSt">وضعیت زایمان</label>
		<select name="zayemanSt">
			<option value="sakht">سخت</option>
			<option value="asan">آسان</option>
		</select>
		<label for="tarikh">تاریخ زایش</label>
		<input type="date" name="tarikh">
	</div>
	<div class="form-row">
		<label for="tozihat">توضیحات</label>
		<input type="text" name="tozihat">
	</div>
	<h2>اطلاعات دام متولد</h2>
	<div class="form-row">
		<label for="pelak" class="col-md-4 col-form-label text-md-right">{{ __('شماره پلاک') }}</label>

        <div class="col-md-6">
            <input id="pelak" type="number" name="pelak">
        </div>

        <label for="jensiat" class="col-md-4 col-form-label text-md-right">جنسیت </label>

        <div class="col-md-6">
            <select id="jensiat" name="jensiat">
                <option value="nar">نر</option>
                <option value="made">ماده</option>
            </select>
        </div>
        <label for="jhen" class="col-md-4 col-form-label text-md-right">{{ __('گونه دام') }}</label>

            <div class="col-md-6">
                <select id="jhen" name="jhen">
                	<option value="hetero">هیچکدام </option>
                  	<option value="hemo">ههموزیگوت </option>
                    <option value="none">ههموزیگوت </option>
            	</select>
            </div>
	</div>
</form>


@endsection