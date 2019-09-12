<template>
    <label>
        <input type="checkbox" :checked="checked" @change="handleChange">
        test
    </label>
</template>

<script>
    export default {
        name: "CheckBox",
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        methods: {
            handleChange(event) {
                this.$emit('change', event.target.checked)
            }
        }
    }
</script>

<style lang="less" scoped>
    input{
        /*-webkit-tap-highlight-color: transparent;*/
        /*-webkit-appearance: none;*/
        /*-moz-appearance: none;*/
        /*-webkit-border-radius: 0;*/
        &::-webkit-calendar-picker-indicator{
            display: none;
            -webkit-appearance: none;
        }
    }
</style>
