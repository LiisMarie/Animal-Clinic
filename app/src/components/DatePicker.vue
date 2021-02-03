<template>
    <!-- https://vcalendar.io/ -->
    <v-date-picker v-model='selectedDate'
                :min-date='new Date()'
                   :max-date='(new Date()).setMonth((new Date()).getMonth() + 2)'
                   is-inline
                   v-on:input="$emit('change-date')" />
</template>

<script>
    export default {
        name: "DatePicker",
        data() {
            return {
                selectedDate: null
            }
        }
    }
</script>