<template>
	<header class="header">
		<NuxtLink to="/">
			<Logo class="header__logo"/>
		</NuxtLink>
		
		<button>
			<IconsHamburger class="header__menu"/>
		</button>
	</header>
</template>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	&__logo {
		width: rem(115px);
		height: rem(40px);

		@include mq('medium') {
			width: rem(130px);
			height: rem(55px);
		}

		@include mq('large') {
			width: rem(160px);
			height: rem(85px);
		}
	}
	
	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	&__menu {
		width: rem(30px);
		height: rem(30px);

		@include mq('medium') {
			width: rem(35px);
			height: rem(35px);
		}

		@include mq('large') {
			width: rem(40px);
			height: rem(40px);
		}
	}
}
</style>