<template>
	<header class="header">
		<Logo/>
		
		<button>
			<IconsHamburger/>
		</button>
	</header>
</template>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
}
</style>