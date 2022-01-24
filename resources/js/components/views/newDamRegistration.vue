<template>
<div>
              <div class="card-header">Login</div>

                <div class="card-body">
                    <form @submit.prevent="addAnimal(animal)">
                        <!-- @csrf -->

                        <div class="form-group row">
                            <label for="pelak" class="col-md-4 col-form-label text-md-right">شماره پلاک}</label>

                            <div class="col-md-6">
                                <input id="pelak" type="number" name="pelak" v-model = "animal.pelak">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="tavalod" class="col-md-4 col-form-label text-md-right">تاریخ تولد</label>

                            <div class="col-md-6">
                                <input id="tavalod" type="date" name="tavalod" v-model = "animal.tavalod">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="gone" class="col-md-4 col-form-label text-md-right">گونه دام</label>

                            <div class="col-md-6">
                                <select id="gone" name="gone" v-model = "animal.gone">
                                	<option value="boz">بز</option>
                                	<option value="gosfand">گوسفتد</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="jensiat" class="col-md-4 col-form-label text-md-right">گونه دام</label>

                            <div class="col-md-6">
                                <select id="jensiat" name="jensiat" v-model = "animal.jensiat">
                                	<option value="nar">نر</option>
                                	<option value="made">ماده</option>
                                </select>
                            </div>

                        </div>  
                        <div class="form-group row">
                            <label for="gale" class="col-md-4 col-form-label text-md-right">گله</label>

                            <div class="col-md-6">
                                <input id="gale" name="gale" v-model = "animal.gale">
                            </div>
                        </div>                                              
                        <div class="form-group row">
                            <label for="jhen" class="col-md-4 col-form-label text-md-right">گونه دام</label>

                            <div class="col-md-6">
                                <select id="jhen" name="jhen" v-model = "animal.jhen">
                                	<option value="hetero">هتروزیگوت </option>
                                	<option value="hemo">هموزیگوت </option>
                                	<option value="none">هیچکدام </option>
                                </select>
                            </div>
                        </div>    
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    ثبت دام
                                </button>
                                <!-- <a href="{{ url()->previous() }}" class="btn btn-warning"><i class="fa fa-angle-left"></i> بازگشت</a> -->
                            </div>
                        </div>
                    </form>
                </div>
</div>
</template>
<script>
    export default {
    
    data: function() {
      return {

          animal:{
              id:'',
              pelak:'',
              jensiat :'',
              gone : '',
              nejad: '',
              jhen:'',
              tavalod:''
          },

      };
    },
    created(){
        
    },
    methods:{

        addAnimal(animal){
            console.log(JSON.stringify(animal));
            // if(this.edit === true){
                fetch('api/AddNewAnimals' , {
                    method : 'post' ,
                    body:JSON.stringify(animal),
                    headers: {
                        'Accept': 'application/json',
                        'content-type' : 'aplication/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.formSeen=0;
                    alert('اطلاعات دام بروزرسانی شد.');
                    this.fetchAnimals();
                });
            // }
        },

    },
    
    mounted() {
      console.log('Component mounted.')
      }
    }
    </script>