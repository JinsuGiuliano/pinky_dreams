import { writable } from "svelte/store";
import { User } from "../../data/users";

export const CurrentUser = writable({} as User);