<template>
    <div class="col-lg-3 col-sm-6 introduction">
        <img :src="resolve_img_url(picture_src)" class="introduction__picture" >
        <h2> {{header}}</h2>
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "HomeCard",
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