<template>
    <div>
        <full-calendar :events="events"></full-calendar>
    </div>
</template>

<script>

import data from '../data/users.json'

export default {
    name: "Planning.vue",
    data(){
        return {
            events: data[0]["planning"] + "," + data[1]["planning"]
        }
    }
}
</script>

<style scoped>


</style>