<template>
    <div>
        <input type="text" :value="value" @input="handleInput">
    </div>
</template>

<script>
export default {
    name: 'InputUsername',
    methods: {
        handleInput(e) {
            const value = e.target.value.toLowerCase();
            // If value was changed, update it on the input too
            if (value !== e.target.value) {
            e.target.value = value;
            }
            this.$emit('input', value);
        }
    }
}
</script>
