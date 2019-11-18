<template>
    <div>
        <h2>This is the Settings Page</h2>
        <side-bar/>
        <router-view/>  
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
    name:'Settings',
    components: {
        SideBar
    }
}
</script>

