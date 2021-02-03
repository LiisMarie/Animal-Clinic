<template>
    <div class="col-lg-6" style="padding-top: 30px;">
            <h4>Arstile küsimuse esitamiseks täitke järgnev vorm</h4>
            <form @submit.prevent="submitForm">
                <div class="form-row" style="padding-top: 15px">
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
                    <label>Kirjutage teade</label>
                    <input type="text" class="form-control"
                           v-model.trim="$v.comment.$model" :class="{
                               'is-invalid':$v.comment.$error, 'is-valid':!$v.comment.$invalid
                           }">
                    <div class="valid-feedback">Korras!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.comment.required">Teate sisestamine on kohustuslik</span>
                        <span v-if="!$v.comment.minLength">Teade peab sisaldama vähemalt {{$v.comment.$params.minLength.min}} tähte</span>
                        <span v-if="!$v.comment.maxLength">Teade peab sisaldama vähem kui {{$v.comment.$params.maxLength.max}} tähte</span>
                    </div>
                </div>
                <button type="submit" class="btn btn__saada-teade">Saatke teade</button>
            </form>
    </div>
</template>

<script>
    import { required, minLength, maxLength, email} from 'vuelidate/lib/validators'

    export default {
        name: 'ContactFormValidation',
        data() {
            return {
                name: '',
                comment: '',
                email: '',
                phone: ''
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(50)
            },
            comment: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(1000)
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
               if (!this.$v.$invalid) {
                   alert("Teade saadetud!");
                   this.name = '';
                   this.comment = '';
                   this.email = '';
                   this.phone = '';
                   this.$v.$reset();
               }
            }
        }
    };
</script>

<style scoped lang="scss">
    $primary-color: #008080;
    $btn-hover: #006d6d;
    $btn-active: #004a4a;

    .btn__saada-teade {
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