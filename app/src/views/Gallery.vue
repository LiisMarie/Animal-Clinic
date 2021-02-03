<template>
    <div class="container-fluid gallery">
        <div class="row">
            <GalleryPictureColumn first_pic_src="gallery1.jpg" second_pic_src="gallery5.jpg" />
            <GalleryPictureColumn first_pic_src="gallery2.jpg" second_pic_src="gallery8.jpg" />
            <GalleryPictureColumn first_pic_src="gallery3.jpg" second_pic_src="gallery7.jpg" />
            <GalleryPictureColumn first_pic_src="gallery4.jpg" second_pic_src="gallery6.jpg" />
        </div>
    </div>
</template>

<script>
    import GalleryPictureColumn from "../components/GalleryPictureColumn";

    export default {
        name: "Gallery",
        components: {
            GalleryPictureColumn
        }
    }
</script>