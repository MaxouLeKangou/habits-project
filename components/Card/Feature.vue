<template>
	<div class="feature">
		<div class="feature__icon">
			<SanityImage :asset-id="icon.asset._ref" />
		</div>

		<div class="feature__content">
			<p class="feature__title">{{ title }}</p>
			<p class="feature__text">{{ text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">

defineProps<{
	title: string
	text: string
	icon: {
		asset: {
			_ref: string
		}
	}
}>()

// const { getImage } = useSanityImage()
</script>

<style lang="scss">
.feature {
	padding: rem(20px);
	border-radius: rem(25px);
	color: $sky-lightest;
	background-color: $primary-base;

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: rem(60px);
		height: rem(60px);
		margin-bottom: rem(20px);
		border-radius: rem(5px);
		background-color: rgba($sky-lightest, 0.5);

		img {
			width: rem(35px);
			height: rem(35px);
			object-fit: contain;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: rem(10px);
	}

	&__title {
		font-size: rem(24px);
		font-weight: 700;
		margin: 0;
	}

	&__text {
		font-weight: 300;
	}
}
</style>