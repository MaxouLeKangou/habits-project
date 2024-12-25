<template>
	<!-- <div class="b-stat">
		<p class="b-stat__value">{{ value }}</p>
		<p class="b-stat__text">{{ text }}</p>
	</div> -->
</template>

<script setup lang="ts">
defineProps<{
	value: string
	text: string
}>()
</script>

<style lang="scss">
// .b-stat {
// 	padding: rem(40px);
// 	display: flex;
// 	flex-direction: column;
// 	gap: rem(10px);
// 	text-align: center;

// 	&__value {
// 		font-size: rem(70px);
// 		font-weight: 700;
// 		margin: 0;
// 	}
// 	&__text {
// 		font-weight: 400;
// 		margin: 0;
// 	}
// }
</style>