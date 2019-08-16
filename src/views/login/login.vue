<template>
    <div class="login">
        <div class="box">
            <div class="box_item">
                <label for="">用户名：</label>
                <Input prefix="ios-contact" placeholder="输入用户名" style="width: auto" v-model="user_name" clearable/>
            </div>
            <div class="box_item">
                <label for="">密&nbsp;&nbsp;&nbsp;码：</label>
                <Input type="password" prefix="ios-key" placeholder="输入密码" style="width: auto" v-model="password" clearable/>
            </div>
            <div class="box_item">
                <label for="">验证码：</label>
                <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" clearable/>
            </div>
            <div class="box_item">
                <Button type="primary" long @click="handleSubmit">登陆</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "login",
        data() {
            return {
                user_name: '',
                password: ''
            }
        },
        methods: {
            ...mapActions([
                'handleLogin'
            ]),
            handleSubmit() {
                if(this.user_name === '') {
                    alert('用户名不能为空！')
                    return
                }
                if(this.password === '') {
                    alert('密码不能为空！')
                    return
                }
                this.handleLogin({user_name: this.user_name, password: this.password}).then(res => {
                    if(res.status === 0) {
                        alert(res.msg)
                    } else {
                        alert(res.msg)
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .login{
        height: 100%;
        position: relative;
        .box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -80%);
            min-width: 240px;
            .box_item{
                margin: 20px 0;
            }
        }
    }
</style>
