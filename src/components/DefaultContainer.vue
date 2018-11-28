<template>
    <div class="app">
        <NavBar></NavBar>
        <div class="app-body">
            <main class="main">
                <b-breadcrumb :items="items"/>
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import NavBar from './UI/NavBar';

export default {
    name: 'DefaultContainer',
    components: {
        NavBar
    },
    data: function() {

        return {
            items: this.$route.matched.filter((route) => route.name || route.meta.label )
        }
    }
}
</script>
