import { writable } from "svelte/store";
import { User } from "../data/users";
import { Curso } from "../data/cursos";

export const CurrentUser = writable({} as User);

export let UsersStore = writable({} as User[]);
export let CourseStore = writable([] as Curso[])