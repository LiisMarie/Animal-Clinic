<template>
    <div class="col contact__col">
        <div class="row">
            <div class="col">
                <img class="contact__icon" :src="resolve_img_url(picture_src)">
                <h5 class="card-title">{{header}}</h5>
                <p class="card-text">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactElement",
        props: {
            header: String,
            text: String,
            picture_src: String
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/img/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            }
        }
    }
</script>