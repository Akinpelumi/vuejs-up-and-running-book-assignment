<template>
    <div>
         <p :style="{ backgroundColor: color }"><slot></slot></p>
    </div>
</template>

<script>
const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 75%, 85%)`;
export default {
    name: 'Demokey',
    data () {
        return {
            color: randomColor()
        }
    }
}
</script>
