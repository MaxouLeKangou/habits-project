<template>
	<div class="price">
		<div class="price__content">
			<p class="price__title">{{ title }}</p>
			<p class="price__habits">{{ habits }}</p>

            <p class="price__price"><span>${{ price }}</span> / Forever</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	habits: string
	price: number
}>()
</script>

<style lang="scss">
.price {
    padding: rem(40px);
    border: rem(2px) solid $primary-100;
    border-radius: rem(30px);
    max-width: rem(400px);
    margin: 0 auto;

    text-align: center;
    font-weight: 700;

    &__content {
        display: flex;
        flex-direction: column;
        gap: rem(20px);
    }

    &__title {
        font-size: rem(28px);
    }

    &__price {
        span {
            font-size: rem(28px);
        }
    }
}
</style>