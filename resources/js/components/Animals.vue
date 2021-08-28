<template>
    <div class="container">
    	<h2>animal22</h2>
    	<input v-model="animal.id" />
    	<p>:/</p>
    </div>
</template>

<script>
export default {

data: function() {
  return {
  	animals:[],
  	animal:{
  		id:'2',
  		pelak:'',
  		jensiat :''
  	},
  	animal_id:'',
  	edit:false
  };
},
created(){
	this.fetchAnimal();
},
methods:{
	fetchAnimal(){
		fetch()
		.then(res =>res.json)
		.then(res => {this.animals = res.data;})
		
	}
},

mounted() {
  console.log('Component mounted.')
  }
}
</script>