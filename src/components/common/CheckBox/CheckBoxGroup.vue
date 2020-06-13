<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CheckBoxGroup",
        props: {
            value: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentValue: this.value,
                childrens: []
            }
        },
        methods: {
            change(data) {
                this.$emit('input', data)
            },
            findComponentsDownward (context, componentName) {
                return context.$children.reduce((components, child) => {
                    if (child.$options.name === componentName) components.push(child);
                    const foundChilds = this.findComponentsDownward(child, componentName);
                    return components.concat(foundChilds);
                }, []);
            },
            updateModel() {
                this.childrens = this.findComponentsDownward(this, 'CheckBox')
                this.childrens.forEach(child => {
                    child.model = this.value
                })
            }
        },
        watch: {
            value() {
                this.updateModel()
            }
        }
    }
</script>

<style scoped>

</style>
