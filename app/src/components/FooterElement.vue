<template>
    <div class="col-sm-4 footer__element">
        <div class="col">
            <img class="footer__icon" :src="resolve_img_url(picture_src)">
        </div>
        <div class="col">
            <h5 class="card-title footer__title">{{header}}</h5>
            <p class="card-text footer__text">{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterElement",
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