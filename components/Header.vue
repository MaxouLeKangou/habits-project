<template>
	<header class="header">
		<NuxtLink to="/">
			<Logo/>
		</NuxtLink>
		
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
	padding: 1rem 0;
	
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
}
</style>