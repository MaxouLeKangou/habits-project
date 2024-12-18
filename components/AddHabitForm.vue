<template>
	<form action="" method="post" @submit.prevent="onSubmit()">
		<input v-model="habits.title" type="text" placeholder="Nom de l'habitude">
		<input v-model="habits.description" type="text" placeholder="Description de l'habitude">

		<button type="submit">Ajouter une habitude</button>
	</form>
</template>

<script setup lang="ts">
import useTrackingApi from '~/composable/useTrackingApi';


const habits = reactive({
	title: '',
	description: '',
});

const emit = defineEmits(['habit:create']);

async function onSubmit() {
	try {
		await useTrackingApi('/habits', { method: 'POST', body: { title: habits.title, description: habits.description } });

		emit('habit:create');

	} catch (error) {
		console.error('Erreur lors de l’ajout de l’habitude :', error);
		alert('Une erreur est survenue lors de l’ajout de l’habitude.');
	}
}
</script>