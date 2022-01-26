<template>
    <div class="container">
    	<router-link to="/newDamRegistration"><a>افزودن دام جدید+</a></router-link>
    	<div class = "searching">
    		<input v-model="searched" style="background-color:#FAF8F8;  border: 1px solid #000; font-size: large;">
    		<button @click = "search(searched)" class="btn btn-warning"><i class="fa fa-search"></i>جستجو</button>
    	</div>

		<pulse-loader :loading="!loaded" :color="color" :size="size"></pulse-loader>
    	<div class ="card card-body mb-2" v-for="animal in animals" v-bind:key="animal.id" style="background-color: #FAF8F8;">
			      <v-chip-group
			        v-model="selection"
			        active-class="deep-purple accent-4 white--text"
 			       column
					v-if="formSeen !== animal.id"
			      >
				  		<v-chip>    {{animal.id}}</v-chip>

        				<v-chip>    شماره پلاک:{{animal.pelak}}</v-chip>

        				<v-chip>   جنسیت:{{animal.jensiat}}</v-chip>

        				<v-chip>  تاریخ تولد :{{animal.tavalod}}</v-chip>

        				<v-chip>  گونه:{{animal.gone}}</v-chip>

						<v-chip>   ژن :{{animal.jhen}}</v-chip>
      				

			<!-- <h3 >    {{animal.id}}</h3>
    		<h3 v-if="formSeen !== animal.id">    شماره پلاک:{{animal.pelak}}</h3>
    		<h3 v-if="formSeen !== animal.id">   جنسیت:{{animal.jensiat}}</h3>
    		<h3 v-if="formSeen !== animal.id">  تاریخ تولد :{{animal.tavalod}}</h3>
    		<h3 v-if="formSeen !== animal.id">  گونه:{{animal.gone}}</h3>
    		<h3 v-if="formSeen !== animal.id">  ژن :{{animal.jhen}}</h3> -->
									<div style = "margin-right : 20px;">
			                            <v-btn
                                             color="#FFCF61"
                                              dark
                                              large
											  v-if="formSeen !== animal.id"
                                              @click = "editAnimal(animal)"
                                        >
                                              <i class="fa fa-edit"></i>
                                        </v-btn> 
										<v-btn
                                             color="red"
                                              dark
                                              large
											  v-if="formSeen !== animal.id"
                                              @click = "editAnimal(animal)"
                                        >
                                              <i class="fa fa-trash"></i>
                                        </v-btn> 
									</div>
    		<!-- <button @click="editAnimal(animal)" class="btn btn-warning mb-2" 
    		v-if="formSeen !== animal.id"><i class="fa fa-edit"></i>بهروزرسانی</button> -->
    		<!-- <button @click="deleteAnimal(animal.id)" class="btn btn-danger "
    	    v-if="formSeen !== animal.id"><i class="fa fa-trash" style="color: white;"></i>حذف</button> -->
			</v-chip-group>

    		<form @submit.prevent="addAnimal(animal)" class="mb-3" v-if="formSeen === animal.id">
    		    <div class="form-group row">
    				<!-- <label for ="pellak">پلاک دام</label> -->
    				<!-- <input type="number" class="form-control" v-model = "animal.pelak" id= "pelak"> -->
					<v-text-field 
                                 type="number" label= "شماره پلاک دام" v-model = "animal.pelak"
                                 width="100%"
                                 :rules="pelakRules"
                                 required>
                    </v-text-field>
    			</div>
    			<div class="form-group row">
    				<!-- <label for ="tavallod" >تاریخ تولد:   </label>
    				<input type="date" class="form-control" v-model = "animal.tavalod" id= "tavallod"> -->
					<v-text-field type="date" label="تاریخ تولد" name="tavalod" v-model = "animal.tavalod" is-inline  />

    			</div>
    			<div class="form-group row">
    				<!-- <label for ="jensiat">جنسیت:</label>
					<select v-model="animal.jensiat" id = "jensiat">
                    	<option value="nar">نر</option>
                    	<option value="made">ماده</option>
                	</select> -->
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
                <div class="form-group row">
    				<!-- <label for ="gone">  گونه: </label>
					<select v-model="animal.gone" id = "gone">
                    	<option value="boz">بز</option>
                    	<option value="gosfand">مگوسفند</option>
                	</select> -->
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
                <div class="form-group row">
    				<!-- <label for ="jhen">ژن:</label>
					<select v-model="animal.jhen" id = "jhen">
                      	<option value="hetero">هیچکدام </option>
                        <option value="hemo">ههموزیگوت </option>
                        <option value="none">ههموزیگوت </option>
                	</select> -->
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
                <!-- <button type="submit" class="btn btn_light btn-block">ذخیره تغییرات</button>
                <button @click="hideForm()" type="submit" class="btn btn_danger btn-block">انصراف</button> -->
				                        <v-btn
                                             color="#1D1D66"
                                              dark
                                              large
                                              @click = "addAnimal(animal)"
                                        >
                                             ذخیره تغییرات
                                        </v-btn> 
                                        <v-btn
                                             color="red"
                                              dark
                                              large
											  @click="hideForm()"
                                        >
											انصراف
                                        </v-btn> 
    		</form>
    	</div>

    </div>
</template>

<script>
export default {

data: function() {
  return {
  	animals:[],
  	animal:{
  		id:'',
  		pelak:'',
  		jensiat :'',
  		gone : '',
  		nejad: '',
  		jhen:'',
  		tavalod:''
  	},
  	animal_id:'',
  	searched:'',
  	edit:false,
  	formSeen:false,
	forEditing:{ v : '' , t : ''},
	itemsgone: [{v:'boz', t:'بز'},{v:'gosfand', t:'گوسفند'} ],
    itemsjensiat: [{v:'nar', t:'نر'},{v:'made', t:'ماده'} ],
	itemsjhen: [{v:'hetero', t:'هتروزیگوت'},{v:'hemo', t:'هموزیگوت'},{v:'none', t:'هیچکدام'} ],
	
	loaded: false,
  };
},
created(){
	this.fetchAnimals();
},
methods:{
	fetchAnimals(){
		
		fetch('api/animals')
		.then(res =>res.json())
		.then(res => {
			this.animals = res.data;

			this.loaded = true;
		});
	},
	hideForm(){
		this.formSeen = 0;
	},
	addAnimal(animal){
		console.log(JSON.stringify(animal));
		if(this.edit === true){
			fetch('api/animals' , {
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
		}
	},
	editAnimal(animal){
		this.edit = true;
		this.formSeen = animal.id;
		this.animal.id = animal.id;
		this.animal_id = animal.id;
		this.animal.pelak = animal.pelak;
		this.animal.jensiat = animal.jensiat;
	},
	deleteAnimal(id){
		if(confirm('آیا از حذف این دام اطمینان دارید؟')){
			fetch('api/animals/' + id , {
				method : 'delete'
			})
			.then(res => res.json())
			.then(data => {
				this.formSeen=false;
				alert('دام مورد نظر حذف شد');
				this.fetchAnimals();
			});
		}
	},
	search(searched){
		console.log(JSON.stringify({search: searched}));
		fetch('api/animals/search/' + searched , {
			method : 'get' ,
			// body:JSON.stringify({search: searched}),
			headers: {
				'Accept': 'application/json',
				'content-type' : 'aplication/json'
			}
		})
		.then(res => res.json())
		.then(res => {
			console.log(res.data);
			this.searched='';
			this.animals = res.data;
			
		});
	}
},

mounted() {
  console.log('Component mounted.')
  }
}
</script>
<style scoped>
#entityform {
  text-align: center;
}

pulse-loader {
	margin: auto 0;
}

</style>