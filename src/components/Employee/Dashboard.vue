<template>
    <div>
        <p>Date contrat: {{ user.contractStart | moment("dddd, MMMM Do YYYY")}}</p>
        <p v-if="user.contractEnd">Date de fin de contrat: {{ user.contractEnd | moment("dddd, MMMM Do YYYY")}}</p>
        <p>Solde de Congés: {{ user.holiday }}</p>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        created: function () {
            this.user = this.$root.getUserData(1);
        },
        data: function () {
            return {
                user: {}
            }
        }

    }
</script>

<style scoped>

</style>