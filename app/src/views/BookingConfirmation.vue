<template>
    <div class="centered" v-if="bookingInitialized">
        <h2>Vastuvõtuaeg on edukalt broneeritud!</h2>
        <h5 style="padding-top: 20px">Ootame Teid {{date}} kell {{time}}</h5>
        <h5 style="padding-bottom: 20px">teenusele {{service}}</h5>
        <router-link to="/" class="btn btn__back">Mine pealehele</router-link>
    </div>
</template>

<script>
    export default {
        name: "BookingConfirmation",
        data() {
            return {
                date: this.$store.getters.bookeddate,
                time: this.$store.getters.bookedtime,
                service: this.$store.getters.bookedservice,
                bookingInitialized: this.$store.getters.bookeddate != null && this.$store.getters.bookedtime != null &&
                    this.$store.getters.bookedservice != null
            }
        }
    }
</script>

<style scoped lang="scss">
$primary-color: #008080;
$btn-hover: #006d6d;
$btn-active: #004a4a;

.centered {
    padding-top: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn__back {
    background-color: $primary-color;
    border-color: $primary-color;
    color: white;

    :hover {
        background-color: $btn-hover;
        border-color: $btn-hover;
    }

    :active {
        background-color: $btn-active;
        border-color: $btn-active;
    }
}
</style>