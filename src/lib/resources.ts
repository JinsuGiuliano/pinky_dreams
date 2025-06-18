
import { Curso } from '../data/cursos';
import { User } from '../data/users';
import { UsersStore, CourseStore } from './store'

let clientId = '1010798374326-thenlc6ae3n67us8v8v4m3rq003b9r22.apps.googleusercontent.com';
let api_key = 'AIzaSyC5NcbKtDjADg_Pe00PN1z-8LY1nE3pYUY'
let scopes = 'https://www.googleapis.com/auth/spreadsheets';
let spreadsheetID = '12F4ACOczPzCGirVoGacb3y6l0e7IzuIMAbYdiO4mND8';
let baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/`

const cache = new Map<string, any>();

let doFetch = fetch

export function getStudents() { 
    let range = 'Alumnos!A2:XFD'
    let url = `${baseURL}${range}?key=${api_key}`

    if (cache.has(url)) {
        return Promise.resolve(cache.get(url));
    }

    return doFetch(url)
        .then((response) => {
            cache.set(url, response);
            return response;
        });
}

export function getCourses() { 
    let range = 'Cursos!A2:XFD'
    let url = `${baseURL}${range}?key=${api_key}`
    
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url));
    }

    return doFetch(url)
        .then((response) => {
            cache.set(url, response);
            return response;
        });
}

export function loadUsers() {
    getStudents()
    .then(async (response) => {
        if (!response.ok) {
            // Handle HTTP errors (e.g., 404, 403, 500)
            const errorData = await response.json();
            console.log(`HTTP error! Status: ${response.status}, Message: ${errorData.error.message}`);
        }
        const data = await response.json();
        let users:User[]  = data.values.map((row) => {
            return {
                id: row[0],
                name: row[1],
                email: row[2],
                password: row[3],
                cursos: row[4],
                enabled: row[5] == "si",
                } as User;
        });

        UsersStore.set(users);
    })
    .catch((err) => {
        console.log(err)
    })
}

export function loadCourses() { 
    getCourses()
    .then(async (response) => {
        if (!response.ok) {
            const errorData = await response.json();
            console.log(`HTTP error! Status: ${response.status}, Message: ${errorData.error.message}`);
        }

        const data = await response.json();
        let cursos: Curso[] = data.values.map((row) => {
            let imgURL = extractIDfromGoogleDriveImageURL(row[2]);
            return {
                ID: row[0],
                title: row[1],
                image: imgURL,
                precio: row[3],
                description: row[4],
                linkPago: row[5],
                linkPagoRealizado: row[6],
                available: row[7] == "si",
            } as Curso;
        });

        CourseStore.set(cursos);
    })
    .catch((err) => {
        console.log(err)
    })
}

function extractIDfromGoogleDriveImageURL(url: string) {
    let formated = `https://drive.google.com/uc?id=`
    const regex = /\/d\/([^/]+)\/view\?usp=sharing/;
    const match = url.match(regex);
    return match ? formated + match[1] : url;
}