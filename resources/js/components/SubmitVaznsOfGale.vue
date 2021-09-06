<template>
    <div class="w-100">
        <h4>ثبت وزن کشی برای دام های گله {{ gale.name }}</h4>

        <form action="#">
            <div>
                <label for="tarikh">انتخاب تاریخ وزن کشی:</label>
                <input type="date" name="tarikh" id="tarikh" />
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
                                v-model="vazns[animal.id].vazn[0]"
                                >
                                <label :for="'kilo'+animal.id">کیلو</label>
                            </td>
                            <td>
                                <input type="number" :name="'geram'+animal.id" :id="'geram'+animal.id" min="0"
                                v-if="vazns.length"
                                v-model="vazns[animal.id].vazn[1]"
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
        const vazn_keys = Object.keys(this.gale.animals[0].vazns[0]);

        this.gale.animals.forEach(element => {

            let vaznObj = {};
            vazn_keys.forEach(key => {
                vaznObj[key] = '';
            });

            this.vazns[element.id] = vaznObj;
        });
    },
    

    methods: {
        getVaznOfAnimalID(animal_id)
        {
            return this.vazns.find(element => element.animal_id == animal_id);
        }
    },
}
</script>