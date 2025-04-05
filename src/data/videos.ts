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

const theoryVideos: videoT[] = [
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
        id: 1,
        title: "Lista de materiales - Parte 1",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/Irrj-Pi0LP4?si=KUcI95TeU-TBtZHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 2,
        title: "Composición química de los productos - Parte 2",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/n9ueYQms1ug?si=hc9-mnlxsT2u73w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
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
        id: 4,
        title: "Uso del torno - Parte 4",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/07lM0Jtj34Y?si=6j5-muflXGabpZ9d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 5,
        title: "Ángulos de las fresas - Parte 5",
        description: "",
        iFrame: `<iframe class="w-full" src="https://www.youtube-nocookie.com/embed/D9TUMJC2j-A?si=ZHpZ6eUXinWFOsLL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    }
]

const practicalVideos: videoT[] = [
    {
        id: 1,
        title: "Práctica A",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qUMM2Ty6VhQ?si=XzJKah9FGt7X9Qtl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 2,
        title: "Práctica B - Paso 1 - Cutícula",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DFF8_fszPWI" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 3,
        title: "Práctica B - Paso 2 - Base",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/n3Ss_ZnHqLw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 4,
        title: "Práctica B - Paso 3 - Kapping",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/WmPkOQvlkHg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 5,
        title: "Práctica B - Paso 4 - Top Gel",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/yEvMVqhWZl8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 6,
        title: "Práctica C - Paso 1 - Service",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OK93h2PvrcE" title="Práctica C - Paso 1 - Service" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 7,
        title: "Práctica C - Paso 2 - Empuje de Cutícula",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DG2GqF94zY0" title="Practica C - Paso 2 - Empuje de Cutícula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 8,
        title: "Práctica C - Paso 3 - Manicuría Express",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LaayzmtBE4A" title="Practica C - Paso 3 - Manicuría Express" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 9,
        title: "Práctica C - Paso 4 - Limado",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/q0NBUd-BEHE" title="Práctica C - Paso 4 - Limado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 10,
        title: "Práctica C - Paso 5 - Corte de Cutícula",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FR8AT2MbAN4" title="Práctica C - Paso 5 - Corte de Cutícula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 11,
        title: "Práctica C - Paso 6 - Pulido de la piel",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9ohLm18Jq_8" title="Práctica C - Paso 6 - Pulido de la piel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        id: 13,
        title: "Práctica C - Paso 7 - Aplicación de la base",
        description: "",
        iFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/yWZImeaTEgE" title="Práctica C - Paso 7 - Aplicación de la base" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },

]

export const categories: CategoriesT[] = [
    {
        id: 1,
        title: "Material Teórico",
        videos: theoryVideos
    },
    {
        id: 2,
        title: "Materiales y Productos",
        videos: elementsVideos
    },
    {
        id: 3,
        title: "Parte Práctica",
        videos: practicalVideos
    }
]