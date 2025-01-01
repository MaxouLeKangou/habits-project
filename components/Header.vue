<template>
	<header class="header">
		<NuxtLink to="/">
			<Logo class="header__logo" />
		</NuxtLink>

		<button @click="isMenuOpen = true" aria-label="Open menu">
			<IconsHamburger class="header__menu" />
		</button>

		<nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
			<ul>
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
				<li><NuxtLink to="/auth/signin">Connection</NuxtLink></li>
			</ul>
			<button class="header__close" aria-label="Close menu">✕</button>
		</nav>
	</header>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

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
		color: white;
		font-size: 1.5rem;
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

	&__nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-100%);
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease-in-out;

		&--open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		ul {
			list-style: none;
			text-align: center;
			padding: 0;
			margin: 0;

			display: flex;
			flex-direction: column;
			gap: rem(20px);

			li {

				a {
					text-decoration: none;
					color: white;
					font-size: 1.5rem;
					transition: color 0.3s;

					&:hover {
						color: $secondary-100;
					}

					@include mq('medium') {
						font-size: 2rem;
					}

					@include mq('large') {
						font-size: 2.5rem;
					}
				}
			}
		}
	}

	&__close {
		position: absolute;
		top: rem(70px);
		right: rem(30px);
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;

		&:hover {
			color: $secondary-100;
		}
	}
}
</style>
