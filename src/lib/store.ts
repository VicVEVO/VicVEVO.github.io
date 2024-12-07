import { writable } from 'svelte/store';

export const modalOpened = writable(false);
export const modalContent = writable<'email' | 'github' | 'linkedin' | null>(null);  // Store pour gérer le type de modal

export const customBackground = writable('#0a0908');
