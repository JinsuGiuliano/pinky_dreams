export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    date?: string;
    cursos?: number[];
    enabled?: boolean;
}

export const users: User[] = [
    {
        id: 1,
        name: 'test',
        email: 'test@test.com',
        password: 'test',
        cursos: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        name: 'yumiAlvez',
        email: 'yumiAlvez',
        password: 'yumiAlvez123!',
        cursos: [1, 2, 3]
    },
    {
        id: 3,
        name: 'Nayla Belizan',
        email: 'rodalunaalmacen@gmail.com',
        password: 'naylabelizan',
        cursos: [1, 2, 3]
    },
    {
        id: 4,
        name: 'Romina Fernandez',
        email: 'fromina443@gmail.com',
        password: 'rominafernadez',
        cursos: [1, 2, 3]
    },
    {
        id: 5,
        name: 'Katherina Prada',
        email: 'katyprada17@gmail.com',
        password: 'katherineprada',
        cursos: [1, 2, 3]
    },
    {
        id: 6,
        name: 'Jimena Ortiz',
        email: 'jimenaortizocampo85@gmail.com',
        password: 'jimenaortiz',
        cursos: [1, 2, 3]
    },
    {
        id: 7,
        name: 'Keren Noelia',
        email: 'k.arenoelia5@gmail.com',
        password: 'karennoelia',
        cursos: [1, 2, 3]
    },
    {
        id: 8,
        name: 'Ludmila Salva',
        email: 'ludmilasalva185@gmail.com',
        password: 'ludmilasalva',
        cursos: [1, 2, 3]
    },
    {
        id: 9,
        name: 'Rocio Blazquez',
        email: 'rocio.a.blazquez@gmail.com',
        password: 'rocioblazquez',
        cursos: [1, 2, 3]
    },
    {
        id: 10,
        name: 'Karen',
        email: 'karen.cd95@gmail.com',
        password: 'karencd95',
        cursos: [1,2,3,4]
    },
    {
        id: 11,
        name: 'Irina Chura',
        email: 'irinachura2022@gmail.com',
        password: 'irinachura2022',
        cursos: [1, 2, 3]
    },
    {
        id: 12,
        name: 'Nails Art',
        email: 'nailArt@pinkydreams.com',
        password: 'nailArt2025',
        cursos: [5]
    }
]