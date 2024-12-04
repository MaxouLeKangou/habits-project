import type { SanityDocument } from "@sanity/client";

const POSTS_BY_CATEGORY_QUERY =
	`*[_type == "post" && $category in categories[]->{ title, slug }, "category": category->{ title, slug }, body }`;

export async function getPostsByCategory(category: string) {
	if(category === "all") {
		const POSTS_QUERY = 
			`*[_type == "post"] { _id, title, categories[]->{ title, slug }, body }`;
		const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
		return posts;

	} else {
		const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_BY_CATEGORY_QUERY, { category: category });
		return posts;
	}
}