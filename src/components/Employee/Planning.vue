<template>
    <div>
        <full-calendar :events="user.planning"></full-calendar>
    </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'


export default {
    name: "Planning",
    created: function (){
        this.user = this.$root.getUserData(1)
    },
    data: function () {
        return{
            user: {}
        }
    },
    components: [
        FullCalendar
    ]
}

</script>

<style scoped>

</style>