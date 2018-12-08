<template>
	<div class="home">
		<div id="editor1" class="toolbar mdui-color-grey-100"></div>
		<div id="editor2" class="text" style="width:100%;min-height:100%;" v-html="content"></div>
	</div>
</template>

<script>
	const E = require("wangeditor");
	
	export default {
		name: 'home',
		data(){
			return {
				content : '<h3>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容v</h3>'
			}
		},
		mounted(){
			// 创建编辑器
			let t = this;
			// t.logger(t.router)
			let editor = new E('#editor1','#editor2');
			editor.customConfig.uploadImgServer = '/upload';
			editor.create()
		}
	}
</script>
<style lang="less" scoped>
	.toolbar {
		width:100%;
		position:fixed;
		top:64px;
		left:500px;
		right:0;
		height:50px;
		z-index:10001;
	}
	.text {
		margin-top:50px;
	}
</style>