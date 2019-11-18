<template>
    <div>
        <p>The number is <span :class="$style.number">{{ number }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'Module',
    data(){
        return {
            number: 7637387229181
        }
    }
}
</script>


<style module>
.number {
font-weight: bold;
}
</style>