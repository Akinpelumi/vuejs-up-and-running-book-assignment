<template>
    <div>
        <aside>
            <ul>
                <router-link to='/profile'><li>Profile</li></router-link>
                <router-link to='/email'><li>Email</li></router-link>
            </ul>
        </aside>
    </div>
</template>

<script>

export default {
    name: 'SideBar',

}
</script>

<style scoped>
ul {
    list-style: none
}
aside {
    text-align: left;
}
li {
    margin-top: 40px;
    color: blue;
}
</style>


