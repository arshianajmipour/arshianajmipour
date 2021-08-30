@extends('layouts.app')

@section('content')
              <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="/newGaleRegistration">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">
                            {{ __('نام گله') }}</label>

                            <div class="col-md-6">
                                <input id="name"  name="name">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="salon"  class="col-md-4 col-form-label text-md-right">{{ __('شماره سالن') }}</label>

                            <div class="col-md-6">
                                <input id="salon" type="number" name="salon">
                            </div>
                        </div>
 
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('ثبت گله') }}
                                </button>
                                <a href="{{ url()->previous() }}" class="btn btn-warning"><i class="fa fa-angle-left"></i> بازگشت</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

@endsection