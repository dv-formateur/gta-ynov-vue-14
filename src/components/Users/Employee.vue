<template>
    <div>
        <h1>Bonjour {{  }}</h1>

        <Planning></Planning>

    </div>
</template>

<script>

import Planning from '../Planning.vue';
import 'fullcalendar/dist/fullcalendar.css'

export default{
    name: 'Employee',
    props:{

    },components: {
        Planning
    }
}
</script>
