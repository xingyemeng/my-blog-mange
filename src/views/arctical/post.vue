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
                <add-tag btn-name="添加新分类">
                    <p>最多添加3个标签</p>
                </add-tag>
            </div>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import AddTag from '../../components/add-tag'
    export default {
        components: {
            AddTag
        },
        data() {
            return {
                btnName: '添加标签'
            }
        },
        methods: {

        },
        mounted() {
            let editor = new E('#editor')
            editor.create()
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

</style>
