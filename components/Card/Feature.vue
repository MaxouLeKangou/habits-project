<template>
	<div class="feature">
		<div class="feature__image">
			<SanityImage :asset-id="image.asset._ref" />
		</div>

		<div class="feature__content">
			<p class="feature__value">{{ value }}</p>
			<p class="feature__text">{{ text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	value: string
	text: string
	image: {
		asset: {
			_ref: string
		}
	}
}>()
</script>

<style lang="scss">
.feature {
	padding: rem(20px) rem(30px);
	border-radius: rem(20px);
	text-align: left;
	border-right: rem(2px) solid rgba($light-100, 0.5);
	border-bottom: rem(2px) solid rgba($light-100, 0.5);

	&__image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: rem(50px);
		height: rem(50px);
		margin-bottom: rem(15px);
		border-radius: rem(10px);
		background: rgba($light-100, 0.4);

		img {
			width: rem(35px);
			height: rem(35px);
			object-fit: cover;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: rem(5px);
	}

	&__value {
		font-size: rem(18px);
		font-weight: 700;
		margin: 0;

		@include mq('medium') {
			font-size: rem(20px);
		}

		@include mq('large') {
			font-size: rem(22px);
		}
	}

	&__text {
		font-size: rem(12px);

		@include mq('medium') {
			font-size: rem(14px);
		}

		@include mq('large') {
			font-size: rem(16px);
		}
	}
}

.color-1 {
	background-color: $primary-100;
}

.color-2 {
	background-color: $tertiary-100;
}

.color-3 {
	background-color: $secondary-100;
}
</style>