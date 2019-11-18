<template>
    <div>
        <p>The number is <span :class="number">{{ number }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'Preprocessors',
    data(){
        return {
            number: 987662282834455646264
        }
    }
}
</script>


<style lang="scss" scoped>
$color: red;
.number {
font-weight: bold;
color: $color;
}
</style>