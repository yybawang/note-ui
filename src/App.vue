<template>
	<div>
		<header class="mdui-appbar mdui-appbar-fixed">
			<div class="mdui-toolbar mdui-color-theme">
				<span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#main-drawer', swipe: true}"><i
						class="mdui-icon material-icons">menu</i></span>
				<a href="../" class="mdui-typo-headline mdui-hidden-xs">MDUI</a>
			</div>
		</header>
		<div class="mdui-drawer mdui-color-white" id="main-drawer">
			<div class="mdui-card">
				<div class="mdui-card-media">
					<img src="./assets/snow_square_tiny.png" style="height:200px;" />
					<!-- 卡片中可以包含一个或多个菜单按钮 -->
					<div class="mdui-card-menu">
						<a target="_blank" href="//github.com/yybawang/note-ui">
							<button class="mdui-btn mdui-text-color-grey">github</button>
						</a>
					</div>
					<div class="mdui-card-media-covered mdui-card-media-covered-transparent">
						<div class="mdui-card-primary">
							<!--<img class="mdui-img-circle" src="../images/avatar.png" style="width:45px;" />-->
							<!--<a class="mdui-btn mdui-btn-icon mdui-ripple"><i class="mdui-icon material-icons">person</i></a>-->
							<div class="mdui-card-primary-title mdui-text-uppercase">云笔记</div>
							<div class="mdui-card-primary-subtitle">Golang + Vue</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdui-list" mdui-collapse="{accordion: true}">
				<div class="mdui-collapse-item mdui-collapse-item-open">
					<div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
						<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">near_me</i>
						<div class="mdui-list-item-content">开始使用</div>
						<i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
					</div>
					<div class="mdui-collapse-item-body mdui-list">
						<a href="./download" class="mdui-list-item mdui-ripple ">安装</a>
						<a href="./compatibility" class="mdui-list-item mdui-ripple ">兼容性</a>
						<a href="./jq" class="mdui-list-item mdui-ripple ">JavaScript 工具库</a>
						<a href="./global" class="mdui-list-item mdui-ripple ">JavaScript 全局方法</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mdui-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
