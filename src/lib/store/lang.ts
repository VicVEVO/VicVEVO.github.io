import { writable } from 'svelte/store';

export type Lang = 'fr' | 'en';

export const lang = writable<Lang>('en');
