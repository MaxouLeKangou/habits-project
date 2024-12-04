<template>
	<section class="blog">
		<h1>Les articles : il y en a {{ totalPosts }}</h1>
		<div class="blog__categories">
			<p v-for="category of categories" :key="category.slug" :class="['blog__category -select', {'-is-active': filter === category.slug.current}]" @click="onCategoryChange(category)">
				{{ category.title }}
			</p>
		</div>

		

		<div v-if="posts && posts.length">
			<div v-for="post of posts" :key="post._id">
				<nuxt-link :to="`/blog/` + post.slug.current">
					<div class="blog__categories">
						<p v-for="category of post.categories" :key="category._id" class="blog__category">
							{{ category.title }}
						</p>
					</div>
					<h2>{{ post.title }}</h2>
					<img v-if="post.image" class="blog__img" :src="urlFor(post.image)?.url()" alt="Alt">
				</nuxt-link>
			</div>
			<p>Current page {{ page }}</p>
			<div v-for="n of totalPages" :key="n" @click="onPageClick(n)">
				<p style="cursor: pointer;">Page {{ n }}</p>
			</div>
		</div>
		<div v-else>
			<p>Pas d'article</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const perPage = 2;
const page = ref(1);
function onPageClick(index: number) {
	page.value = index;
}

const paginationStart = computed(() => (page.value - 1) * perPage);
const paginationEnd = computed(() => page.value * perPage);

const filter = ref('');
function onCategoryChange(category: SanityDocument) {
	page.value = 1;
	filter.value = category.slug.current;
}

const { data: categories } = await useSanityQuery<SanityDocument[]>(groq`*[
	_type == "category"
	&& defined(slug.current)]`);

const { data: totalPosts } = await useSanityQuery<number>(
	groq`count(*[
		_type == "post"
		&& defined(slug.current)
		&& ($filter == '' || $filter in categories[]->slug.current)])`,
		{ filter });

const totalPages = computed(() => {
	if(!totalPosts.value) return 0;
	return Math.ceil(totalPosts.value / perPage);
})

const { data: posts } = await useSanityQuery<SanityDocument[]>(
  groq`*[
    _type == "post"
    && defined(slug.current)
    && ($filter == '' || $filter in categories[]->slug.current)
  ]|order(publishedAt desc)[$start...$end]{
    _id, 
    title, 
    slug, 
    image, 
    "categories": categories[]->{ _id, title, slug }, 
    publishedAt
  }`,
  {
    filter,
    start: paginationStart,
    end: paginationEnd,
  }
);


const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
	? imageUrlBuilder({ projectId, dataset }).image(source)
	: null;

</script>

<style lang="scss">
.blog {
	&__img {
		width: 100px;
		height: auto;
	}
	&__categories {
		display: flex;
		gap: 1rem;
	}
	&__category {
		display: inline-block;
		background-color: rgba($primary-base, 0.1);
		color: $primary-dark;
		border: 1px solid rgba($primary-base, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 5rem;
		&.-is-active {
			background-color: $primary-base;
			color: white;
		}
		&.-select {
			background: rgba(0,0,0, 0.5);
		}
	}
}
</style>