<template>
    <div>
        <label>Prénom</label>
        <input type="text" v-model="user.firstName" />
        <label>Nom</label>
        <input type="text" v-model="user.lastName"/>
        <label>Date de naissance</label>
        <input type="date" v-model="user.birthDate"/>
        <label>Adresse</label>
        <input type="text" v-model="user.address"/>
        <label>Email</label>
        <input type="text" v-model="user.email"/>
        <input type="button" value="Button" v-on:click="submit()"/>
    </div>
</template>

<script>
export default {
    name: "Profile",
    created: function (){
        this.user = this.$root.getUserData(1);
    },
    data: function () {
        return {
            user: {}
        }
    },
    methods: {
        submit: function (){
            this.$root.setUserData(this.user.id, this.user.firstName, this.user.lastName, this.user.birthDate, this.user.address, this.user.email);
        }
    }

}
</script>

<style scoped>

</style>