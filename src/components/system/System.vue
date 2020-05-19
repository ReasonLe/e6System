<template>
	<div class="alux">
		<div class="topbar clearfix" :style="{width:sw}">
			<div class="syslogo"></div>| 数字化运营系统
			<div class="grow"></div>
			<div class="user">
				{{curUser}}
				<img src="../../assets/imgs/system/down.png">
				<div class="settings" @click="logout">登出账号</div>
			</div>
		</div>
		<div class="bgr" :style="{width:sw}" ref="bgr">
			<div class="asidebar" :style="{minHeight:asideHeight+'px'}">
				<router-link 
					v-if="authority == 0"
					to="/system/platforms">平台分类
				</router-link>
				<router-link to="/system/devices">设备总览</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Platforms from "./platforms/Platforms.vue"
	import Devices from "./Devices.vue"
	export default {
		name: 'System',
		components:{
			Platforms,
			Devices
		},
		data() {
			return {
				curUser: localStorage.curUser,
				authority: localStorage.authority,
				sw: screen.width+'px',
				asideHeight: ''
			}
		},
		mounted() {
			this.asideHeight = this.$refs.bgr.offsetHeight-50
		},
		methods: {
			logout() {
				localStorage.isLogedIn = false
				localStorage.curUser = ''
				localStorage.authority = null
				this.$router.push('/signin')
			}
		}
	}
</script>

<style scoped>
	.alux {
		width: 100%;
		height: 100%;
		font-family: "microsoft yahei";
	}
	.topbar {
		background-color: #2e3642;
		line-height: 50px;
		color: #f2f2f3;
		font-size: 16px;
		position: relative;
		z-index: 1;
		display: flex;
		min-width: 1020px;
	}
	.grow {
		flex-grow: 1;
	}
	.syslogo {
		width: 119px;
		height: 34px;
		background-image: url(../../assets/imgs/login/loginlogo.png);
		background-size: 100% 100%;
		margin: 8px 10px 8px 14px;
	}
	.user {
		background-color: #3c4655;
		padding: 0 12px;
		font-size: 12px;
		color: #797e87;
		position: relative;
		cursor: pointer;
	}
	.user:hover .settings {
		display: block;
	}
	.user>img {
		margin-left: 10px;
		cursor: pointer;
	}
	.user>.settings {
		width: 200%;
		line-height: 50px;
		position: absolute;
		right: 0;
		background-color: #353e4c;
		color: #fff;
		text-align: center;
		display: none;
	}
	.bgr {
		display: flex;
		min-height: 100%;
		box-sizing: border-box;
		padding-top: 50px;
		position: relative;
		top: -50px;
	}
	.asidebar {
		background-color: #353e4c;
	}
	.asidebar>a {
		display: block;
		text-decoration: none;
		height: 38px;
		line-height: 38px;
		font-size: 12px;
		color: #9ca0a4;
		min-width: 155px;
		width: 155px;
		padding-left: 45px;
	}
	a.active {
		background-color: #31b2ea;
		color: #fff;
	}
	
</style>