<template>
	<div class="hero">
		<h1 class="hero__title">{{ title }}</h1>
		<p class="hero__text">{{ text }}</p>
		<div class="hero__links">
			<!-- <MyButton v-for="link of links" :key="link._key" type="NuxtLink" :link="link.url" :label="link.label"/> -->
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	text: string
	links: { _key: string, url: string, label: string }[]
}>()
</script>

<style lang="scss">
// .hero {
// 	padding: 0 rem(20px);
// 	min-height: 80vh;
// 	background-color: rgba($primary-base, 0.1);
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	gap: rem(10px);

// 	&__title {
// 		font-size: rem(36px);
// 		font-weight: 700;
// 		margin: 0;
// 	}

// 	&__links {
// 		margin-top: rem(40px);
// 		display: flex;
// 		gap: rem(20px);
// 	}
// }
</style>