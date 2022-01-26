<template>
    <div>
        <h1>{{title}}</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'EntitiesBase',

    props: {
        title: {
           type: String,
           default: "",
        },
    },
}
</script>