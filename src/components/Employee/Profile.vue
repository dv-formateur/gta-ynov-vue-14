<template>
    <b-row>
        <b-col md="12">
            <b-card>
                <div slot="header">
                    <strong>Informations personnelles</strong>
                </div>
                <b-form>
                    <b-form-group
                            label="Prénom"
                            label-for="basicFirstName"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicFirstName" type="text" autocomplete="firstName" v-model="user.firstName"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Nom"
                            label-for="basicName"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicName" type="text" autocomplete="name" v-model="user.lastName"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Date de naissance"
                            label-for="date"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input type="date" id="date" v-model="user.birthDate"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Adresse"
                            label-for="basicAddress"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicAddress" type="text" aut v-model="user.address"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Email"
                            label-for="basicEmail"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicEmail" type="email" autocomplete="email" v-model="user.email"></b-form-input>
                    </b-form-group> <!--
                    <b-form-group
                            label="Mot de passe"
                            label-for="basicPassword"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicPassword" type="password" placeholder="Entrez votre ancien mot de passe" autocomplete="current-password" v-model="oldPassword"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Nouveau mot de passe"
                            label-for="basicPassword"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicPassword" type="password" placeholder="Entrez votre nouveau mot de passe" autocomplete="current-password" v-model="newPassword"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Nouveau mot de passe"
                            label-for="basicPassword"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicPassword" type="password" placeholder="Confirmez votre nouveau mot de passe" autocomplete="current-password" v-model="confirmPassword"></b-form-input>
                    </b-form-group> -->
                    <div slot="footer">
                        <b-button type="submit" size="md" variant="primary" v-on:click="submit"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                    </div>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "Profile",
    created: function (){
        this.user = this.$root.getUserData(1);
    },
    data: function () {
        return {
            user: {},
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        }
    },
    methods: {
        submit: function (){
            this.$root.setUserData(this.user.id, this.user.firstName, this.user.lastName, this.user.birthDate, this.user.address, this.user.email);
            if (this.oldPassword !== "") {
                //this.$root.setNewPassword(this.oldPassword, this.newPassword, this.confirmPassword);
            }
        }
    }

}
</script>

<style scoped>

</style>