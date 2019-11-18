<template>
    <div>
        '<p>The number is {{ number }}</p>',
    </div>
</template>

<script>
export default {
    name: 'DisplayNumber',
    data () {
        return {
            number: 0
        }
    },
    created() {
        setInterval(() => {
        this.number++;
        }, 1000);
    }
}
</script>
