<template>
    <div  class="dropper">
        <input type="file" 
        @change="uploadImages($event.target.files)" 
        multiple 
        accept="image/*"
        />
        <h1>Drag files here to upload!</h1>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name:'UploadForm',
    methods: mapActions(['uploadImages'])
};
</script>
<style scoped>
    .dropper{
        height: 30vh;
        border-radius: 5px;
        border: 3px dotted darkgray;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dropper:hover{
        background-color: #eee;
    }
    input{
        opacity: 0;
        width: 100%;
        height: 30vh;
        position: absolute;
    }
</style>

