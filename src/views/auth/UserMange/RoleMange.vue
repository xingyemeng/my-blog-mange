<template>
    <div>
        <p>token: {{ token }}</p>
        <p @click="test">添加用户角色测试</p>
    </div>
</template>

<script>
import { Button, Table } from 'view-design'
import { mapState } from 'vuex'
import { addUserRoles } from '@/api/user.js'
export default {
    name: "RoleMange",
    components: {

    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
        test () {
            addUserRoles(this.token).then(res => {
                alert(res)
            }).catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
