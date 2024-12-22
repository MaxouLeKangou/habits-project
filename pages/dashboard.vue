<template>
	<main class="container d">
		<header class="d__header">
			<div class="d__user">
				<p class="d__title">Hello</p>
				<span class="d__name">Maxime</span>
			</div>

			<div>
				img
			</div>
		</header>


		<section class="d__habits">
			<div class="d__habits__graph">
				<span>0%</span>
			</div>
			
			<div class="d__habits__info">
				<p class="d__habits__title">My Habits</p>
				<p v-if="data.personalHabits" class="d__habits__content"><span>0</span> of <span>{{ data.personalHabits.length }}</span> complited</p>
				<p class="d__habits__content" v-else>Create your first habit</p>
			</div>
		</section>


		<section class="d__list">
			<div class="d__list__info">
				<p class="d__list__title">My habits</p>

				<DialogHabit/>
			</div>
			<div class="d__list__content">
				<CardHabit v-if="data.personalHabits" v-for="habit in data.personalHabits" :key="habit.id" v-bind="habit" />
				<p class="d__list__noresult" v-else>Create your first habit<br/>Use the add button.</p>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import useTrackingApi from '~/composables/useTrackingApi';

const { data, refresh } = await useAsyncData('dashboard', async () => {
	return await useTrackingApi('/dashboard', { method: 'GET' });
});

// const habit = reactive({
// 	title: 'Je suis une habitude',
// 	description: 'Je suis la description de cette habitude',
// });


async function onHabitCreate() {
	refresh();
}
	

</script>

<style lang="scss">
.d {
	margin: rem(40px) 0;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__user {
		display: flex;
		flex-direction: column;
	}

	&__title {
		font-weight: 300;
		font-size: rem(20px);
	}

	&__name {
		font-weight: 700;
		font-size: rem(24px);
	}



	&__habits {
		background-color: $dark-200;
		border-radius: rem(20px);
		padding: rem(20px);
		display: flex;
		gap: rem(20px);
		margin: rem(40px) 0;

		&__graph {
			width: rem(60px);
			height: rem(60px);
			border-radius: 50%;
			border: rem(6px) solid $dark-300;

			display: flex;
			justify-content: center;
			align-items: center;

			font-weight: 600;
			font-size: rem(14px);
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: rem(5px);
		}
		
		&__title {
			font-weight: 700;
			font-size: rem(20px);
		}

		&__content {
			font-weight: 300;
			font-size: rem(14px);
		}
	}



	&__list {
		&__info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: rem(20px);
		}

		&__title {
			font-weight: 700;
			font-size: rem(20px);
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: rem(10px);
		}

		&__noresult {
			flex-grow: 1;
			font-weight: 300;
			font-size: rem(20px);
			text-align: center;
			margin: rem(60px) 0;
		}
	}
}
</style>
