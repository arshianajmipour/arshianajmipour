<template>
    <div class="container">
    	<a href="newDamRegistration">افزودن دام جدید+</a>
    	<div class ="card card-body mb-2" v-for="animal in animals" v-bind:key="animal.id">
    		<h3 >    {{animal.id}}</h3>
    		<h3 v-if="formSeen !== animal.id"> }}animal.pelak}} شماره پلاک:</h3>
    		<h3 v-if="formSeen !== animal.id">   جنسیت:{{animal.jensiat}}</h3>


    		<button @click="editAnimal(animal)" class="btn btn_warning mb-2" 
    		v-if="formSeen !== animal.id">بهروزرسانی</button>
    		<button @click="deleteAnimal(animal.id)" class="btn btn_danger "
    	    v-if="formSeen !== animal.id">حذف</button>

    		<form @submit.prevent="addAnimal" class="mb-3" v-if="formSeen === animal.id">
    			<input type="number" class="form-control" v-model = "animal.pelak" >
				<select v-model="animal.jensiat">
                    <option value="nar">نر</option>
                    <option value="made">ماده</option>
                </select>
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
  	},
  	animal_id:'',
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
	addAnimal(){
		if(this.edit === true){
			fetch('api/animals' , {
				method : 'put' ,
				body:JSON.stringify(this.animal),
				headers: {
					'content-type' : 'aplication/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				this.animal.formSeen=false;
				alert('اطلاعات دا بروزرسانی شد.');
				this.fetchAnimal();
			});
		}
	},
	editAnimal(animal){
		this.edit = true;
		this.formSeen = animal.id;
		this.animal.formSeen = true;
		this.animal.pelak = animal.pelak;
		this.animal.jensiat = animal.jensiat;
	},
	deleteAnimal(id){
		if(confirm('آیا از حذف این دام اطمینان دارید؟')){
			fetch('api/animals/${id}' , {
				method : 'delete' ,
				body:JSON.stringify(this.animal),
				headers: {
					'content-type' : 'aplication/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				this.animal.formSeen=false;
				alert('دام مورد نظر حذف شد');
				this.fetchAnimal();
			});
		}
	}
},

mounted() {
  console.log('Component mounted.')
  }
}
</script>