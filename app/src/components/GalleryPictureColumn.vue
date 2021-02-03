<template>
    <div class="col-lg-3 col-sm-6">
        <GalleryPicture v-bind:picture_src="first_pic_src" />
        <GalleryPicture v-bind:picture_src="second_pic_src" />
    </div>
</template>

<script>
    import GalleryPicture from "./GalleryPicture";

    export default {
        name: "GalleryPictureColumn",
        props: {
            first_pic_src: String,
            second_pic_src: String
        },
        components: {
            GalleryPicture
        }
    }
</script>