<template>
    <div class="container">
    	<a href="newDamRegistration">افزودن دام جدید+</a>
    	<div class = "searching">
    		<input v-model="searched" >
    		<button @click = "search(searched)" class="btn btn-warning"><i class="fa fa-search"></i>جستجو</button>
    	</div>

    	<div class ="card card-body mb-2" v-for="animal in animals" v-bind:key="animal.id">

			<h3 >    {{animal.id}}</h3>
    		<h3 v-if="formSeen !== animal.id">    شماره پلاک:{{animal.pelak}}</h3>
    		<h3 v-if="formSeen !== animal.id">   جنسیت:{{animal.jensiat}}</h3>
    		<h3 v-if="formSeen !== animal.id">  تاریخ تولد :{{animal.tavalod}}</h3>
    		<h3 v-if="formSeen !== animal.id">  گونه:{{animal.gone}}</h3>
    		<h3 v-if="formSeen !== animal.id">  ژن :{{animal.jhen}}</h3>

    		<button @click="editAnimal(animal)" class="btn btn-warning mb-2" 
    		v-if="formSeen !== animal.id"><i class="fa fa-edit"></i>بهروزرسانی</button>
    		<button @click="deleteAnimal(animal.id)" class="btn btn-danger "
    	    v-if="formSeen !== animal.id"><i class="fa fa-trash" style="color: white;"></i>حذف</button>

    		<form @submit.prevent="addAnimal(animal)" class="mb-3" v-if="formSeen === animal.id">
    		    <div class="form-group row">
    				<label for ="pellak">پلاک دام</label>
    				<input type="number" class="form-control" v-model = "animal.pelak" id= "pelak">
    			</div>
    			<div class="form-group row">
    				<label for ="tavallod" >تاریخ تولد:   </label>
    				<input type="date" class="form-control" v-model = "animal.tavalod" id= "tavallod">
    			</div>
    			<div class="form-group row">
    				<label for ="jensiat">جنسیت:</label>
					<select v-model="animal.jensiat" id = "jensiat">
                    	<option value="nar">نر</option>
                    	<option value="made">ماده</option>
                	</select>
                </div>	
                <div class="form-group row">
    				<label for ="gone">  گونه: </label>
					<select v-model="animal.gone" id = "gone">
                    	<option value="boz">بز</option>
                    	<option value="gosfand">مگوسفند</option>
                	</select>
                </div>	
                <div class="form-group row">
    				<label for ="jhen">ژن:</label>
					<select v-model="animal.jhen" id = "jhen">
                      	<option value="hetero">هیچکدام </option>
                        <option value="hemo">ههموزیگوت </option>
                        <option value="none">ههموزیگوت </option>
                	</select>
                </div>	
                <button type="submit" class="btn btn_light btn-block">ذخیره تغییرات</button>
                <button @click="hideForm()" type="submit" class="btn btn_danger btn-block">انصراف</button>
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
  	formSeen:false
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
				alert('اطلاعات دا بروزرسانی شد.');
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
		fetch('api/animals/search' , {
			method : 'post' ,
			body:JSON.stringify(searched),
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