<template>
	<div class="bg clearfix">
		<div class="container">
			<div class="logo"></div>
			<div class="desc"></div>
			<div class="warn" :style="{opacity:isWrong?'1':'0'}">
				<img src="../../assets/imgs/login/warn.png"> {{warn}}
			</div>
			<form action="" class="loginForm">
				<div class="username">
					<img src="../../assets/imgs/login/username.png"><input type="text" v-model="username" placeholder="请输入用户名">
				</div>
				<div class="password">
					<img src="../../assets/imgs/login/password.png"><input type="password" v-model="password" placeholder="请输入密码">
				</div>
				<button type="submit" @click.prevent="signIn" class="submit">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				username:'',
				password:'',
				isWrong:false,
				warn: null
			}
		},
		methods:{
			signIn() {
				if (!this.username | !this.password) {
					if (!this.username && this.password) {
						this.warn = "请输入账号"
						this.isWrong = true
					} else if (!this.password && this.username) {
						this.warn = "请输入密码"
						this.isWrong = true
					} else if (!this.username && !this.password) {
						this.warn = "请输入账号和密码"
						this.isWrong = true
					}
					return
				}
				let user = this.$store.state.users[this.username]
				if (user) {
					if (user['password'] === this.password) {
						localStorage.isLogedIn = true
						localStorage.curUser = this.username
						localStorage.authority = user['authority']
						this.isWrong = false
						this.$router.push('/system')
					} else {
						this.warn = "账号或密码输入错误"
						this.isWrong = true
					}
				} else {
					this.warn = "账号或密码输入错误"
					this.isWrong = true
				}
			}
		}
	}
</script>

<style scoped>
	.bg {
		width: 100%;
		height: 100%;
		background-image: url(../../assets/imgs/login/bg.jpg);
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container {
		width: 362px;
	}
	.logo {
		width: 187px;
		height: 50px;
		background-image: url(../../assets/imgs/login/loginlogo.png);
		background-size: 100% 100%;
		margin: 0 auto;
	}
	.desc {
		width: 168px;
		height: 24px;
		background-image: url(../../assets/imgs/login/desc.png);
		background-size: 100% 100%;
		margin: 33px auto 69px;
	}
	.loginForm {
		width: 100%;
		margin: 0 auto;
	}
	.loginForm input {
		outline: none;
		border: none;
		width: 312px;
		height: 49px;
	}
	.submit {
		background-color: #31b2ea;
		color: #fff;
		height: 61px;
		line-height: 61px;
		font-size: 24px;
		font-family: "microsoft yahei";
		text-align: center;
		cursor: pointer;
		border: none;
		width: 100%;
	}
	.username,.password {
		position: relative;
		width: 100%;
		background-color: #fff;
	}
	.username {
		margin-bottom: 20px;
	}
	.password {
		margin-bottom: 37px;
	}
	.username>img {
		padding: 0 15px;
	}
	.password>img {
		padding: 0 16.5px ;
	}
	.warn {
		color: red;
		font-size: 14px;
		font-family: "microsoft yahei";
		line-height: 14px;
		margin: 10px 0;
		transition: .2s;
	}
	.warn>img {
		vertical-align: top;
	}
	input::-webkit-input-placeholder {
		font-family: "microsoft yahei";
		font-size: 15px;
	}
	input::-moz-placeholder {
		font-family: "microsoft yahei";
		font-size: 15px;
	}
	input::-ms-input-placeholder {
		font-family: "microsoft yahei";
		font-size: 15px;
	}
</style>