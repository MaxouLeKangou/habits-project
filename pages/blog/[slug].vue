<template>
	<div v-if="post">
		<SanityImage :asset-id="post.image.asset._ref" class="blog__img" />
		<SanityContent :blocks="post.body" />
	</div>
</template>

<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const route = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug });
// const { projectId, dataset } = useSanity().client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;
</script>