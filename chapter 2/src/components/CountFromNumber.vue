<template>
    <div>
        <p>The number is {{ localNumber }}</p>
    </div>
</template>

<script>
export default {
    name: 'CountFromNumber',
    data () {
        return {
            number: 20
        }
    },
    computed: {
        localNumber: {
            get() {
            return this.number;
            },
            set(value) {
            this.$emit('update:number', value);
            }
        }
    },
    mounted() {
        setInterval(() => {
        this.localNumber++;
        }, 1000);
    }
}
</script>
