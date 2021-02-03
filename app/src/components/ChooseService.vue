<template>
    <div>
        <label for="selectService">Vali soovitud teenus</label>
        <select id="selectService" class="form-control" @change="selectedService">
            <option value="Vali teenus" selected="true" disabled="disabled">Vali teenus</option>
            <optgroup :label="group.label" v-for="group in groups">
                <option :value="option" v-for="option in group.options">{{option}}</option>
            </optgroup>
        </select>
    </div>
</template>

<script>
    export default {
        name: "ChooseService",
        props: {
            groups: {}
        },
        methods: {
            selectedService(){
                var e = document.getElementById("selectService");
                var text = e.options[e.selectedIndex].text;
                this.$store.commit('bookedservice', text);
            }
        }
    }
</script>