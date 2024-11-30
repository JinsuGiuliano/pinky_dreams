
export type videoT = {
    id: number
    title: string
    description: string
    iFrame: string
    image: string
}

export type CategoriesT = {
    id: number
    title: string
    videos: videoT[]
}

const practicalVideos: videoT[] = [
    {
        id: 1,
        title: "Video 1",
        description: "Description 1",
        iFrame: `<iframe  class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 2,
        title: "Video 2",
        description: "Description 2",
        iFrame: `<iframe  class="w-full" src="https://www.youtube.com/embed/-oF7BOp1dj0?si=p1da4HBBTeBeKsds" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
]

const elementsVideos: videoT[] = [
    {
        id: 3,
        title: "Video 3",
        description: "Description 3",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 4,
        title: "Video 4",
        description: "Description 4",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/-oF7BOp1dj0?si=xYLW1h3OsIrJW_-5" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 5,
        title: "Video 5",
        description: "Description 5",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 6,
        title: "Video 6",
        description: "Description 6",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    }
]

const teoricalVideos: videoT[] = [
    {
        id: 7,
        title: "Video 7",
        description: "Description 7",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 8,
        title: "Video 8",
        description: "Description 8",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 9,
        title: "Video 9",
        description: "Description 9",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 10,
        title: "Video 10",
        description: "Description 10",
        iFrame: `<iframe class="w-full" src="https://www.youtube.com/embed/PA6w-wkKZkE?si=7PKS8gnQyV7jIdag" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
]

export const categories: CategoriesT[] = [
    {
        id: 1,
        title: "Practical",
        videos: practicalVideos
    },
    {
        id: 2,
        title: "Elements",
        videos: elementsVideos
    },
    {
        id: 3,
        title: "Teorical",
        videos: teoricalVideos
    },
]