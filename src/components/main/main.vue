<template>
    <div class="layout">
        <Layout  style="height: 100%">
            <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="isCollapsed" style="overflow: hidden;">
                <img src="/flowerking.jpg" width="39%" v-show="!isCollapsed">
                <img src="/flowerking.jpg" width="90%" v-show="isCollapsed">
                <menu-list :collapsed="isCollapsed"></menu-list>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <Breadcrumb class="bread_crumb">
                        <BreadcrumbItem v-for="(item, index) in breadcrumb" :key="index" :to="item.link">{{item.name}}</BreadcrumbItem>
                        <!--<BreadcrumbItem to="/">Home</BreadcrumbItem>-->
                        <!--<BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>-->
                        <!--<BreadcrumbItem>Breadcrumb</BreadcrumbItem>-->
                    </Breadcrumb>
                    <div class="custom_con">
                        <div class="user_avatar">
                            <Dropdown  @on-click="handleClick">
                                <a href="javascript:void(0)">
                                    <Badge dot style="line-height: 32px;">
                                        <span class="avatar_box">
                                            <img :src="avatarImgPath" alt="">
                                        </span>
                                    </Badge>
                                    <Icon type="md-arrow-dropdown" />
                                </a>
                                <DropdownMenu slot="list">
                                    <Badge :count="3">
                                        <DropdownItem>待处理消息</DropdownItem>
                                    </Badge>
                                    <DropdownItem name="logout">退出</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </Header>
                <Content :style="{margin: '20px', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    import { Layout, Sider, Header, Breadcrumb, BreadcrumbItem, Content, Dropdown, DropdownMenu, DropdownItem, Icon, Badge } from 'iview';
    import MenuList from './menuList'
    export default {
        components: {
            MenuList,
            Layout, Sider, Header, Breadcrumb, BreadcrumbItem, Content, Dropdown, DropdownMenu, DropdownItem, Icon, Badge
        },
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            ...mapState(['userName', 'avatarImgPath', "breadcrumb"]),
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            }
        },
        methods: {
            ...mapActions(['handleLogout']),
            ...mapMutations(["setBreadcrumb"]),
            collapsedSider () {
                this.isCollapsed = !this.isCollapsed;
            },
            logout() {
                this.handleLogout().then(res => {
                    this.$router.push({name: 'login'})
                })
            },
            handleClick(name) {
                switch (name) {
                    case 'logout': this.logout()
                        break;
                    default: console.log('Dropdown点击错误')
                        break;
                }
            }
        },
        watch: {
            '$route'(newRoute) {
                console.log(999)
                this.setBreadcrumb(newRoute)
            }
        },
        mounted() {
            this.setBreadcrumb(this.$route)
        }
    }
</script>
<style lang="less">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        min-width: 1018px;
        .ivu-layout-sider{
            img{
                display: block;margin: 10px auto;
            }
            .ivu-layout-sider-children{
                overflow-y: scroll;
                margin-right: -18px;
            }
        }

    }
    .layout-header-bar{
        background: #fff !important;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }

    .bread_crumb{
        display: inline-block;
    }
    .custom_con{
        float: right;
        margin-right: 15px;
        div{
            float: right;
        }
    }
    .user_avatar{
        .ivu-badge{
            line-height: 32px;
        }
        .avatar_box{
            display: inline-block;
            width: 32px;
            height: 32px;
            img{
                width: 100%;
                height: 100%;
                vertical-align: middle;
                border-radius: 50%;
            }
        }
        i{
            font-size: 18px;
            color: #000;
        }
        .ivu-badge-count{
            right: 10px !important;
            top: -6px !important;
        }
    }

</style>
