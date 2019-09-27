<template>
    <div class="acr_post">
        <div class="title">
            <input type="text" maxlength="100" placeholder="输入文章标题">
            <span>0/100</span>
        </div>
        <div id="editor"></div>
        <div class="conf">
            <div class="conf_group">
                <label for="">文章标签：</label>
                <add-tag btn-name="添加标签">
                    <p>最多添加5个标签</p>
                </add-tag>
            </div>
            <div class="conf_group">
                <label for="">分类专栏：</label>
                <add-tag btn-name="添加新分类" :showCategory="true" :historyList="categoryList">
                    <p>最多添加3个标签</p>
                </add-tag>
            </div>
        </div>
        <div class="footer">
            <Button type="error" class="btn_style btn_publish" ghost @click="blogPublish">发布博客</Button>
            <Button type="error" class="btn_style btn_publish" ghost>保存为草稿</Button>
            <Button class="btn_style btn_back">返回</Button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import AddTag from '../../components/add-tag'
    import { Button } from 'iview'
    export default {
        components: {
            AddTag,
            Button
        },
        data() {
            return {
                editor: Object,
                btnName: '添加标签',
                categoryList: []
            }
        },
        methods: {
            blogPublish() {
                console.log(this.editor.txt.html())
            }
        },
        mounted() {
            this.editor = new E('#editor')
            this.editor.create()
        },
        created() {
            console.log(this.$route.matched)
        }
    }
</script>

<style lang="less" scoped>
    .title{
        width: 100%;
        background-color: #fff;
        height: 40px;
        margin-bottom: 30px;
        input{
            width: calc(100% - 50px);
            border: none;
            height: 40px;
            padding-left: 15px;
            outline: none;
        }
        span{
            display: inline-block;
            width: 50px;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }
    }
    .conf{
        padding: 30px 0;
        .conf_group{
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            label{
                width: 72px;
                flex: none;
                line-height: 32px;
            }
        }
    }
    .footer{
        padding: 10px 0 50px 50px;
        .btn_style{
            margin-left: 20px;
        }
        .btn_publish{
            &:hover{
                background: #C92027;
                color: #ffffff;
            }
        }
        .btn_back{
            &:hover{
                background: #6c757d;
                color: #ffffff;
                border: none;
            }
        }
    }
</style>
