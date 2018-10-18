<template>
    <div>
        <img v-for="image in allImages" :src="image.link" alt="">
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:'ImageList',
    computed:mapGetters(['allImages']),
    methods:mapActions(['fetchImages']),
    created(){
        this.fetchImages();
    }
}
</script>
