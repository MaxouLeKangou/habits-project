<template>
	<div class="hero">
		<h1 class="hero__title">{{ title }}</h1>
		<p class="hero__text">{{ text }}</p>
		<div class="hero__links">
			<Button type="NuxtLink" :link="button.url" :label="button.text"/>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string
	text: string
	button: { url: string, text: string }
}>()
</script>

<style lang="scss">
.hero {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	&__title {
		font-size: rem(32px);
		font-weight: 700;
		margin: 0;
	}
	&__text {
		font-size: rem(14px);
	}

	&__links {
		margin-top: rem(30px);
		display: flex;
		justify-content: center;
	}
}
</style>