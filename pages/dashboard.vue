<template>
	<div>
		<h1>Dashboard</h1>

		<div v-if="data">
			<p>Bienvenue, {{ data.username }}!</p>

			<p>Global Habits</p>
			<ul>
				<li v-for="item of data.globalHabits" :key="item.id">{{ item.title }} : {{ item.description }}</li>
			</ul>

			<p>Personal Habits</p>
			<ul>
				<li v-for="item of data.personalHabits" :key="item.id">{{ item.title }} : {{ item.description }}</li>
			</ul>

			<AddHabitForm @habit:create="onHabitCreate()" />
		</div>

		<div v-else-if="error">
			<p>Erreur lors du chargement des données : {{ error }}</p>
		</div>

		<div v-else>
			<p>Chargement...</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import useTrackingApi from '~/composable/useTrackingApi';

const error = ref<string>('');

const { data, refresh } = await useAsyncData('dashboard', async () => {
	return await useTrackingApi('/dashboard', { method: 'GET' });
});


async function onHabitCreate() {
	refresh();
}
	
</script>
