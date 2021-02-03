<template>
    <div class="row">
        <img :src="resolve_img_url(picture_src)" class="gallery__picture">
    </div>
</template>

<script>
    export default {
        name: "GalleryPicture",
        props: {
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