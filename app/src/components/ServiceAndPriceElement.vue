<template>
    <div class="col">
        <h4 class="pricelist__header-service"> {{title}} </h4>
        <table  class="pricelist__tablepress" v-for="serviceWithPrice in serviceswithprices">
            <tr class="pricelist__row-hover">
                <td class="pricelist__column-1">{{serviceWithPrice.service}}</td><td class="pricelist__column-2">{{serviceWithPrice.price}}</td>
            </tr>
        </table>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "ServiceAndPriceElement.vue",
        props: {
            title: String,
            serviceswithprices: {
                service: String,
                price: String
            }
        }
    }
</script>