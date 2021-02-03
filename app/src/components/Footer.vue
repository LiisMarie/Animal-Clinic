<template>
    <footer class="footer mt-auto py-3" id="footer">
        <div class="row">
            <FooterElement v-for="data in contactData"
                           v-bind:header="data.header"
                           v-bind:text="data.text"
                           v-bind:picture_src="data.footer_picture_src" />
        </div>
    </footer>
</template>

<script>
    import FooterElement from '@/components/FooterElement.vue'

    export default {
        name: "Footer",
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
            FooterElement
        }
    }
</script>

<style src="../assets/css/components/footer.css" />