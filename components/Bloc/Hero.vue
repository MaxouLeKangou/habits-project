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
defineProps<{
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
	gap: rem(10px);
	text-align: center;
	margin: 0 auto;

	@include mq('small') {
		max-width: rem(420px);
	}

	@include mq('medium') {
		max-width: rem(600px);
	}

	@include mq('large') {
		max-width: rem(800px);
	}
	

	&__title {
		font-size: rem(32px);
		font-weight: 700;
		margin: 0;

		@include mq('small') {
			font-size: rem(42px);
		}

		@include mq('medium') {
			font-size: rem(60px);
		}

		@include mq('large') {
			font-size: rem(80px);
		}
	}
	&__text {
		font-size: rem(14px);
		margin: 0 auto;

		@include mq('small') {
			font-size: rem(18px);
		}

		@include mq('medium') {
			font-size: rem(20px);
			max-width: rem(420px);
		}

		@include mq('large') {
			font-size: rem(24px);
			max-width: rem(600px);
		}
	}

	&__links {
		margin-top: rem(30px);
		display: flex;
		justify-content: center;
	}
}
</style>