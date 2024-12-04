<template>
	<div>
		<div v-for="post of posts" :key="post._id">
			<nuxt-link :to="`/blog/` + post.slug.current">
				<p v-for="category of post.categories" :key="category._id">
					{{ category.title }}
				</p>
				<h2>{{ post.title }}</h2>
				<img v-if="post.image" class="blog__img" :src="urlFor(post.image)?.url()" alt="Alt">
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, image, "categories": categories[]->{ _id, title, slug }, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
	? imageUrlBuilder({ projectId, dataset }).image(source)
	: null;
</script>

<style>
.blog__img {
	width: 100px;
	height: auto;
}
</style>