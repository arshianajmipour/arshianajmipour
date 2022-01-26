<template>
    <div class="w-100">
        <h4>ثبت وزن کشی برای دام های گله {{ gale.name }}</h4>

        <form @submit.prevent="createVazns()">
            <div>
                <label for="tarikh">انتخاب تاریخ وزن کشی:</label>
                <input type="date" name="tarikh" id="tarikh" v-model="tarikh_of_vazn"
                style="background-color:#FAF8F8;  border: 1px solid #000; font-size: large;"/>
            </div>
            <div class="table-wrapper">
                <table class="w-100 table">
                    <thead>
                        <tr>
                            <th scope="col">پلاک</th>
                            <th scope="col">تاریخ تولد</th>
                            <th scope="col" colspan="2">وزن</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="animal in gale.animals" v-bind:key="animal.id">
                            <td>{{animal.pelak}}</td>
                            <td>{{animal.tavalod}}</td>
                            <td>
                                <input type="number" :name="'kilo'+animal.id" :id="'kilo'+animal.id" min="0"
                                v-if="vazns.length"
                                v-model="vazns[animal.id].vazn.kilo"
                                style="background-color:#FAF8F8;  border: 1px solid #000; font-size: large;"
                                >
                                <label :for="'kilo'+animal.id">کیلو</label>
                            </td>
                            <td>
                                <input type="number" :name="'geram'+animal.id" :id="'geram'+animal.id" min="0"
                                v-if="vazns.length"
                                v-model="vazns[animal.id].vazn.geram"
                                style="background-color:#FAF8F8;  border: 1px solid #000; font-size: large;"
                                >
                                <label :for="'geram'+animal.id">گرم</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex">
                <button class="btn btn-primary" type="submit">
                    ثبت
                </button>
                <button type="button" class="btn btn-secodary" @click="$emit('close')">
                    برگشت
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            vazns: [],
            tarikh_of_vazn: new Date,
            tozihat: '',
        }
    },

    props: {
        gale: {
            required: true,
            type: Object,
        },
    },

    created() {
        // console.log(this.gale);
        // const vazn_keys = Object.keys(this.gale.animals[0].vazns[0]);

        this.gale.animals.forEach(element => {

            let vaznObj = {};
            // vazn_keys.forEach(key => {
            //     vaznObj[key] = {};
            // });
            vaznObj.animal_id = element.id;
            vaznObj.vazn = {kilo: '', geram: ''};

            this.vazns[element.id] = vaznObj;
        });
    },
    

    methods: {
        getVaznOfAnimalID(animal_id)
        {
            return this.vazns.find(element => element.animal_id == animal_id);
        },

        createVazns()
        {
            const objToBeCreated = {
                vazns_array: JSON.stringify(this.vazns.filter(element => element != null)),
                tarikh: this.tarikh_of_vazn,
                tozihat: this.tozihat,
            };

            console.log(JSON.stringify(objToBeCreated));

            fetch('api/vaznkeshi/createVazns', {
                method: "post",
                body: JSON.stringify(objToBeCreated),
                headers: {
					'Accept': 'application/json',
					'content-type' : 'application/json'
				}
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                alert('وزن کشی ها با موفقیت ثبت شد.');
                this.$emit("submitSuccess");
            });
        },
    },
}
</script>