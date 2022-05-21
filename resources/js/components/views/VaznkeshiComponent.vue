<template>
<div class="w-100">
    <!-- <h1 class="text-center">وزن کشی</h1> -->

    <div class="w-100 d-flex p-2">
        <div>
        <label for="gale">انتخاب گله:</label>
        <select id="gale" name="gale" @change="setCurrentGaleID($event)" style="margin : 20px;">
            <option selected value="null">انتخاب کنید</option>
            <option v-for="gale in gales" v-bind:key="gale.id" :value="gale.id">{{ gale.name }}</option>
        </select>

        <!-- <button type="button" class="btn btn-primary" @click="show_submitVaznsOfGale_modal=true">
            ثبت وزن کشی برای گله
        </button> -->
        <v-btn
             color="#1D1D66"
              dark
              large
              @click="show_submitVaznsOfGale_modal=true"
        >
              ثبت وزن کشی گله
        </v-btn> 
        </div>
        <div class="modal-mask" v-if="show_submitVaznsOfGale_modal">
            <div class="modal-wrapper">
                <div class="modal-container" style="width:50%; background-color:#eee;">
                     <submit-vazns-of-gale v-bind:gale="current_gale"
                      @close="show_submitVaznsOfGale_modal=false"
                      @submitSuccess="fetchGales()">
                      </submit-vazns-of-gale>
                </div>
               
            </div>
        </div>


    </div>

    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1">
    </v-data-table>

    <!-- <div class="w-100 d-flex p-2">
        <table class="table" v-if="current_gale_id">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">پلاک دام</th>
                    <th scope="col">جنسیت</th>
                    <th scope="col">گونه</th>
                    <th scope="col">نژاد</th>
                    <th scope="col">تاریخ وزن کشی</th>
                    <th scope="col">توضیحات</th>

                </tr>
            </thead>
            <tbody v-for="animal in current_gale.animals" v-bind:key="animal.id">
                <tr v-for="vazn in animal.vazns" v-bind:key="vazn.id">
                    <th scope="row">{{ vazn.id }}</th>
                    <td>{{ toFarsi(animal.pelak) }}</td>
                    <td>{{ toFarsi(animal.jensiat) }}</td>
                    <td>{{ toFarsi(animal.gone) }}</td>
                    <td>{{ toFarsi(animal.nejad) }}</td>
                    <td>{{ toFarsi(vazn.tarikh) }}</td>
                    <td>{{ toFarsi(vazn.tozihat) }}</td>
                </tr>
                
            </tbody>
        </table>
    </div> -->
</div>

</template>

<script>

export default {
    components: {
        SubmitVaznsOfGale: () => import('./SubmitVaznsOfGale'),
    },

    data() {
        return {

            gales: [],

            current_gale_id: '',

            show_submitVaznsOfGale_modal: false,

            headers: [
                { text: '#', value: 'no' },
                { text: 'پلاک دام', value: 'pelak' },
                { text: 'جنسیت', value: 'jensiat' },
                { text: 'گونه', value: 'gone' },
                { text: 'نژاد', value: 'nejad' },
                { text: 'کیلو', value: 'kilo' },
                { text: 'گرم', value: 'gram' },
                { text: 'تاریخ وزن کشی', value: 'date' },
                { text: 'توضیحات', value: 'tozihat' },
            ],

        }
    },

    created()
    {
        this.fetchGales();
    },
    mounted()
    {
        console.log("Component mounted.");
    },

    methods: {
        fetchGales() {
            fetch('api/getGales')
            .then(res => res.json())
            .then(res => {
                this.gales = res.data;
            })
        },

        setCurrentGaleID(event)
        {
            this.current_gale_id = event.target.value;

            // console.log(this.current_gale_id);
            // console.log(this.current_gale);
        },

        toFarsi(str) {
		    return this.$t(str)
	    }
        
    },

    computed: {
        current_gale: function() {
            return this.gales.find(element => element.id == this.current_gale_id);
        },

        items: function() {

            let itms = []

            if (this.current_gale)
            {
                this.current_gale.animals.forEach(element => {
                    element.vazns.forEach(el => {
                        let a = JSON.parse(JSON.stringify(el.vazn))
                        if (typeof(a) == 'string') {a = JSON.parse(a); console.log(1)}

                        console.log(typeof JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(a)))

                        itms.push({
                            no: el.id,
                            pelak: this.toFarsi(element.pelak),
                            jensiat: this.toFarsi(element.jensiat),
                            gone: this.toFarsi(element.gone),
                            nejad: this.toFarsi(element.nejad),
                            kilo: (a[0]),
                            gram: (a[1]),
                            date: this.toFarsi(el.tarikh),
                            tozihat: this.toFarsi(el.tozihat),
                        })
                    })
                    
                })
            }

            return itms
        },
    },
}
</script>

<style lang="css" scoped>
    .table thead th, .table tbody tr td {
        text-align: center;
    }

    .table {
        background:cornsilk;
    }
</style>