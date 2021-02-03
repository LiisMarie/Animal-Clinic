<template>
    <button :id="time" v-on:click="selectedTime">{{time}}</button>
</template>

<script>
    export default {
        name: "ChooseTime",
        props: {
            time: String
        },
        methods: {
            selectedTime(){
                const prev = this.$store.getters.bookedtime;
                if (prev != null) {
                    document.getElementById(prev).style.background="#008080";
                }
                document.getElementById(this.time).style.background="#004a4a";
                this.$store.commit('bookedtime', this.time);
            }
        }
    }
</script>