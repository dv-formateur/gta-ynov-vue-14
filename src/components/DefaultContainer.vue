<template>
    <div class="app">
        <AppHeader fixed>
            <b-navbar-nav class="d-md-down-none">
                <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
                <b-nav-item class="px-3" to="/profile">Profile</b-nav-item>
                <b-nav-item class="px-3" to="/planning">Planning</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="d-md-down-none">
                    <i class="icon-list"></i>
                </b-nav-item>
                <b-nav-item class="d-md-down-none">
                    <i class="icon-location-pin"></i>
                </b-nav-item>
            </b-navbar-nav>
            <!--<AsideToggler class="d-lg-none" mobile />-->
        </AppHeader>
        <div class="app-body">
            <main class="main">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { Header as AppHeader } from '@coreui/vue'

export default {
    name: 'DefaultContainer',
    components: {
        AppHeader
    },
    computed: {
        name () {
            return this.$route.name
        }
    }
}
</script>
