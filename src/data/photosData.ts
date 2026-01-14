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
        name: "animals", // 動物
        slug: "animals",
        subcategories: [
            {name: "birds", slug: "birds"}, // 鳥
            {name: "cats", slug: "cats"}, // 猫
            {name: "dogs", slug: "dogs"}, //犬
            {name: "marine life", slug: "marine life"}, // 海の生き物
        ],
    },
    {
        name: "architecture", // 建築物
        slug: "architecture",
        subcategories: [
            {name: "cityscape", slug: "cityscape"}, // 街とか
            {name: "details", slug: "details"}, // 壁・階段・素材・パーツみたいな
            {name: "exterior", slug: "exterior"}, // 外観
            {name: "interior", slug: "interior"}, // 室内とか空間
        ],
    },
    {
        name: "landscapes",
        slug: "landscapes",
        subcategories: [
            {name: "mountains", slug: "mountains"}, // 山
            {name: "seascapes", slug: "seascapes"}, // 海
            {name: "sky", slug: "sky"}, // 空
        ],
    },
    {
        name: "plants",
        slug: "plants",
        subcategories: [
            {name: "flowers", slug: "flowers"},
            {name: "leaves", slug: "leaves"},
            {name: "trees", slug: "trees"},
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