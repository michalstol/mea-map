interface CategoryDTO {
    owner: string;
    name: string;
    icon: string;
    color: string;
    favorite: boolean;
}

interface Category {
    owner: string;
    name: string;
    icon: string;
    color: string;
    favorite: boolean;
}

export type { Category, CategoryDTO };
