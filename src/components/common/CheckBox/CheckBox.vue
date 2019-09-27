<template>
    <label>
        <span class="outBox">
            <span class="s_check" :class="{'s_checked': currentValue}"></span>
            <input v-if="group" :value="label" v-model="model" type="checkbox"  @change="handleChange">
            <input v-else type="checkbox" :checked="checked" @change="handleChange">
        </span>
        <slot v-if="showSlot">{{ label }}</slot>
    </label>
</template>

<script>
    export default {
        name: "CheckBox",
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean,
            label: String,
            showSlot: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                group: true,
                model: [],
                currentValue: this.checked
            }
        },
        methods: {
            handleChange(event) {
                if(!this.group) {
                    this.$emit('change', event.target.checked)
                } else {
                    console.log(this.model)
                    this.$parent.change(this.model)
                }
            }
        },
        watch: {
            model(val) {
                this.currentValue = val.indexOf(this.label) >= 0
            }
        }
    }
</script>

<style lang="less" scoped>
    label{
        cursor: pointer;
        .outBox{
            display: inline-block;
            width: 14px;
            height: 14px;
            position: relative;
            line-height: 1;
            vertical-align: middle;
            .s_check{
                position: absolute;
                width: 100%;
                height: 100%;
                border: 1px solid #dcdee2;
                border-radius: 2px;
                background-color: #fff;
                display: inline-block;
                cursor: pointer;
                z-index: 1;

            }
            .s_checked{
                background-color: #2d8cf0;
                &:after{
                    content: '';
                    display: block;
                    position: absolute;
                    left: 4px;
                    top: 1px;
                    width: 4px;
                    height: 8px;
                    border: 2px solid #fff;
                    border-top: none;
                    border-left: none;
                    transform: rotate(45deg);
                }
            }
            input{
                /*-webkit-tap-highlight-color: transparent;*/
                /*-webkit-appearance: none;*/
                /*-moz-appearance: none;*/
                /*-webkit-border-radius: 0;*/
                vertical-align: middle;
                opacity: 0;
                &::-webkit-calendar-picker-indicator{
                    display: none;
                    -webkit-appearance: none;
                }
            }
        }
    }
</style>
