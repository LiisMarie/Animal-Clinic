<template>
    <div class="container-fluid" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 contact">
                    <ContactElement v-for="data in contactData"
                                   v-bind:header="data.header"
                                   v-bind:text="data.text"
                                   v-bind:picture_src="data.contact_picture_src" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.5774076445537!2d24.73460495184658!3d59.40676271176354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294c3e2c3fa53%3A0xc813254d16cc0b96!2sKaramelli%206%2C%2011317%20Tallinn!5e0!3m2!1sen!2see!4v1581776771741!5m2!1sen!2see"
                            height="300" style="border:0; width: 100%" allowfullscreen="" />
                </div>
                <ContactFormValidation />
            </div>
        </div>
    </div>
</template>

<script>
    import ContactElement from "../components/ContactElement";
    import ContactFormValidation from "../components/ContactFormValidation";

    export default {
        name: "Contact",
        data(){
            return{
                contactData: {}
            }
        },
        mounted() {
            fetch('api/contactdata.json')
                .then(response => response.json())
                .then(json => {
                    this.contactData = json.groups
                })
                .catch(err => console.error(err));
        },
        components: {
            ContactElement,
            ContactFormValidation
        }
    }
</script>