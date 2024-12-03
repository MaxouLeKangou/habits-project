<template>
	<div v-if="error">
		ma page d'erreur {{ error.statusCode }}
		<button @click="handleError">Retour à l'accueil</button>
	</div>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app';

defineProps({
	error: {
		type: Object as () => NuxtError,
		default: null,
	},
})

const handleError = () => clearError({ redirect: '/' });
</script>