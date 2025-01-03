<template>
	<div class="data">
		<div class="data__content">
			<p class="data__value">{{ value }}</p>
			<p class="data__text">{{ text }}</p>
		</div>

		<div class="data__image">
			<SanityImage :asset-id="image.asset._ref" />
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
.data {
    text-align: center;

    @include mq('medium') {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: rem(40px);
    }

	&__image {
        max-width: 100%;

        img {
            width: 100%;
        }
	}

	&__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(5px);
	}

	&__value {
		font-size: rem(28px);
		font-weight: 700;
		margin: 0;

		@include mq('medium') {
			font-size: rem(34px);
		}

		@include mq('large') {
			font-size: rem(42px);
		}
	}

	&__text {
		font-size: rem(14px);

		@include mq('medium') {
			font-size: rem(16px);
		}

		@include mq('large') {
			font-size: rem(18px);
		}
	}
}
</style>