export type Curso = {
    ID: number;
    title: string;
    image: string;
    available: boolean;
    description: string;
    linkPago: string,
    linkPagoRealizado?: string,
    precio: number
}

const linksCursos = {
    NailArt: {
        pago: `https://mpago.la/2XHeDjE`,
        realizado: `https://wa.link/tx66ll`
    },
    KappingGel: {
        pago: `https://mpago.la/2YV9oRE`,
        realizado: `https://wa.link/woqtd4`
    },
    SoftGel: {
        pago: `https://mpago.la/1seMKNu`,
        realizado: `https://wa.link/sncutj`
    }
}

export let cursos: Curso[] = [
    {
        ID:1,
        title: "Curso Online de Kapping en Gel",
        image: "/images/cursos/NailArt_TecnicasMixtas.jpeg",
        available: true,
        linkPago: linksCursos.KappingGel.pago,
        linkPagoRealizado: linksCursos.KappingGel.realizado,
        precio: 6000,
        description: `<strong>¡Lanzamiento especial!</strong></br>
Curso Online de Kapping en Gel</br>
Clases 100% pregrabadas para que aprendas a tu ritmo</br>

Antes: $25.000 </br>
Ahora: $6.000 ¡Solo por tiempo limitado!</br>

<strong>¿Qué vas a aprender?</strong></br>
✨ Manicuría Rusa y Combinada</br>
💅 Preparación perfecta de la uña</br>
⚙️ Manejo profesional del torno</br>
✅ Anatomía + enfermedades más comunes</br>
🧪 Composición química del gel</br>
✅ Cómo elegir la mejor base</br>
🌈 Nivelación y esmaltado perfecto en gel</br>

<strong>Incluye:</strong></br>
📚 Acceso inmediato</br>
📜 Certificado digital</br>
🔒 Acceso de por 6 meses</br>

Ideal para empezar desde cero o perfeccionar tu técnica como profesional de uñas.`,
    },
    {
        ID:2,
        title: "Curso Online Soft Gel Nails",
        image: "/images/cursos/SoftGel_ManicuriaCombinada.jpeg",
        available: true,
        linkPago: linksCursos.SoftGel.pago,
        linkPagoRealizado: linksCursos.SoftGel.realizado,
        precio: 9000,
        description: `<strong>Curso Online Soft Gel Nails</strong> </br> ¡Aprende y Emprende desde Casa!</br>

Uñas profesionales desde el día uno</br>

¿Te gustaría hacer uñas hermosas y empezar a ganar dinero desde casa?</br>
Este curso es para ti</br>

<strong>Incluye:</strong></br>
📚 Material teórico y práctico</br>
💅 Cómo elegir los tips de Soft Gel adecuados</br>
✨ Preparación correcta de la uña natural</br>
✅Preparación de los tips</br>
🖌️ Aplicación con base gel</br>
🎨 Esmaltado perfecto y duradero</br>
🔬 Anatomía de la uña</br>
⚠️ Enfermedades más comunes</br>

Clases pregrabadas – Míralas cuando quieras, a tu ritmo.</br>

Antes: 30.000 </br>
Ahora: $9.000 ¡PROMO por tiempo limitado!</br>

<strong>Inscríbete ahora y transforma tu pasión en tu negocio!</strong>`,
    },
    {
        ID:3,
        title: "Curso Online de Técnicas Mixtas",
        image: "/images/cursos/NailArt_TecnicasMixtas.jpeg",
        available: true,
        linkPago: linksCursos.NailArt.pago,
        linkPagoRealizado: linksCursos.NailArt.realizado,
        precio: 6000,
        description: `<strong>¡Aprendé Nail Art desde casa!</strong></br>
Curso Online de Técnicas Mixtas</br>
Clases pregrabadas, disponibles por 6 meses</br>
Antes: $25.000 — Ahora: $6.000</br>

<strong>¿Qué vas a aprender?</strong></br>
🎨 Diseños en tendencia</br>
✨ Relieve y cromados</br>
🐱 Efecto Cat Eye</br>
✍️ Trazos básicos</br>
🌈 Efecto Aurora</br>
💫 Efecto Aura</br>
…y mucho más</br>

Perfecto para llevar tus diseños a otro nivel, atraer más clientas o diferenciarte como nail artist</br>

<strong>Incluye:</strong></br>
📚 Clases paso a paso</br>
🎥 Acceso 24/7 por 6 meses</br>
📜 Certificado digital</br>`
    }
]
        





export let cursos_caducados: Curso[] = [
    //         {
    //             title: "Curso Presencial de Manicura",
    //             image: "/images/curso_presencial_manicuria.jpeg",
    //             available: true,
    //             description: `<span class="text-xs">Info de el curso inicial de esmaltado perfecto 🗒️
    //             </br>
    // Sobre incluye Manicuría Rusa y Kapping en gel en uñas💅
    //  </br>
    // (nivelación o refuerzo).
    //  </br> </br>
    // Duración: 1 día.
    //  </br> </br>
    // Aparte se deben traer algunos materiales y acá también los vendo o aparte presto los del salón.
    //  </br> </br>
    // Incluye: </br>
    // Incluye un kit de🎁 regalo. </br>
    // Coffe☕ break (desayuno) </br>
    // Refuerzo de material teórico y práctico 💻online por tres meses.</br>
    // 3 meses de asesoría.🧑‍🎓</br>
    // Certificado de participación✅</br>
    //  </br> </br>
    // Horario  🕥 10am a 15pm
    //  </br> </br>
    // En febrero 🗓️tiene un costo promocional 💥de 45.000.
    // Se seña con el  30%</span>`,
    //         },
//     {
//         title: "Taller grupal presencial intensivo de Kapping en gel + Manicura Russa",
//         image: "/images/taller_kapping_gel.jpeg",
//         available: true,
//         description: `<span class="text-xs">
// </br></br>
//      El Taller grupal presencial intensivo de Kapping en gel + Manicura Russa, es una clase de 5hs aprox.
// </br></br>
// Fecha: Lunes 10/03</br>
// Horario: 10hs</br>
// Precio: 25.000</br>
// Ubicación: Av. Santa fé 2450, Barrio Norte</br>
// Incluye certificado de asistencia.
// </br></br>
// Temario:</br>
// •⁠  ⁠Preparación de la uña</br>
// •⁠  ⁠Correctos adherentes </br>
// •⁠  ⁠Nivelación con gel</br>
// •⁠  ⁠Manejo de torno</br>
// •⁠  ⁠Enfermedades de la uña</br>
// •⁠  ⁠Retiro del sistema</br>
// •⁠  ⁠Esmaltado perfecto</br>
// •⁠  ⁠Anatomía de la uña</br>
// •⁠  ⁠Service</br>
// •⁠  ⁠Recomendación de marcas de insumos
// </br></br>
// Este taller incluye todos los materiales descartables en mesa.
// </br></br>
// Forma de reservar:</br>
// •⁠  ⁠Se seña abonando 10.000 por transferencia, el resto 15.000 se abona el día de la clase.</br>
// •⁠  ⁠La seña y/o total, no se reintegra en caso de no asistir, tampoco es válido para otra fecha/taller/persona.</br>
// </span>`,
//     },
//                 {
//                 title: "Taller grupal presencial intensivo de Soft gel",
//                 image: "/images/taller_intensivo_soft_gel.jpeg",
//                 available: true,
//         description: `<span class="text-xs">
//                 El Taller grupal presencial intensivo de Soft gel, es una clase de 5hs aprox.
// </br>
// </br>
// Fecha: Viernes 07/03</br>
// Horario: 10hs</br>
// Precio: 25.000</br>
// Ubicación: Av. Santa fé 2450, Barrio Norte</br>
// Incluye certificado de asistencia.
// </br></br>
// Temario:</br>
// •⁠  ⁠Preparación de la uña</br>
// •⁠  ⁠Correctos adherentes </br>
// •⁠  ⁠Adaptación del tip a la uña natural</br>
// •⁠  ⁠Manejo de torno</br>
// •⁠  ⁠Técnica de limado</br>
// •⁠  ⁠Retiro del sistema</br>
// •⁠  ⁠Esmaltado perfecto</br>
// •⁠  ⁠Aplicación del sistema</br>
// •⁠  ⁠Service</br>
// •⁠  ⁠Recomendación de marcas de insumos
// </br></br>
// Este taller incluye todos los materiales descartables en mesa.</br></br>

// Forma de reservar:</br>
// •⁠  ⁠Se seña abonando 10.000 por transferencia, el resto 15.000 se abona el día de la clase.</br>
// •⁠  ⁠La seña y/o total, no se reintegra en caso de no asistir, tampoco es válido para otra fecha/taller/persona.</br>
// </span>`,
//             },
//             {
//                 title: "Curso online👩‍💻 + Promo Kit inicial 💅",
//                 image: "/images/kit1.jpeg",
//                 available: true,
//                 description: `<span class="text-xs">Promo💥
//                     </br>
//                     Curso online👩‍💻 + Kit inicial 💅
//                     </br>
//                     No te pierdas está oportunidad única
//                     Si deseas iniciar o perfeccionar tus habilidades en el arte de las uñas esta promo es perfecta para vos.
//                     </br>
//                     Incluye 
//                     12 Videos online
//                     12 Productos
//                     </br>
//                     Realizamos envios a todo el país
//                     </br>
//                     Tendrás habilitada la plataforma para que puedas ingresar a los videos pre-grabados por un periodo de 6 meses.
//                     </br>
//                     Además, por cualquier duda relacionada al curso, tenes 1 mes de asesoría gratis.
//                     </br>
//                     Promo hasta agotar stock
//                     </br>
//                     El envío tiene un costo adicional de acuerdo a la zona
//                     </br>
//                     Antes ❌83.000
//                     Ahora ✅68.000
//                     </br>
//                     Contacto 📲11 54847054
//                     </span>`,
//             },
//             {
//                 title: "Kapping en gel + Esmaltado Perfecto",
//                 image: "/images/curso_esmalte_semi.jpeg",
//                 available: true,
//                 description: `<span class="text-xs">Este curso está orientado a personas que quieran iniciar en el mundo de las uñas de manera segura y responsable.
//     </br>
//     También está orientado a personas que iniciaron y tienen muchas dudas (por ejemplo: desprendimiento y otros)
//     </br></br>
//      INFO COMPLETA ⬇️ 📋
//     </br>
//      Modalidad online
//     </br>
//     12 Videos pregrabados
//     </br>
//     El curso se habilita por 6 meses una vez abonada la totalidad del mismo
//     </br>
//     🔍 El curso incluye:
//     </br>
//     📜 Certificado
//     </br>
//     👩🏽‍🎓3 meses de asesoria
//     </br>
//     </br>
//     TEMAS A TRATAR:✅</br>
//     •⁠  ⁠anatomía de las uñas</br>
//     •⁠  ⁠⁠patologías ungueales </br>
//     •⁠  ⁠⁠Tipos de pieles</br>
//     •⁠  ⁠⁠Tipos de manicuria</br>
//     •⁠  ⁠⁠Reconocimiento de materiales</br>
//     •⁠  ⁠⁠Que tipo de base eligir</br>
//     •⁠  ⁠⁠Preparación de la uña natural</br>
//     •⁠  ⁠Manejo de torno</br>
//     •⁠  ⁠⁠Capas de las uñas</br>
//     •⁠  ⁠⁠Manicuria combinada</br>
//     •⁠  ⁠Paso a paso de un esmaltado correcto</br>
//     •⁠  ⁠⁠Técnicas de esmaltado</br>
//     •⁠  ⁠⁠Retirado correcto </br>
//     •⁠  ⁠Kapping en gel</br>
//     </br>
//     </br>
//      LISTA DE MATERIALES:📋</br>
//     •⁠  ⁠⁠corta cutícula/ tijerita </br>
//     •⁠  ⁠⁠lima buffer</br>
//     •⁠  ⁠⁠lima 100/180 y 100/240</br>
//     •⁠  ⁠⁠repujados </br>
//     •⁠  ⁠⁠base coat </br>
//     •⁠  ⁠⁠top coat </br>
//     •⁠  ⁠⁠preparadores ( Ultrabond)</br>
//     •⁠  ⁠⁠color semipermanente </br>
//     •⁠  ⁠⁠liner </br>
//     •⁠  ⁠Cabina</br>
//     •⁠  ⁠Cleanser</br>
//     •⁠  ⁠Wipes</br>
//     </br>
//     Antes ❌ $30.000 =>
//     <strong>AHORA</strong> ✅ $15.000</span>`,
//             },
    
        ]