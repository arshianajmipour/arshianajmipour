@extends('layouts.app')

@section('content')
              <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="/newDamRegistration">
                        @csrf

                        <div class="form-group row">
                            <label for="pelak" class="col-md-4 col-form-label text-md-right">{{ __('شماره پلاک') }}</label>

                            <div class="col-md-6">
                                <input id="pelak" type="number" name="pelak">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="tavalod" class="col-md-4 col-form-label text-md-right">{{ __('تاریخ تولد') }}</label>

                            <div class="col-md-6">
                                <input id="tavalod" type="date" name="tavalod">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="gone" class="col-md-4 col-form-label text-md-right">{{ __('گونه دام') }}</label>

                            <div class="col-md-6">
                                <select id="gone" name="gone">
                                	<option value="boz">بز</option>
                                	<option value="gosfand">گوسفتد</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="jensiat" class="col-md-4 col-form-label text-md-right">{{ __('گونه دام') }}</label>

                            <div class="col-md-6">
                                <select id="jensiat" name="jensiat">
                                	<option value="nar">نر</option>
                                	<option value="made">ماده</option>
                                </select>
                            </div>

                        </div>  
                        <div class="form-group row">
                            <label for="gale" class="col-md-4 col-form-label text-md-right">{{ __('گله') }}</label>

                            <div class="col-md-6">
                                <input id="gale" name="gale">
                            </div>
                        </div>                                              
                        <div class="form-group row">
                            <label for="jhen" class="col-md-4 col-form-label text-md-right">{{ __('گونه دام') }}</label>

                            <div class="col-md-6">
                                <select id="jhen" name="jhen">
                                	<option value="hetero">هیچکدام </option>
                                	<option value="hemo">ههموزیگوت </option>
                                	<option value="none">ههموزیگوت </option>
                                </select>
                            </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('ثبت دام') }}
                                </button>
                                <a href="{{ url()->previous() }}" class="btn btn-warning"><i class="fa fa-angle-left"></i> بازگشت</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

@endsection