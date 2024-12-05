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
        title: "Material Teórico - Parte 1",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/SSZflN1UnwY?si=FEhY7Qt9j21fWLYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 2,
        title: "Material Teórico - Parte 2",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/7xSNNUscfz8?si=xQG-oHtHimMY9Jm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 3,
        title: "Material Teórico - Parte 3",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/sWiai7XTQKg?si=txL1r0o7NFJCYIr3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 4,
        title: "Material Teórico - Parte 4",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/HZX0wsv1H9o?si=NTnQwMFcl_LQJhPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 5,
        title: "Material Teórico - Parte 5",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/QZMTGEi2l8I?si=E74OQo8j7qOO7ZQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
]

const elementsVideos: videoT[] = [
    {
        id: 5,
        title: "Ángulos de las fresas - Parte 5",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/D9TUMJC2j-A?si=ZHpZ6eUXinWFOsLL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 4,
        title: "Uso del torno - Parte 4",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/07lM0Jtj34Y?si=6j5-muflXGabpZ9d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 3,
        title: "Bases y geles - Parte 3",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/1RnGIEQtZ14?si=pQLd8BSa35iKseMl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 2,
        title: "Composición química de los productos - Parte 2",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/n9ueYQms1ug?si=hc9-mnlxsT2u73w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 1,
        title: "Lista de materiales - Parte 1",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/Irrj-Pi0LP4?si=KUcI95TeU-TBtZHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    }
]

export const categories: CategoriesT[] = [
    {
        id: 1,
        title: "Material Teórico",
        videos: practicalVideos
    },
    {
        id: 2,
        title: "Materiales y Productos",
        videos: elementsVideos
    }
]