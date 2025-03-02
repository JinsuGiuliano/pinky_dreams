export type productT = {
    id: number
    title: string
    description: string
    images: string[],
    price: number
    stock: number
    category: string
}

export type CategoriesT = {
    id: number
    title: string
    products: productT[]
}

export const nails: productT[] = [
    {
        id: 1,
        title: "Uñas de acrílico",
        description: "Uñas de acrílico con decoración",
        images: ["https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp", "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"],
        price: 100,
        stock: 10,
        category: "nails"
    },
    {
        id: 2,
        title: "Uñas de gel",
        description: "Uñas de gel con decoración",
        images: ["https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp", "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"],
        price: 150,
        stock: 10,
        category: "nails"
    },
    {
        id: 3,
        title: "Uñas de acrílico",
        description: "Uñas de acrílico con decoración",
        images: ["https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"],
        price: 100,
        stock: 10,
        category: "nails"
    }
]


export const allCategories: CategoriesT[] = [
    {
        id: 1,
        title: "Nails",
        products: nails
    }
]
