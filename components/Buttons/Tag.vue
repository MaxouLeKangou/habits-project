<template>
	<button class="tag">
		<slot/>
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	color: {
		type: String,
		default: 'dark-300'
	}
});

// Set CSS variable from prop
const root = document.documentElement;
root.style.setProperty('--color', props.color);
</script>

<style lang="scss">
.tag {
	padding: rem(5px) rem(10px);
	background-color: $dark-300;
	border: rem(1px) solid rgba(var(--color), 0.5);
	border-radius: rem(5px);

	display: flex;
	gap: rem(5px);
	align-items: center;
}
</style>