<template>
	<main class="container d">
		<section class="d__habits">
			<div class="d__habits__graph">
				<span>0%</span>
			</div>
			
			<div class="d__habits__info">
				<p class="d__habits__title">My Habits</p>
				<p v-if="data.personalHabits && data.personalHabits.length > 0" class="d__habits__content"><span>0</span> of <span>{{ data.personalHabits.length }}</span> complited</p>
				<p v-else class="d__habits__content">Create your first habit</p>
			</div>
		</section>


		<section class="d__list">
			<div class="d__list__info">
				<p class="d__list__title">My habits</p>

				<DialogHabit @habit-refresh="refresh()">
					<template #icon>
						<IconsAdd/>
					</template>
				</DialogHabit>
			</div>
			<div class="d__list__content">
				<CardHabit v-for="habit in data.personalHabits" v-if="data.personalHabits && data.personalHabits.length > 0" :key="habit.id" v-bind="habit" />
				<p v-else class="d__list__noresult">Create your first habit<br>Use the add button.</p>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
const { data, refresh } = await useAsyncData('dashboard', async () => {
	return await useAPI('/dashboard', { method: 'GET' });
});

// const habit = reactive({
// 	title: 'Je suis une habitude',
// 	description: 'Je suis la description de cette habitude',
// });
	

</script>

<style lang="scss">
.d {

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
			display: grid;
			grid-template-columns: 1fr;
			gap: rem(10px);

			@include mq('small') {
				grid-template-columns: 1fr 1fr;
			}

			@include mq('large') {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}

		&__noresult {
			font-weight: 300;
			font-size: rem(20px);
			text-align: center;
			margin: rem(60px) 0;

			@include mq('small') {
				grid-column-start: 0;
				grid-column-end: 2;
			}

			@include mq('large') {
				grid-column-start: 0;
				grid-column-end: 3;
			}
		}
	}
}
</style>
