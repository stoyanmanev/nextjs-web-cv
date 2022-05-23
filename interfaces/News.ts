export interface News {
    category: string;
    date: string;
    title: string;
    image: string;
    description: string;
    keywords?: string[];
    createdBy: string;
}