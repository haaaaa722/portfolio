export type PhotoCategory = {
    name: string;
    slug: string;
    subcategories: {name: string; slug: string}[];
};

export type PhotoItem = {
    id: string;
    title: string;
    categorySlug: string;
    subSlug?: string;
    thumbSrc: string;
    fullSrc: string;
    description?: string;
};

export const photoCategories: PhotoCategory[] = [
    {
        name: "category a",
        slug: "a",
        subcategories: [
            {name: "subcategory a", slug: "a"},
            {name: "subcategory b", slug: "b"},
            {name: "subcategory c", slug: "c"},
            {name: "subcategory d", slug: "d"},
            {name: "subcategory e", slug: "e"},
        ],
    },
    {
        name: "category b",
        slug: "b",
        subcategories: [
            {name: "subcategory a", slug: "a"},
            {name: "subcategory b", slug: "b"},
            {name: "subcategory c", slug: "c"},
            {name: "subcategory d", slug: "d"},
            {name: "subcategory e", slug: "e"},
        ],
    },
    {
        name: "category c",
        slug: "c",
        subcategories: [
            {name: "subcategory a", slug: "a"},
            {name: "subcategory b", slug: "b"},
            {name: "subcategory c", slug: "c"},
            {name: "subcategory d", slug: "d"},
            {name: "subcategory e", slug: "e"},
        ],
    },
    {
        name: "category d",
        slug: "d",
        subcategories: [
            {name: "subcategory a", slug: "a"},
            {name: "subcategory b", slug: "b"},
            {name: "subcategory c", slug: "c"},
            {name: "subcategory d", slug: "d"},
            {name: "subcategory e", slug: "e"},
        ],
    },
    {
        name: "category e",
        slug: "e",
        subcategories: [
            {name: "subcategory a", slug: "a"},
            {name: "subcategory b", slug: "b"},
            {name: "subcategory c", slug: "c"},
            {name: "subcategory d", slug: "d"},
            {name: "subcategory e", slug: "e"},
        ],
    },
];

export const photos: PhotoItem[] = Array.from({length: 28}).map((_, i)=>{
    const cat = photoCategories[i % photoCategories.length];
    const sub = cat.subcategories[i % cat.subcategories.length];

    return{
        id: `p${i+1}`,
        title: `data ${i+1}`,
        categorySlug: cat.slug,
        subSlug: sub.slug,
        thumbSrc: "",
        fullSrc: "",
        description: "data",
    };
});