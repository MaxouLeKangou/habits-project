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
					<h2 class="feature__title">{{ homepage.features.title }}</h2>
					<p class="feature__text">{{ homepage.features.text }}</p>
				</div>
				<CardFeature v-for="(data, index) of homepage.features.table_features" :key="data._key" v-bind="data" :class="color(index)"/>
			</section>

			<section v-if="homepage.reviews" class="homepage__review">
				<CardReview v-for="data of homepage.reviews.reviews" :key="data._key" v-bind="homepage.review"/>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const { data: homepage } = await useSanityQuery<SanityDocument>(groq`*[
	_type == "homepage"][0]`);

console.log(homepage)

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
	}

	&__content {
		display: flex;
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

	.feature {

		&__title {
			font-size: rem(28px);
			font-weight: 700;
		}

		&__text {
			font-size: rem(14px);
		}
	}
}


</style>