<template>
	<div v-if="post">
		<p v-for="category of post.categories" :key="category.id">{{ category }}</p>
		<SanityImage :asset-id="post.image.asset._ref" class="blog__img" />
		<SanityContent :blocks="post.body" />
	</div>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const route = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug });
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
	? imageUrlBuilder({ projectId, dataset }).image(source)
	: null;

if(!post.value) {
	throw createError({ statusCode: 404, message: "Post not found" });
}

useSeoMeta({
	title: `${post.value?.title} | Tracking App`,
	description: 'Découvrez tous les articles de notre blog',
	ogImage: post?.value?.image && urlFor(post?.value?.image)?.url() ? urlFor(post?.value?.image)?.url() : '/img/meta-image.png',
});

// const { projectId, dataset } = useSanity().client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;
</script>