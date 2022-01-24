<template>


<div>
<v-card
     class="mx-auto"
    max-width="1000"
    color=#F9F9F9
>
<v-card-title style="
    background-color: black;
    color : white;
">    
    <h2 >ثبت اطلاعات دام جدید</h2>
</v-card-title>
<v-card-text>              

                <div class="card-body" >
                    <v-form @submit.prevent="addAnimal(animal)" class="px-3" lazy-validation ref="form">
                        

                        <div class="form-group row">
                            <div class="col-md-6">
                                <v-text-field 
                                 type="number" label= "شماره پلاک دام جدبد" v-model = "animal.pelak"
                                 width="100%"
                                 :rules="pelakRules"
                                 required>
                                 </v-text-field>
                            </div>
                        </div>
                        <date-picker ></date-picker>
                        <div class="form-group row">

                            <div class="col-md-6">
                                <v-text-field type="date" label="تاریخ تولد" name="tavalod" v-model = "animal.tavalod" is-inline  />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6">
                                <v-select
                                      v-model="animal.gone"
                                     label = "گونه دام"
                                     :items="itemsgone"
                                      item-text="t"
                                      item-value="v"
                                       persistent-hint
                                      return-object
                                      required
                                      :rules="[v => !!v || 'ورود گونه دام الزامی است']"
                                ></v-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6">
                                <v-select
                                  v-model="animal.jensiat"
                                  :items="itemsjensiat"
                                  item-text="t"
                                  item-value="v"
                                  label="جنسیت دام"
                                  persistent-hint
                                  return-object
                                  required
                                  :rules="[v => !!v || 'ورود جنسیت دام الزامی است']"
                                ></v-select>
                            </div>

                        </div>  
                        <div class="form-group row">
                            <div class="col-md-6">
                                <v-text-field 
                                 type="number" label= "گله دام جدید" v-model = "animal.gale"
                                 width="100%">
                                 </v-text-field>
                            </div>
                        </div>                                          
                        <div class="form-group row">

                            <div class="col-md-6">
                                <v-select
                                  v-model="animal.jhen"
                                    :items="itemsjhen"
                                    item-text="t"
                                    item-value="v"
                                     label="ژن دام "
                                     persistent-hint
                                      return-object
                                ></v-select>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                        <v-btn
                                             color="#1D1D66"
                                              dark
                                              large
                                              @click = "addAnimal(animal)"
                                        >
                                              ثبت دام
                                        </v-btn> 
                                <!-- <a href="" class="btn btn-warning"><i class="fa fa-angle-left"></i> بازگشت</a> -->
                            </div>
                        </div>
                    </v-form>
                </div>
</v-card-text>
</v-card>
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
          itemsgone: [{v:'boz', t:'بز'},{v:'gosfand', t:'گوسفند'} ],
          itemsjensiat: [{v:'nar', t:'نر'},{v:'made', t:'ماده'} ],
          itemsjhen: [{v:'hetero', t:'هتروزیگوت'},{v:'hemo', t:'هموزیگوت'},{v:'none', t:'هیچکدام'} ],
          pelakRules: [
            v => !!v || 'ورود پلاک الزامی است',
            v => !(/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v)) ||  'پلاک باید عددی باشد',
         ],
        inputRules: [
            v => !!v || 'ورود پلاک الزامی است', 
         ]

      };
    },
    created(){
        
    },
    methods:{

        addAnimal(animal){
            console.log(JSON.stringify(animal));
            this.$refs.form.validate();
            
                fetch('api/AddNewAnimals' , {
                    method : 'post' ,
                    body:JSON.stringify(animal),
                    headers: {
                        'Accept': 'application/json',
                        'content-type' : 'aplication/json'
                    }
                })
                .then(res => res.json());
            
        },

    },
    
    mounted() {
      console.log('Component mounted.')
      }
    }
    </script>