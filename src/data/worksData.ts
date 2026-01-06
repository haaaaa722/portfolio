import profileIcon from "../assets/images/profileIcon.webp";

export type Category = "All" | "iOS" | "Android" | "Other";

export interface WorkItem{
    id: number;
    title: string;
    category: Category;
    image: string;
    description: string;
    slug: string;
}

export const worksList: WorkItem[] = [
    {
        id: 1,
        title: "My Portfolio",
        category: "Other",
        image: profileIcon,
        description: "txt",
        slug: "portfolio"
    }
];