<template>
<div class="w-100">
    <h1 class="text-center">وزن کشی</h1>

    <div class="w-100 d-flex p-5">
        <label for="gale">انتخاب گله</label>
        <select id="gale" name="gale" @change="setCurrentGaleID($event)">
            <option selected>انتخاب کنید</option>
            <option v-for="gale in gales" v-bind:key="gale.id" :value="gale.id">{{ gale.name }}</option>
        </select>

        <button type="button" class="btn btn-primary" @click="show_submitVaznsOfGale_modal=true">
            ثبت وزن کشی برای گله
        </button>

        <div class="modal-mask" v-if="show_submitVaznsOfGale_modal">
            <div class="modal-wrapper">
                <div class="modal-container">
                     <submitVaznsOfGale-component v-bind:gale="current_gale" @close="show_submitVaznsOfGale_modal=false"></submitVaznsOfGale-component>
                </div>
               
            </div>
        </div>


    </div>
    <div class="w-100 d-flex p-5">
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
                    <td>{{ animal.pelak }}</td>
                    <td>{{ animal.jensiat }}</td>
                    <td>{{ animal.gone }}</td>
                    <td>{{ animal.nejad }}</td>
                    <td>{{ vazn.tarikh }}</td>
                    <td>{{ vazn.tozihat }}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {

            gales: [],

            current_gale_id: '',

            show_submitVaznsOfGale_modal: false,

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
        }
    },

    computed: {
        current_gale: function() {
            return this.gales.find(element => element.id == this.current_gale_id);
        },
    },
}
</script>