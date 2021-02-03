<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="form-row">
                <label>Teie nimi</label>
                <input type="text" class="form-control"
                       v-model.trim="$v.name.$model" :class="{
                               'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid
                           }">
                <div class="valid-feedback">Korras!</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.name.required">Nime sisestamine on kohustuslik</span>
                    <span v-if="!$v.name.minLength">Nimi peab sisaldama vähemalt {{$v.name.$params.minLength.min}} tähte</span>
                    <span v-if="!$v.name.maxLength">Nimi peab sisaldama vähem kui {{$v.name.$params.maxLength.max}} tähte</span>
                </div>
            </div>
            <div class="form-row" style="padding-top: 15px">
                <label>Telefoni number (suunakoodiga)</label>
                <input type="text" class="form-control"
                       v-model.trim="$v.phone.$model" :class="{
                               'is-invalid':$v.phone.$error, 'is-valid':!$v.phone.$invalid
                           }">
                <div class="valid-feedback">Korras!</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.phone.required">Telefoni numbri sisestamine on kohustuslik</span>
                    <span v-if="!$v.phone.isCorrect"> Sisestatud telefoni number ei ole korrektne</span>
                </div>
            </div>
            <div class="form-row" style="padding-top: 15px">
                <label>E-post</label>
                <input type="email" class="form-control"
                       v-model.trim="$v.email.$model" :class="{
                               'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid
                           }">
                <div class="valid-feedback">Korras!</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.email.required">E-posti sisestamine on kohustuslik</span>
                    <span v-if="!$v.email.email">E-post ei ole korrektne </span>
                </div>
            </div>
            <div class="form-row" style="padding-top: 15px; padding-bottom: 20px">
                <label>Kommentaarid (vabatahtlik)</label>
                <input type="text" class="form-control">
            </div>
            <div class="alert alert-danger" role="alert" id="alert_time" style="display: none">
                Vastuvõtuaja broneerimiseks valige palun kellaaeg
            </div>
            <button type="submit" class="btn btn__action-broneeri-aeg">Broneeri aeg</button>
        </form>
    </div>
</template>

<script>
    import { required, minLength, maxLength, email} from 'vuelidate/lib/validators'

    export default {
        name: "BookingFormValidation",
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                submitstatus: null,
                date: null
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(50)
            },
            email: {
                required,
                email
            },
            phone: {
                required,
                isCorrect(value) {
                    if (value === '') return true;
                    // eslint-disable-next-line
                    let phone_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                    return new Promise((resolve => {
                        setTimeout(() => {
                            resolve(value.match(phone_regex))
                        })
                    }))
                }
            }
        },
        methods: {
            submitForm() {
                this.$v.$touch();
                if (!this.$v.$invalid && this.$store.getters.bookedtime != null &&
                    this.$store.getters.bookedservice != null && this.$store.getters.bookeddate != null) {
                    this.$router.push('/broneeringukinnitus')
                } else {
                    // all data hasn't been submitted
                    if (this.$store.getters.bookedtime != null) {
                        document.getElementById('alert_time').style.display = 'none';
                    } else {
                        document.getElementById('alert_time').style.display = 'block';
                    }
                }
            }
        }

    };
</script>

<style scoped lang="scss">
    $primary-color: #008080;
    $btn-hover: #006d6d;
    $btn-active: #004a4a;

    .btn__action-broneeri-aeg {
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