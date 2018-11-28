<template>
    <AppHeader fixed>
        <b-navbar toggleable="md">
            <b-navbar-toggle target="nav-bar"></b-navbar-toggle>
            <b-collapse is-nav id="nav-bar">

                <b-navbar-nav>
                    <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
                    <b-nav-item class="px-3" to="/profile">Profil</b-nav-item>
                    <b-nav-item class="px-3" to="/planning">Planning</b-nav-item>
                    <b-nav-item class="px-3" to="/arrangement">Arrangement de planning</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>{{ user.firstName }} {{ user.lastName }}</em>
                        </template>
                        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                        <b-dropdown-item to="">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </AppHeader>
    
</template>

<script>
import { Header as AppHeader } from '@coreui/vue'

export default {
    name: 'NavBar',
    created: function (){
        this.user = this.$root.getUserData(1)
    },
    data: function (){
        return {
            user: {}
        }
    },
    components: {
        AppHeader
    }
}
</script>

<style scoped>

</style>