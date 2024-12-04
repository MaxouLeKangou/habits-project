import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
	_type == "category"
	&& defined(slug.current)]`;

export async function getCategories() {
	const { data: categories } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
	return categories;
}