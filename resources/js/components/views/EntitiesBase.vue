<template>
    <div>
        <div class="title">
            <h1>{{title}}</h1>
            <hr>
        </div>
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

<style lang="css" scoped>
    .title {
        padding: 1em;
        padding-bottom: 0;
    }

    hr {
        margin-bottom: 0;
    }
</style>