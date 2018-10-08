<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="item active">Image Storage</a>
        <div class="right menu">
            <div v-if="isLoggedIn"  class="horizontal">
                <a href="" class="item">Gallery</a>
                <a href="" class="item">Upload</a>
                <a href="" class="item">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login"> login</a>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login'])
    
}
</script>
<style scoped>
.horizontal{
    display: flex;
    flex-direction: row;
}
</style>

