<template>
	<section class="h">
		<div class="h__infos">
			<p class="h__title">{{ title }}</p>
			<p class="h__description">{{ description }}</p>
		</div>

		<div class="h__tag__buttons">
			<button class="h__tag -green">
				<IconsCheck/>
				<span>0</span>
			</button>

			<div class="h__tag__buttons">
				<button class="h__tag -orange">
					<IconsEdit/>
				</button>

				<button class="h__tag -red">
					<IconsTrash/>
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Habit } from '@/types/Habit';

defineProps<Habit>();
</script>

<style lang="scss">
.h {
	background-color: $dark-200;
	border-radius: rem(20px);
	padding: rem(20px);

	&__infos {
		display: flex;
		flex-direction: column;
		gap: rem(5px);
		margin-bottom: rem(20px);
	}

	&__title {
		font-weight: 700;
	}

	&__description {
		font-weight: 300;
		font-size: rem(14px);
		color: $light-200
	}

	&__tag {
		background-color: $dark-300;
		border: rem(1px) solid $dark-300;
		border-radius: rem(5px);
		padding: rem(5px) rem(10px);
		display: flex;
		align-items: center;
		gap: rem(5px);

		font-size: rem(14px);

		&__buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: rem(10px);
		}

		& span {
			color: $light-100;
		}

		&.-green {
			color: $green-100;
			border-color: rgba($green-100, 0.5);
		}

		&.-orange {
			color: $orange-100;
			border-color: rgba($orange-100, 0.5);
		}

		&.-red {
			color: $red-100;
			border-color: rgba($red-100, 0.5);
		}
	}
}
</style>