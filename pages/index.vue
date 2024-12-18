<template>
	<main v-if="homepage" class="homepage">
		<section v-if="homepage.hero" class="homepage__hero">
			<BlocHero v-bind="homepage.hero"/>
		</section>

		<div class="container homepage__section">
			<section v-if="homepage.hero.stats" class="homepage__stats">
				<CardStat v-for="data of homepage.hero.stats" :key="data._key" v-bind="data"/>
			</section>

			<section v-if="homepage.features" class="homepage__features">
				<div class="homepage__content">
					<h2>{{ homepage.features.title }}</h2>
					<p>{{ homepage.features.text }}</p>
				</div>
				<CardFeature v-for="data of homepage.features.features" :key="data._key" v-bind="data"/>
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
		margin-bottom: rem(20px);
	}

	&__features {
		display: flex;
		flex-direction: column;
		gap: rem(20px);

	}
}
</style>