<template>
    <div class="container-fluid booking" id="booking-container">
        <h1>Broneeri aeg</h1>
        <br>
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <ChooseService id="chooseService" :groups="groups" />
                <div class="row">
                    <div class="col" id="chooseDateGroup" style="padding-bottom: 30px; visibility: hidden" >
                        <br>
                        Vali sobiv kuupäev
                        <DatePicker ref="picker" v-on:change-date="changeDate" />
                    </div>
                    <div class="col" id="chooseTimeGroup" style="visibility: hidden">
                        <br>
                        <div>Vali sobiv kellaaeg</div>
                        <div id="chooseTime" class="btn-group-vertical btn-group-vertical__time" style="padding-top: 20px">
                            <ChooseTime v-for="time in availableTimes"
                                        :time="time.time" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12" id="contactData" style="visibility: hidden">
                <BookingFormValidation />
            </div>
        </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex'

    import ChooseTime from "../components/ChooseTime";
    import ChooseService from "../components/ChooseService";
    import BookingFormValidation from "../components/BookingFormValidation";
    import DatePicker from "../components/DatePicker";

    export default {
        name: "Booking",
        data() {
            return {
                availableTimes: [],
                groups: [],
                date: null
            }
        },
        methods: {
            changeDate: function () {
                let temp = this.$refs.picker.selectedDate;
                let month = temp.getMonth() + 1;
                this.date = temp.getDate() + "." + month + '.' + temp.getFullYear();

                document.getElementById("chooseTimeGroup").style.visibility = 'visible';

                const prev = this.$store.getters.bookedtime;
                if (prev != null) {
                    document.getElementById(prev).style.background="#008080";
                    this.$store.commit('bookedtime', null);
                }
                this.$store.commit('bookeddate', this.date);
            }
        },
        mounted() {
            fetch('api/bookingTime.json')
                .then(response => response.json())
                .then(json => {
                    this.availableTimes = json.times;
                    this.$store.commit('bookeddate', null);
                    this.$store.commit('bookedtime', null);
                    this.$store.commit('bookedservice', null);
                })
                .catch(err => console.error(err));
            fetch('api/bookingServices.json')
                .then(response => response.json())
                .then(json => {
                    this.groups = json.groups;
                })
                .catch(err => console.error(err));

            this.$store.watch(  // watcher for booked service
                function (state) {
                    return state.bookedservice;
                },
                function () {
                    document.getElementById("chooseDateGroup").style.visibility = 'visible';
                },
                {
                    deep: true
                }
            );

            this.$store.watch(  // watcher for booked time
                function (state) {
                    return state.bookedtime;
                },
                function () {
                    document.getElementById("contactData").style.visibility = 'visible';
                },
                {
                    deep: true
                }
            );
        },
        computed: {
            ...mapGetters({
                myState: 'getMyState'
            })
        },

        components: {
            ChooseTime,
            ChooseService,
            BookingFormValidation,
            DatePicker
        }
    }
</script>

<style lang="scss">
    .vc-highlight.vc-rounded-full.vc-bg-blue-600 {
        background-color: #008080!important;
    }
</style>