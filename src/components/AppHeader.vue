<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="item active">Image Storage</a>
        <div class="right menu">
            <a href="#" class="ui item" @click="login"> login</a>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name:'AppHeader',
    methods: mapActions(['login'])
    
}
</script>
