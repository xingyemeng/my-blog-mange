<template>
    <div class="tagbox">
        <div class="txtbox">
            <template v-if="tags.length > 0">
                <div class="tag" v-for="(tag, index) in tags" :key="index">
                    <span class="tagSpan" contenteditable="true" @blur="addTag" v-text="tag"></span>
                    <Icon type="md-close" @click="removeTag(index)" />
                </div>
            </template>
            <button @click="showTag"><Icon type="md-add-circle" />{{ btnName }}</button>
        </div>
        <div class="tips">
            <slot></slot>
        </div>
        <div v-if="showCategory" class="categoryList">
            <check-box-group v-model="arr">
                <div class="categoryItem" v-for="(category, index) in categoryList" :key="index">
                    <check-box  :label="category"></check-box>
                </div>
            </check-box-group>
        </div>
    </div>
</template>

<script>
    import CheckBox from '@/components/common/CheckBox'
    import CheckBoxGroup from '@/components/common/CheckBoxGroup'
    import { Icon, Checkbox, CheckboxGroup } from 'iview'
    export default {
        name: 'checkbox',
        components: {
            CheckBox,
            Icon,
            CheckboxGroup,
            Checkbox,
            CheckBoxGroup
        },
        props: {
            'btn-name': {
                type: String
            },
            showCategory: {
                type: Boolean,
                default: false
            },
            historyList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                arcTitle: '', // 文章标题
                isAddTag: false, // 初始隐藏文章标签输入框
                tags: [], // 文章标签
                maxTags: 5,  // 最大标签数
                checkAllGroup: [],
                categoryList: ['php', 'nodejs', 'javascript'],
                choosedCategroies: [],
                single: false,
                lovingVue: true,
                arr: this.historyList
            }
        },
        methods: {
            showTag() {
                // 显示添加一个标签的输入框
                if(this.tags.length < this.maxTags) {
                    if(this.tags.length === 0) {
                        this.tags.push('')
                        this.isAddTag = true
                    } else {
                        if(this.tags.indexOf('') > -1) {
                            this.tags.splice(this.tags.indexOf(''), 1)
                        } else {
                            this.tags.push('')
                            this.isAddTag = true
                        }
                    }
                    this.$nextTick(() => {
                        let ele = document.getElementsByClassName('tagSpan')[this.tags.length - 1]
                        if(ele) {
                            ele.focus()
                        }
                    })
                }
            },
            addTag(event) {
                // 当span失去焦点时触发，添加标签到数组
                if(this.isAddTag) {
                    let newTag = event.target.innerText
                    if(newTag !== ''){
                        if(this.tags.indexOf(newTag) >= 0) {
                            this.tags.splice(this.tags.indexOf(''), 1)
                        } else {
                            this.tags.push(newTag.substr(0,30))
                            this.isAddTag = false
                        }

                    }
                    if(this.tags.indexOf('') > -1) {
                        this.tags.splice(this.tags.indexOf(''), 1)
                    }
                } else {
                    // 这是修改标签后,要检查去重

                }

            },
            removeTag(index) {
                this.tags.splice(index, 1)
            }
        },
        watch: {
            arr(val) {
                if(this.showCategory) {
                    this.tags = val
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .tagbox{
        .txtbox{
            display: flex;
            flex-wrap: wrap;
            max-width: 600px;
            min-height: 32px;
            .tag{
                display: flex;
                min-height: 32px;
                align-items: center;
                i{
                    margin-left: 4px;
                    font-size: 20px;
                    color: #ddd;
                    transition: color 0.3s ease-in;
                    vertical-align: middle;
                    cursor: pointer;
                }
                span{
                    display: block;
                    padding: 3px 8px;
                    font-size: 12px;
                    max-width: 480px;
                    background: #e9e9e9;
                    border-radius: 2px;
                    line-height: 15px;
                    height: 21px;
                    color: #4d4d4d;
                    overflow: hidden;
                    white-space: nowrap;
                    box-sizing: border-box;
                    outline: none;
                }
            }
            button{
                color: #349EDF;
                cursor: pointer;
                border: none;
                background: none;
                outline: none;

                i{
                    vertical-align: -3px;
                    font-size: 18px;
                }
            }
        }
        .tips{
            margin-top: 15px;
        }
        .categoryList{
            width: 480px;
            background: #fff;
            padding: 15px 20px;
            margin-top: 20px;
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            .categoryItem{
                width: 200px;
                float: left;
                list-style: none;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                .categoryTxt{
                    margin-left: 8px;
                }
            }
        }
    }
</style>
