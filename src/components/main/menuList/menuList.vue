<template>
    <div class="menu_list">
        <Menu active-name="1-2" :open-names="['1']" theme="dark" width="auto" :class="menuitemClasses" v-show="!collapsed">
            <template v-for="(itemObj, index) in menuList">
                <Submenu v-if="itemObj.children" :name="index + 1" :key="index">
                    <template slot="title">
                        <Icon type="ios-analytics" />
                        {{ itemObj.name }}
                    </template>
                    <MenuItem :name="'1-'+ (index + 1)" v-for="(item, index) in itemObj.children" :key="index" ><router-link tag="span" :to="'/article/'+item.path">{{ item.name }}</router-link></MenuItem>
                </Submenu>
                <MenuItem v-else :name="index + 1" :key="index"><Icon type="ios-analytics" />{{ itemObj.name }}</MenuItem>
            </template>
        </Menu>
        <div v-show="collapsed">
            <div class="menu_item_c" v-for="(obj, index) in menuList" :key="index">
                <template v-if="obj.children">
                    <Dropdown placement="right-start" transfer style="width: 100%;">
                        <a href="javascript:void(0)" style="display: inline-block;width: 100%;color: #fff;text-align: center;padding: 6px 15px;">
                            <Icon type="ios-navigate" style="font-size: 20px;"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="(item, index) in obj.children" :key="index">{{ item }}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </template>
                <Tooltip v-else placement="right-start" :content="obj.name" transfer style="width: 100%;">
                    <a href="" style="display: inline-block;width: 100%;color: #fff;text-align: center;padding: 6px 15px;">
                        <Icon type="ios-navigate" style="font-size: 20px;"></Icon>
                    </a>
                </Tooltip>


                <!--<a href="" v-else>-->
                    <!--<Icon type="ios-navigate" style="color: #ffffff;font-size: 20px;"></Icon>-->
                <!--</a>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "menuList",
        props: ['collapsed'],
        data() {
            return {
                /*menuList: [
                    {
                        name: '用户管理'
                    },
                    {
                        name: '文章管理',
                        children: ['item1', 'item2', 'item3', 'item1', 'item2', 'item3']
                    },
                    {
                        name: '评论审核',
                        children: ['item1', 'item2', 'item3']
                    },
                    {
                        name: '评论审核',
                        children: ['item1', 'item2', 'item3']
                    },
                    {
                        name: '评论审核',
                        children: ['item1', 'item2', 'item3']
                    },
                    {
                        name: '评论审核',
                        children: ['item1', 'item2', 'item3']
                    },
                    {
                        name: '评论审核',
                        children: ['item1', 'item2', 'item3']
                    }
                ]*/
            }
        },
        computed: {
            ...mapGetters(['menuList']),
            menuitemClasses () {
                return [
                    'menu-item',
                    this.collapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style scoped>
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .menu_item_c{

    }
</style>
