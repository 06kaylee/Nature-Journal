<template>
    <div class="content">
        <div class="columns">
            <div class="column">
                <h1 class="detail-title">{{ log.item_name }}</h1>
                <div class="columns is-centered">
                    <div class="column is-6 p-col">
                        <p>
                            <strong>Type: </strong>
                            {{ log.item_type }}
                        </p>
                        <p>
                            <strong>Unique Features: </strong>
                            {{ log.unique_features }}
                        </p>
                        <p>
                            <strong>Notes: </strong>
                            {{ log.notes }}
                        </p>
                        <p>
                            <strong>Status: </strong>
                            {{ log.status }}
                        </p>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import LogDataService from '../services/LogDataService';

export default {
    name: 'LogSingle',
    data() {
        return {
            log: {}
        }
    },
    methods: {
        getLog(id) {
            LogDataService.get(id)
                .then(res => {
                    console.log(res.data);
                    this.log = res.data;
                })
                .catch(err => {
                    console.log(`Error retrieving log for view page: ${err}`);
                })
        }
    },
    mounted() {
        this.getLog(this.$route.params.id);
    },
}
</script>

<style scoped>
    .p-col {
        max-width: 600px;
        text-align: left;
        margin-top: 2em;
    }

    .detail-title {
        margin-top: 1em;
    }
</style>