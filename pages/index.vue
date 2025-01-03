<template>
	<main v-if="homepage" class="homepage">
		<section v-if="homepage.hero" class="homepage__hero">
			<BlocHero v-bind="homepage.hero"/>
		</section>

		<div class="container homepage__section">
			<!-- <section v-if="homepage.hero.stats" class="homepage__stats">
				<CardStat v-for="data of homepage.hero.stats" :key="data._key" v-bind="data"/>
			</section> -->

			<section v-if="homepage.features" class="homepage__features">
				<div class="homepage__content">
					<h2 class="homepage__subtitle">{{ homepage.features.title }}</h2>
					<p class="homepage__subtext">{{ homepage.features.text }}</p>
				</div>
				<div class="homepage__grid">
					<CardFeature v-for="(data, index) of homepage.features.table_features" :key="data._key" v-bind="data" :class="color(index)"/>
				</div>
			</section>

			<section v-if="homepage.datas" class="homepage_datas">
				<CardData v-for="data of homepage.datas.table_datas" :key="data._key" v-bind="data"/>
			</section>

			<section v-if="homepage.prices" class="homepage__prices">
				<div class="homepage__content">
					<h2 class="homepage__subtitle">{{ homepage.prices.title }}</h2>
					<p class="homepage__subtext">{{ homepage.prices.text }}</p>
				</div>
				<div class="homepage__switch">
					<div class="homepage__price__select">
						<span class="homepage__price__span" v-for="(data, index) of homepage.prices.table_prices" @click="price = index" :class="{ '-pSelect': price === index }">{{ data.title }}</span>
					</div>
				</div>
				<CardPrice v-bind="homepage.prices.table_prices[price]"/>
			</section>

			<!-- <section v-if="homepage.reviews" class="homepage__review">
				<CardReview v-for="data of homepage.reviews.reviews" :key="data._key" v-bind="homepage.review"/>
			</section> -->
		</div>
	</main>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const { data: homepage } = await useSanityQuery<SanityDocument>(groq`*[
	_type == "homepage"][0]`);

console.log(homepage)

const price = ref(0);

const color = (index: number): string => {
	const colors = ["color-1", "color-2", "color-3"];
	return colors[index % colors.length];
};
</script>

<style lang="scss">
.homepage {

	&__section {
		display: flex;
		flex-direction: column;
		gap: rem(100px);

		@include mq('medium') {
			gap: rem(150px);
		}

		@include mq('large') {
			gap: rem(200px);
		}
	}

	&__content {
		display: flex;
		text-align: center;
		flex-direction: column;
		gap: rem(10px);
		margin-bottom: rem(50px);
	}

	&__features {
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: rem(25px);
	}

	&__switch {
		display: flex;
		justify-content: center;
	}

	&__price__span {
		border-radius: rem(50px);
		padding: rem(8px) rem(16px);
		font-size: rem(14px);
		cursor: pointer;
	}

	&__price__select {
		display: inline-flex;
		gap: rem(5px);
		padding: rem(5px);
		border-radius: rem(50px);
		border: rem(1px) solid $dark-300;
		margin-bottom: rem(40px);

		.-pSelect {
			background-color: $light-100;
			color: $dark-100
		}
	}

	&__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: rem(25px);

		@include mq('medium') {
			grid-template-columns: 1fr 1fr;
		}

		@include mq('large') {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	&__subtitle {
		font-size: rem(28px);
		font-weight: 700;

		@include mq('medium') {
			font-size: rem(34px);
		}

		@include mq('large') {
			font-size: rem(42px);
		}
	}

	&__subtext {
		font-size: rem(14px);

		@include mq('medium') {
			font-size: rem(16px);
		}

		@include mq('large') {
			font-size: rem(20px);
		}
	}
}


</style>