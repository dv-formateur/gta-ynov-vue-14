<template>
    <div>
        <b-row>
            <b-col md="12">
                <b-card
                        header-tag="header"
                        footer-tag="footer">
                    <div slot="header">
                        <strong> Dashboard</strong>
                        <div class="card-header-actions">
                            <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                                <small class="text-muted">docs</small>
                            </a>
                        </div>
                    </div>
                    <b-list-group>
                        <b-list-group-item>Contract start: {{ user.contractStart | moment("DD-MM-YYYY")}}</b-list-group-item>
                        <b-list-group-item v-if="user.contractEnd">Contract end: {{ user.contractEnd | moment("DD-MM-YYYY")}}</b-list-group-item>
                        <b-list-group-item>Vacation days available: {{ user.vacation }}</b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
        </b-row>
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