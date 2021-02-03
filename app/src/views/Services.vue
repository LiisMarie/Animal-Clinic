<template>
    <div class="row" style="padding-top: 20px">
        <div class="col">
            <ServiceAndPriceElement v-for="data in servicesGroup1"
                                v-bind:title="data.title"
                                v-bind:serviceswithprices="data.serviceswithprices" />
        </div>
        <div class="col">
            <ServiceAndPriceElement v-for="data in servicesGroup2"
                                    v-bind:title="data.title"
                                    v-bind:serviceswithprices="data.serviceswithprices" />
        </div>
    </div>
</template>

<script>
    import ServiceAndPriceElement from '@/components/ServiceAndPriceElement.vue'

    export default {
        name: "Services",
        data(){
            return {
                servicesGroup1: {},
                servicesGroup2: {}
            }
        },
        mounted() {
            fetch('api/servicesWithPrices1.json')
                .then(response => response.json())
                .then(json => {
                    this.servicesGroup1 = json.groups
                })
                .catch(err => console.error(err));
            fetch('api/servicesWithPrices2.json')
                .then(response => response.json())
                .then(json => {
                    this.servicesGroup2 = json.groups
                })
                .catch(err => console.error(err));
        },
        components: {
            ServiceAndPriceElement
        }
    }
</script>