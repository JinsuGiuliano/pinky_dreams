export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}


export const users: User[] = [
    {
        id: 1,
        name: 'test',
        email: 'test@test.com',
        password: 'test'
    },
    {
        id: 1,
        name: 'yumiAlvez',
        email: 'yumiAlvez',
        password: 'yumiAlvez123!'
    }
]