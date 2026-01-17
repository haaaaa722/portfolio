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
        {name: "fish", slug: "fish"}, // 魚
        {name: "marine life", slug: "marine life"}, // 海の生き物
        {name: "others", slug: "others"}
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
        {name: "river", slug: "river"}, // 川
        {name: "fireworks", slug: "fireworks"}, // 花火
      ],
    },
    {
      name: "plants",
      slug: "plants",
      subcategories: [
        {name: "flowers", slug: "flowers"}, // 花
        {name: "leaves", slug: "leaves"}, // 葉っぱ
        {name: "trees", slug: "trees"}, // 木
      ],
    },
    {
      name: "food",
      slug: "food",
      subcategories: [
        {name: "dishes", slug: "dishes"}, // 料理
        {name: "desserts", slug: "desserts"}, // スイーツ
        {name: "drinks", slug: "drinks"}, // 飲み物
        {name: "ingredients", slug: "ingredients"}, // 素材
      ]
    },
    {
      name: "snapshot",
      slug: "snapshot",
      subcategories: [
        {name: "street", slug: "street"}, // 街角・ストリート
        {name: "objects", slug: "objects"}, // 小物・雑貨・置物
        {name: "art", slug: "art"} // アート
      ]
    }
];

export const photos: PhotoItem[] = [
  {
    "id": "0001",
    "title": "img_0001",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0001.webp",
    "fullSrc": "/images/photos/full/img_0001.webp"
  },
  {
    "id": "0002",
    "title": "img_0002",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0002.webp",
    "fullSrc": "/images/photos/full/img_0002.webp"
  },
  {
    "id": "0003",
    "title": "img_0003",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0003.webp",
    "fullSrc": "/images/photos/full/img_0003.webp"
  },
  {
    "id": "0004",
    "title": "img_0004",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0004.webp",
    "fullSrc": "/images/photos/full/img_0004.webp"
  },
  {
    "id": "0005",
    "title": "img_0005",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0005.webp",
    "fullSrc": "/images/photos/full/img_0005.webp"
  },
  {
    "id": "0006",
    "title": "img_0006",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0006.webp",
    "fullSrc": "/images/photos/full/img_0006.webp"
  },
  {
    "id": "0007",
    "title": "img_0007",
    "categorySlug": "landscapes",
    "subSlug": "fireworks",
    "thumbSrc": "/images/photos/thumb/img_0007.webp",
    "fullSrc": "/images/photos/full/img_0007.webp"
  },
  {
    "id": "0008",
    "title": "img_0008",
    "categorySlug": "landscapes",
    "subSlug": "mountains",
    "thumbSrc": "/images/photos/thumb/img_0008.webp",
    "fullSrc": "/images/photos/full/img_0008.webp"
  },
  {
    "id": "0009",
    "title": "img_0009",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0009.webp",
    "fullSrc": "/images/photos/full/img_0009.webp"
  },
  {
    "id": "0010",
    "title": "img_0010",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0010.webp",
    "fullSrc": "/images/photos/full/img_0010.webp"
  },
  {
    "id": "0011",
    "title": "img_0011",
    "categorySlug": "architecture",
    "subSlug": "interior",
    "thumbSrc": "/images/photos/thumb/img_0011.webp",
    "fullSrc": "/images/photos/full/img_0011.webp"
  },
  {
    "id": "0012",
    "title": "img_0012",
    "categorySlug": "animals",
    "subSlug": "cats",
    "thumbSrc": "/images/photos/thumb/img_0012.webp",
    "fullSrc": "/images/photos/full/img_0012.webp"
  },
  {
    "id": "0013",
    "title": "img_0013",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0013.webp",
    "fullSrc": "/images/photos/full/img_0013.webp"
  },
  {
    "id": "0014",
    "title": "img_0014",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0014.webp",
    "fullSrc": "/images/photos/full/img_0014.webp"
  },
  {
    "id": "0015",
    "title": "img_0015",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0015.webp",
    "fullSrc": "/images/photos/full/img_0015.webp"
  },
  {
    "id": "0016",
    "title": "img_0016",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0016.webp",
    "fullSrc": "/images/photos/full/img_0016.webp"
  },
  {
    "id": "0017",
    "title": "img_0017",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0017.webp",
    "fullSrc": "/images/photos/full/img_0017.webp"
  },
  {
    "id": "0018",
    "title": "img_0018",
    "categorySlug": "architecture",
    "subSlug": "interior",
    "thumbSrc": "/images/photos/thumb/img_0018.webp",
    "fullSrc": "/images/photos/full/img_0018.webp"
  },
  {
    "id": "0019",
    "title": "img_0019",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0019.webp",
    "fullSrc": "/images/photos/full/img_0019.webp"
  },
  {
    "id": "0020",
    "title": "img_0020",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0020.webp",
    "fullSrc": "/images/photos/full/img_0020.webp"
  },
  {
    "id": "0021",
    "title": "img_0021",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0021.webp",
    "fullSrc": "/images/photos/full/img_0021.webp"
  },
  {
    "id": "0022",
    "title": "img_0022",
    "categorySlug": "architecture",
    "subSlug": "interior",
    "thumbSrc": "/images/photos/thumb/img_0022.webp",
    "fullSrc": "/images/photos/full/img_0022.webp"
  },
  {
    "id": "0023",
    "title": "img_0023",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0023.webp",
    "fullSrc": "/images/photos/full/img_0023.webp"
  },
  {
    "id": "0024",
    "title": "img_0024",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0024.webp",
    "fullSrc": "/images/photos/full/img_0024.webp"
  },
  {
    "id": "0025",
    "title": "img_0025",
    "categorySlug": "animals",
    "subSlug": "dogs",
    "thumbSrc": "/images/photos/thumb/img_0025.webp",
    "fullSrc": "/images/photos/full/img_0025.webp"
  },
  {
    "id": "0026",
    "title": "img_0026",
    "categorySlug": "architecture",
    "subSlug": "interior",
    "thumbSrc": "/images/photos/thumb/img_0026.webp",
    "fullSrc": "/images/photos/full/img_0026.webp"
  },
  {
    "id": "0027",
    "title": "img_0027",
    "categorySlug": "animals",
    "subSlug": "dogs",
    "thumbSrc": "/images/photos/thumb/img_0027.webp",
    "fullSrc": "/images/photos/full/img_0027.webp"
  },
  {
    "id": "0028",
    "title": "img_0028",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0028.webp",
    "fullSrc": "/images/photos/full/img_0028.webp"
  },
  {
    "id": "0029",
    "title": "img_0029",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0029.webp",
    "fullSrc": "/images/photos/full/img_0029.webp"
  },
  {
    "id": "0030",
    "title": "img_0030",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0030.webp",
    "fullSrc": "/images/photos/full/img_0030.webp"
  },
  {
    "id": "0031",
    "title": "img_0031",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0031.webp",
    "fullSrc": "/images/photos/full/img_0031.webp"
  },
  {
    "id": "0032",
    "title": "img_0032",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0032.webp",
    "fullSrc": "/images/photos/full/img_0032.webp"
  },
  {
    "id": "0033",
    "title": "img_0033",
    "categorySlug": "snapshot",
    "subSlug": "street",
    "thumbSrc": "/images/photos/thumb/img_0033.webp",
    "fullSrc": "/images/photos/full/img_0033.webp"
  },
  {
    "id": "0034",
    "title": "img_0034",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0034.webp",
    "fullSrc": "/images/photos/full/img_0034.webp"
  },
  {
    "id": "0035",
    "title": "img_0035",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0035.webp",
    "fullSrc": "/images/photos/full/img_0035.webp"
  },
  {
    "id": "0036",
    "title": "img_0036",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0036.webp",
    "fullSrc": "/images/photos/full/img_0036.webp"
  },
  {
    "id": "0037",
    "title": "img_0037",
    "categorySlug": "animals",
    "subSlug": "others",
    "thumbSrc": "/images/photos/thumb/img_0037.webp",
    "fullSrc": "/images/photos/full/img_0037.webp"
  },
  {
    "id": "0038",
    "title": "img_0038",
    "categorySlug": "architecture",
    "subSlug": "details",
    "thumbSrc": "/images/photos/thumb/img_0038.webp",
    "fullSrc": "/images/photos/full/img_0038.webp"
  },
  {
    "id": "0039",
    "title": "img_0039",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0039.webp",
    "fullSrc": "/images/photos/full/img_0039.webp"
  },
  {
    "id": "0040",
    "title": "img_0040",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0040.webp",
    "fullSrc": "/images/photos/full/img_0040.webp"
  },
  {
    "id": "0041",
    "title": "img_0041",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0041.webp",
    "fullSrc": "/images/photos/full/img_0041.webp"
  },
  {
    "id": "0042",
    "title": "img_0042",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0042.webp",
    "fullSrc": "/images/photos/full/img_0042.webp"
  },
  {
    "id": "0043",
    "title": "img_0043",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0043.webp",
    "fullSrc": "/images/photos/full/img_0043.webp"
  },
  {
    "id": "0044",
    "title": "img_0044",
    "categorySlug": "animals",
    "subSlug": "cats",
    "thumbSrc": "/images/photos/thumb/img_0044.webp",
    "fullSrc": "/images/photos/full/img_0044.webp"
  },
  {
    "id": "0045",
    "title": "img_0045",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0045.webp",
    "fullSrc": "/images/photos/full/img_0045.webp"
  },
  {
    "id": "0046",
    "title": "img_0046",
    "categorySlug": "animals",
    "subSlug": "fish",
    "thumbSrc": "/images/photos/thumb/img_0046.webp",
    "fullSrc": "/images/photos/full/img_0046.webp"
  },
  {
    "id": "0047",
    "title": "img_0047",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0047.webp",
    "fullSrc": "/images/photos/full/img_0047.webp"
  },
  {
    "id": "0048",
    "title": "img_0048",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0048.webp",
    "fullSrc": "/images/photos/full/img_0048.webp"
  },
  {
    "id": "0049",
    "title": "img_0049",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0049.webp",
    "fullSrc": "/images/photos/full/img_0049.webp"
  },
  {
    "id": "0050",
    "title": "img_0050",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0050.webp",
    "fullSrc": "/images/photos/full/img_0050.webp"
  },
  {
    "id": "0051",
    "title": "img_0051",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0051.webp",
    "fullSrc": "/images/photos/full/img_0051.webp"
  },
  {
    "id": "0052",
    "title": "img_0052",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0052.webp",
    "fullSrc": "/images/photos/full/img_0052.webp"
  },
  {
    "id": "0053",
    "title": "img_0053",
    "categorySlug": "food",
    "subSlug": "desserts",
    "thumbSrc": "/images/photos/thumb/img_0053.webp",
    "fullSrc": "/images/photos/full/img_0053.webp"
  },
  {
    "id": "0054",
    "title": "img_0054",
    "categorySlug": "animals",
    "subSlug": "cats",
    "thumbSrc": "/images/photos/thumb/img_0054.webp",
    "fullSrc": "/images/photos/full/img_0054.webp"
  },
  {
    "id": "0055",
    "title": "img_0055",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0055.webp",
    "fullSrc": "/images/photos/full/img_0055.webp"
  },
  {
    "id": "0056",
    "title": "img_0056",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0056.webp",
    "fullSrc": "/images/photos/full/img_0056.webp"
  },
  {
    "id": "0057",
    "title": "img_0057",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0057.webp",
    "fullSrc": "/images/photos/full/img_0057.webp"
  },
  {
    "id": "0058",
    "title": "img_0058",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0058.webp",
    "fullSrc": "/images/photos/full/img_0058.webp"
  },
  {
    "id": "0059",
    "title": "img_0059",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0059.webp",
    "fullSrc": "/images/photos/full/img_0059.webp"
  },
  {
    "id": "0060",
    "title": "img_0060",
    "categorySlug": "architecture",
    "subSlug": "cityscape",
    "thumbSrc": "/images/photos/thumb/img_0060.webp",
    "fullSrc": "/images/photos/full/img_0060.webp"
  },
  {
    "id": "0061",
    "title": "img_0061",
    "categorySlug": "landscapes",
    "subSlug": "fireworks",
    "thumbSrc": "/images/photos/thumb/img_0061.webp",
    "fullSrc": "/images/photos/full/img_0061.webp"
  },
  {
    "id": "0062",
    "title": "img_0062",
    "categorySlug": "landscapes",
    "subSlug": "fireworks",
    "thumbSrc": "/images/photos/thumb/img_0062.webp",
    "fullSrc": "/images/photos/full/img_0062.webp"
  },
  {
    "id": "0063",
    "title": "img_0063",
    "categorySlug": "landscapes",
    "subSlug": "fireworks",
    "thumbSrc": "/images/photos/thumb/img_0063.webp",
    "fullSrc": "/images/photos/full/img_0063.webp"
  },
  {
    "id": "0064",
    "title": "img_0064",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0064.webp",
    "fullSrc": "/images/photos/full/img_0064.webp"
  },
  {
    "id": "0065",
    "title": "img_0065",
    "categorySlug": "landscapes",
    "subSlug": "seascapes",
    "thumbSrc": "/images/photos/thumb/img_0065.webp",
    "fullSrc": "/images/photos/full/img_0065.webp"
  },
  {
    "id": "0066",
    "title": "img_0066",
    "categorySlug": "snapshot",
    "subSlug": "street",
    "thumbSrc": "/images/photos/thumb/img_0066.webp",
    "fullSrc": "/images/photos/full/img_0066.webp"
  },
  {
    "id": "0067",
    "title": "img_0067",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0067.webp",
    "fullSrc": "/images/photos/full/img_0067.webp"
  },
  {
    "id": "0068",
    "title": "img_0068",
    "categorySlug": "animals",
    "subSlug": "cats",
    "thumbSrc": "/images/photos/thumb/img_0068.webp",
    "fullSrc": "/images/photos/full/img_0068.webp"
  },
  {
    "id": "0069",
    "title": "img_0069",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0069.webp",
    "fullSrc": "/images/photos/full/img_0069.webp"
  },
  {
    "id": "0070",
    "title": "img_0070",
    "categorySlug": "landscapes",
    "subSlug": "seascapes",
    "thumbSrc": "/images/photos/thumb/img_0070.webp",
    "fullSrc": "/images/photos/full/img_0070.webp"
  },
  {
    "id": "0071",
    "title": "img_0071",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0071.webp",
    "fullSrc": "/images/photos/full/img_0071.webp"
  },
  {
    "id": "0072",
    "title": "img_0072",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0072.webp",
    "fullSrc": "/images/photos/full/img_0072.webp"
  },
  {
    "id": "0073",
    "title": "img_0073",
    "categorySlug": "animals",
    "subSlug": "birds",
    "thumbSrc": "/images/photos/thumb/img_0073.webp",
    "fullSrc": "/images/photos/full/img_0073.webp"
  },
  {
    "id": "0074",
    "title": "img_0074",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0074.webp",
    "fullSrc": "/images/photos/full/img_0074.webp"
  },
  {
    "id": "0075",
    "title": "img_0075",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0075.webp",
    "fullSrc": "/images/photos/full/img_0075.webp"
  },
  {
    "id": "0076",
    "title": "img_0076",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0076.webp",
    "fullSrc": "/images/photos/full/img_0076.webp"
  },
  {
    "id": "0077",
    "title": "img_0077",
    "categorySlug": "animals",
    "subSlug": "fish",
    "thumbSrc": "/images/photos/thumb/img_0077.webp",
    "fullSrc": "/images/photos/full/img_0077.webp"
  },
  {
    "id": "0078",
    "title": "img_0078",
    "categorySlug": "animals",
    "subSlug": "fish",
    "thumbSrc": "/images/photos/thumb/img_0078.webp",
    "fullSrc": "/images/photos/full/img_0078.webp"
  },
  {
    "id": "0079",
    "title": "img_0079",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0079.webp",
    "fullSrc": "/images/photos/full/img_0079.webp"
  },
  {
    "id": "0080",
    "title": "img_0080",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0080.webp",
    "fullSrc": "/images/photos/full/img_0080.webp"
  },
  {
    "id": "0081",
    "title": "img_0081",
    "categorySlug": "architecture",
    "subSlug": "details",
    "thumbSrc": "/images/photos/thumb/img_0081.webp",
    "fullSrc": "/images/photos/full/img_0081.webp"
  },
  {
    "id": "0082",
    "title": "img_0082",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0082.webp",
    "fullSrc": "/images/photos/full/img_0082.webp"
  },
  {
    "id": "0083",
    "title": "img_0083",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0083.webp",
    "fullSrc": "/images/photos/full/img_0083.webp"
  },
  {
    "id": "0084",
    "title": "img_0084",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0084.webp",
    "fullSrc": "/images/photos/full/img_0084.webp"
  },
  {
    "id": "0085",
    "title": "img_0085",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0085.webp",
    "fullSrc": "/images/photos/full/img_0085.webp"
  },
  {
    "id": "0086",
    "title": "img_0086",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0086.webp",
    "fullSrc": "/images/photos/full/img_0086.webp"
  },
  {
    "id": "0087",
    "title": "img_0087",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0087.webp",
    "fullSrc": "/images/photos/full/img_0087.webp"
  },
  {
    "id": "0088",
    "title": "img_0088",
    "categorySlug": "snapshot",
    "subSlug": "street",
    "thumbSrc": "/images/photos/thumb/img_0088.webp",
    "fullSrc": "/images/photos/full/img_0088.webp"
  },
  {
    "id": "0089",
    "title": "img_0089",
    "categorySlug": "food",
    "subSlug": "dishes",
    "thumbSrc": "/images/photos/thumb/img_0089.webp",
    "fullSrc": "/images/photos/full/img_0089.webp"
  },
  {
    "id": "0090",
    "title": "img_0090",
    "categorySlug": "snapshot",
    "subSlug": "objects",
    "thumbSrc": "/images/photos/thumb/img_0090.webp",
    "fullSrc": "/images/photos/full/img_0090.webp"
  },
  {
    "id": "0091",
    "title": "img_0091",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0091.webp",
    "fullSrc": "/images/photos/full/img_0091.webp"
  },
  {
    "id": "0092",
    "title": "img_0092",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0092.webp",
    "fullSrc": "/images/photos/full/img_0092.webp"
  },
  {
    "id": "0093",
    "title": "img_0093",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0093.webp",
    "fullSrc": "/images/photos/full/img_0093.webp"
  },
  {
    "id": "0094",
    "title": "img_0094",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0094.webp",
    "fullSrc": "/images/photos/full/img_0094.webp"
  },
  {
    "id": "0095",
    "title": "img_0095",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0095.webp",
    "fullSrc": "/images/photos/full/img_0095.webp"
  },
  {
    "id": "0096",
    "title": "img_0096",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0096.webp",
    "fullSrc": "/images/photos/full/img_0096.webp"
  },
  {
    "id": "0097",
    "title": "img_0097",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0097.webp",
    "fullSrc": "/images/photos/full/img_0097.webp"
  },
  {
    "id": "0098",
    "title": "img_0098",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0098.webp",
    "fullSrc": "/images/photos/full/img_0098.webp"
  },
  {
    "id": "0099",
    "title": "img_0099",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0099.webp",
    "fullSrc": "/images/photos/full/img_0099.webp"
  },
  {
    "id": "0100",
    "title": "img_0100",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0100.webp",
    "fullSrc": "/images/photos/full/img_0100.webp"
  },
  {
    "id": "0101",
    "title": "img_0101",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0101.webp",
    "fullSrc": "/images/photos/full/img_0101.webp"
  },
  {
    "id": "0102",
    "title": "img_0102",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0102.webp",
    "fullSrc": "/images/photos/full/img_0102.webp"
  },
  {
    "id": "0103",
    "title": "img_0103",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0103.webp",
    "fullSrc": "/images/photos/full/img_0103.webp"
  },
  {
    "id": "0104",
    "title": "img_0104",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0104.webp",
    "fullSrc": "/images/photos/full/img_0104.webp"
  },
  {
    "id": "0105",
    "title": "img_0105",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0105.webp",
    "fullSrc": "/images/photos/full/img_0105.webp"
  },
  {
    "id": "0106",
    "title": "img_0106",
    "categorySlug": "architecture",
    "subSlug": "exterior",
    "thumbSrc": "/images/photos/thumb/img_0106.webp",
    "fullSrc": "/images/photos/full/img_0106.webp"
  },
  {
    "id": "0107",
    "title": "img_0107",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0107.webp",
    "fullSrc": "/images/photos/full/img_0107.webp"
  },
  {
    "id": "0108",
    "title": "img_0108",
    "categorySlug": "plants",
    "subSlug": "leaves",
    "thumbSrc": "/images/photos/thumb/img_0108.webp",
    "fullSrc": "/images/photos/full/img_0108.webp"
  },
  {
    "id": "0109",
    "title": "img_0109",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0109.webp",
    "fullSrc": "/images/photos/full/img_0109.webp"
  },
  {
    "id": "0110",
    "title": "img_0110",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0110.webp",
    "fullSrc": "/images/photos/full/img_0110.webp"
  },
  {
    "id": "0111",
    "title": "img_0111",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0111.webp",
    "fullSrc": "/images/photos/full/img_0111.webp"
  },
  {
    "id": "0112",
    "title": "img_0112",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0112.webp",
    "fullSrc": "/images/photos/full/img_0112.webp"
  },
  {
    "id": "0113",
    "title": "img_0113",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0113.webp",
    "fullSrc": "/images/photos/full/img_0113.webp"
  },
  {
    "id": "0114",
    "title": "img_0114",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0114.webp",
    "fullSrc": "/images/photos/full/img_0114.webp"
  },
  {
    "id": "0115",
    "title": "img_0115",
    "categorySlug": "plants",
    "subSlug": "trees",
    "thumbSrc": "/images/photos/thumb/img_0115.webp",
    "fullSrc": "/images/photos/full/img_0115.webp"
  },
  {
    "id": "0116",
    "title": "img_0116",
    "categorySlug": "animals",
    "subSlug": "others",
    "thumbSrc": "/images/photos/thumb/img_0116.webp",
    "fullSrc": "/images/photos/full/img_0116.webp"
  },
  {
    "id": "0117",
    "title": "img_0117",
    "categorySlug": "animals",
    "subSlug": "birds",
    "thumbSrc": "/images/photos/thumb/img_0117.webp",
    "fullSrc": "/images/photos/full/img_0117.webp"
  },
  {
    "id": "0118",
    "title": "img_0118",
    "categorySlug": "animals",
    "subSlug": "others",
    "thumbSrc": "/images/photos/thumb/img_0118.webp",
    "fullSrc": "/images/photos/full/img_0118.webp"
  },
  {
    "id": "0119",
    "title": "img_0119",
    "categorySlug": "animals",
    "subSlug": "others",
    "thumbSrc": "/images/photos/thumb/img_0119.webp",
    "fullSrc": "/images/photos/full/img_0119.webp"
  },
  {
    "id": "0120",
    "title": "img_0120",
    "categorySlug": "animals",
    "subSlug": "others",
    "thumbSrc": "/images/photos/thumb/img_0120.webp",
    "fullSrc": "/images/photos/full/img_0120.webp"
  },
  {
    "id": "0121",
    "title": "img_0121",
    "categorySlug": "plants",
    "subSlug": "flowers",
    "thumbSrc": "/images/photos/thumb/img_0121.webp",
    "fullSrc": "/images/photos/full/img_0121.webp"
  },
  {
    "id": "0122",
    "title": "img_0122",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0122.webp",
    "fullSrc": "/images/photos/full/img_0122.webp"
  },
  {
    "id": "0123",
    "title": "img_0123",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0123.webp",
    "fullSrc": "/images/photos/full/img_0123.webp"
  },
  {
    "id": "0124",
    "title": "img_0124",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0124.webp",
    "fullSrc": "/images/photos/full/img_0124.webp"
  },
  {
    "id": "0125",
    "title": "img_0125",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0125.webp",
    "fullSrc": "/images/photos/full/img_0125.webp"
  },
  {
    "id": "0126",
    "title": "img_0126",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0126.webp",
    "fullSrc": "/images/photos/full/img_0126.webp"
  },
  {
    "id": "0127",
    "title": "img_0127",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0127.webp",
    "fullSrc": "/images/photos/full/img_0127.webp"
  },
  {
    "id": "0128",
    "title": "img_0128",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0128.webp",
    "fullSrc": "/images/photos/full/img_0128.webp"
  },
  {
    "id": "0129",
    "title": "img_0129",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0129.webp",
    "fullSrc": "/images/photos/full/img_0129.webp"
  },
  {
    "id": "0130",
    "title": "img_0130",
    "categorySlug": "animals",
    "subSlug": "marine life",
    "thumbSrc": "/images/photos/thumb/img_0130.webp",
    "fullSrc": "/images/photos/full/img_0130.webp"
  },
  {
    "id": "0131",
    "title": "img_0131",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0131.webp",
    "fullSrc": "/images/photos/full/img_0131.webp"
  },
  {
    "id": "0132",
    "title": "img_0132",
    "categorySlug": "food",
    "subSlug": "desserts",
    "thumbSrc": "/images/photos/thumb/img_0132.webp",
    "fullSrc": "/images/photos/full/img_0132.webp"
  },
  {
    "id": "0133",
    "title": "img_0133",
    "categorySlug": "snapshot",
    "subSlug": "art",
    "thumbSrc": "/images/photos/thumb/img_0133.webp",
    "fullSrc": "/images/photos/full/img_0133.webp"
  }
];
