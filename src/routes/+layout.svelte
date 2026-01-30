<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { customBackground } from '$lib/store';
	import { tsParticles } from "@tsparticles/engine";
	import { loadStarsPreset } from "@tsparticles/preset-stars";

	onMount(async () => {
	await loadStarsPreset(tsParticles);
	await tsParticles.load({
		id: "tsparticles",
		options: {
			preset: "stars",
			particles: {
			color: {
				value: ["#6cd4cd", "#ffffff", "#ffffff"]
			},
			number: {
				value: 50,
			},
			},
		},
		});
	});

	interface CssVariables {
		[name: string]: string;
	}

	const cssVariables = (
		node: HTMLElement,
		variables: CssVariables
	): { update: (variables: CssVariables) => void } => {
		setCssVariables(node, variables);

		return {
			update(variables: CssVariables) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: CssVariables): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};

</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

<div id="tsparticles"></div>

<Navbar segment={$page.url.pathname} />

<slot />

<style>

	#tsparticles {
		position: fixed;
		z-index: -1;
	}

	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: white;
		margin: 0;
		box-sizing: border-box;
		display: block;
		line-height: 1.75;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: black;
		background: #6cd4cd;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	:global(a) {
		text-decoration: none;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
	@media (min-width: 600px) {
	}

@keyframes shine {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}


</style>
