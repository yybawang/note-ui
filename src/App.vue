<template>
	<div class="app">
		<header class="mdui-appbar mdui-appbar-fixed">
			<div class="mdui-toolbar mdui-color-theme">
				<span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i
						class="mdui-icon material-icons">menu</i></span>
				<a href="/" class="mdui-typo-headline mdui-hidden-xs">NOTE</a>
			</div>
		</header>
		<div class="layout" style="padding-top:64px;">
			<div class="left">
				<ul class="mdui-list category">
					<li class="mdui-list-item mdui-ripple" @click="toggleActive" v-for="(val,key) of categories">
						<i class="mdui-list-item-icon mdui-icon material-icons">home</i>
						<div class="mdui-list-item-content mdui-text-truncate" @click="getPosts(val.ID)" :title="val.Name" v-text="val.Name"></div>
					</li>
				</ul>
				<div class="middle">
					<div class="middle-position">
						<ul class="mdui-list post">
							<li class="mdui-list-item mdui-ripple" @click="toggleActive" v-for="(val,key) of posts">
								<i class="mdui-list-item-icon mdui-icon material-icons">home</i>
								<div class="mdui-list-item-content mdui-text-truncate" @click="getDetail(val.Content)" :title="val.Name" v-text="val.Name"></div>
							</li>
						</ul>
						<div class="right">
							<div class="content">
								<div id="editor1" class="toolbar mdui-color-grey-100"></div>
								<div id="editor2" class="text" style="width:100%;min-height:100%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	const E = require("wangeditor");
	
	export default {
		data(){
			return {
				categories : [],
				posts : [],
				content : "",
				editor : "",
			}
		},
		methods : {
			toggleActive(e){
				$(e.currentTarget).siblings().removeClass("mdui-list-item-active");
				$(e.currentTarget).addClass("mdui-list-item-active");
			},
			getCategories(){
				let t = this;
				t.$API.get('/category').then(function(data){
					t.categories = data;
				}).catch(function(msg){
				
				})
			},
			getPosts(cate_id){
				let t = this;
				t.$API.get('/post',{cate_id:cate_id}).then(function(data){
					t.posts = data;
				}).catch(function(msg){
				
				})
			},
			getDetail(content){
				this.editor.txt.html(content)
			}
		},
		mounted(){
			this.getCategories();
			// 创建编辑器
			this.editor = new E('#editor1','#editor2');
			this.editor.customConfig.uploadImgServer = '/upload';
			this.editor.create()
		}
	}
</script>
<style lang="less">
	html,body,.app,.left {
		margin:0;
		padding:0;
		height:100%;
	}
	.layout {
		height:calc(100% - 64px);
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.mdui-appbar {
		box-shadow: none !important;
	}
	.layout {
		.left {
			position: relative;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			
			.category {
				width: 220px;
			}
		}
		
		.middle {
			position: absolute;
			left: 220px;
			right:0;
			top:0;
			bottom:0;
			
			.middle-position {
				position:relative;
				height:100%;
				.post {
					width:280px;
				}
				.right {
					position: absolute;
					left:280px;
					top:0;
					right:0;
					bottom:0;
					.content {
						min-width:200px;
						height:100%;
						overflow-y:scroll;
					}
				}
			}
		}
		
	}
	.toolbar {
		width:100%;
		position:fixed;
		top:64px;
		left:500px;
		right:0;
		height:24px;
		z-index:10001;
	}
	.text {
		margin-top:24px;
	}
</style>
