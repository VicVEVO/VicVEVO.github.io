<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { customBackground } from '$lib/store';
	import { Email } from '$lib/Constants';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
	import { modalContent, modalOpened } from '$lib/store';

	onMount(async () => {
	const { loadStarsPreset } = await import('@tsparticles/preset-stars');

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

	let copied = false;
	const cookieEnabled = false;
	$: showCookieModal = false;

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

	const copy = () => {
		navigator.clipboard.writeText(Email);
	};

	const openModal = (type: 'email' | 'github' | 'linkedin') => {
		modalContent.set(type);
		modalOpened.set(true);
	};

</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

<div id="tsparticles"></div>

<Modal>
	<div slot="content" class="modalContainer">
		{#if $modalContent === 'email'}
			<h1>Email:</h1>
			<div>
				<p>{Email}</p>
				&nbsp;
				<div class="tooltip">
					<Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
						<div
							id="clipboard"
							role="button"
							tabindex="0"
							on:keypress={() => {
								copied = true;
								copy();
								setTimeout(() => {
									copied = false;
								}, 500);
							}}
							on:click={() => {
								copied = true;
								copy();
								setTimeout(() => {
									copied = false;
								}, 500);
							}}
						>
							<div>
								<FaCopy />
							</div>
						</div>
					</Tooltip>
				</div>
			</div>
		{/if}

		{#if $modalContent === 'github'}
			<h1>You will be redirected to my GitHub account !</h1>
			<div class="button-container">
				<Button
					url = 'https://github.com/VicVEVO'
					text = 'continue'
				></Button>
			</div>
		{/if}

		{#if $modalContent === 'linkedin'}
			<h1>You will be redirected to my Linkedin account !</h1>
			<div class="button-container">
				<Button
					url = 'https://www.linkedin.com/in/victor-barilly-url/'
					text = 'continue'
				></Button>
			</div>
		{/if}
	</div>
</Modal>
<Navbar segment={$page.url.pathname} />

<slot />

<footer>
	<div class="icons">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
				openModal('email');
			}}

			on:click={() => {
				modalOpened.set(true);
				openModal('email');
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</div>

		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
				openModal('github');
			}}
			on:click={() => {
				modalOpened.set(true);
				openModal('github');
			}}
		>
			<div class="icon">
				<FaGithub />
			</div>
		</div>

		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
				openModal('linkedin');
			}}
			on:click={() => {
				modalOpened.set(true);
				openModal('linkedin');
			}}
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</div>
	</div>
</footer>

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
		display: grid;
		line-height: 1.75;
		place-items: center;
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

	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}

	.modalContainer p {
		margin: 0;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		max-width: 900px;
		text-align: center;
		width: 100%;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
	@media (min-width: 600px) {
	}
	
	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 0px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.5s ease;
		width: 40px;
	}
	.icon:hover {
		color: #6cd4cd;
	}
	
	.button-container {
		cursor: pointer;
		height: 40px;
		max-width: 200px;
		border-radius: 10px;
		background: linear-gradient(155deg, rgba(114, 114, 114, 0.15), transparent);
		margin: auto;
		background-size: 150% 150%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		position: relative;
		overflow: hidden;
	}

	.button-container:hover {
	animation: shine 2s linear infinite;
	}

@keyframes shine {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.button-container:hover {
  background: linear-gradient(110deg, rgba(114, 114, 114, 0.15) 45%, rgba(255, 255, 255, 0.15)55%,rgba(114, 114, 114, 0.15)); 
  background-size: 200% 100%;
}

</style>
