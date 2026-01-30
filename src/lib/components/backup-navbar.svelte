<script lang="ts">
	import Burger from './Tabs.svelte';
	import Logo from '$lib/assets/logo.svg';
	import routes from '$lib/NavRoutes';
	import Modal from '$lib/components/Modal.svelte';
	import { Email } from '$lib/Constants';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
	import { lang } from '$lib/store/lang';
	import { t } from '$lib/i18n';
	import { modalContent, modalOpened } from '$lib/store';
	let opened = false;
	let copied = false;
	export let segment: string;
	const closeNavbar = () => {
		opened = false;
	};
	const copy = () => {
		navigator.clipboard.writeText(Email);
	};
	const toggleLang = () => {
		lang.set($lang === 'fr' ? 'en' : 'fr');
	};

</script>

<Modal>
	<div slot="content" class="modalContainer">
		
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

	</div>
</Modal>

<div class={opened ? 'NavBar open' : 'NavBar'}>
	<div class="innerContainer">
		<a href="/">
			<img src={Logo} alt="logo" class="logo" />
			<span class="name">Victor Barilly</span>
		</a>
		<div class="mobile-actions">
			<img
				class="mobile-lang"
				src={$lang === 'fr'
					? '/assets/icons/FRA.png'
					: '/assets/icons/GBR.png'}
				alt="Language"
				on:click={toggleLang}
			/>
		
			<div class="burger">
				<Burger bind:open={opened} />
			</div>
		</div>
		
		<div class="right">
			<div class="buttons">
				{#each routes as route}
					<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
					on:click={closeNavbar}>
						{t[$lang][route.key]}
					</a>
				{/each}
				<div
					class="button-container"
					role="button"
					tabindex="0"
					on:keypress={() => {
						modalOpened.set(true);
					}}
					on:click={ () => {
						modalOpened.set(true);
					}}
					>
					<p>{t[$lang].contact}</p>
					<slot />
				</div>
				<div class="lang">
					<img
						src="/assets/icons/GBR.png"
						alt="English"
						class:active={$lang === 'en'}
						on:click={() => lang.set('en')}
					/>
					<div class="lang-divider"></div>
					<img
						src="/assets/icons/FRA.png"
						alt="Français"
						class:active={$lang === 'fr'}
						on:click={() => lang.set('fr')}
					/>
				</div>
			</div>
		</div>
	</div>
	{#if opened}
		<div class="responsiveButtons buttons">
			{#each routes as route}
				<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
				on:click={closeNavbar}>
					{t[$lang][route.key]}
				</a>
			{/each}
			<div
				class="button-container"
				role="button"
				tabindex="0"
				on:keypress={() => {
					modalOpened.set(true);
				}}
				on:click={ () => {
					modalOpened.set(true);
				}}
				>
				<p>{t[$lang].contact}</p>
				<slot />
			</div>
		</div>
		{/if}
</div>

<style>
	:global(.logo) {
		cursor: pointer;
		height: 30px;
		width: 30px;
	}

	.name {
		font-size: 18px;
		font-weight: 600;
		position: relative;
		top: -6px;
	}

	.open {
		flex-direction: column !important;
		align-items: center !important;
		height: 367px !important;
		transition: height 0.2s cubic-bezier(0.255, 0.03, 0.515, 0.955);
	}

	.selected {
		position: relative;
		color: white;
	}

	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}

	.modalContainer p {
		margin: 0;
	}

	.button-container {
		padding: 20px;
		cursor: pointer;
		height: 10px;
		margin-left: 30px;
		margin-right: 40px;
		background-size: 150% 150%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		position: relative;
		overflow: hidden;
		transition: border 0.3s ease;
		border: 1px solid rgb(255 255 255);
	}

	.button-container:hover {
		animation: shine 2s linear infinite;
		background: linear-gradient(110deg, rgba(79 111 105 / 0.15) 45%, rgba(153 195 189 / 0.15) 55%, rgba(79 111 105 / 0.15)); 
		background-size: 200% 100%;
		border: 1px solid #99D4D1;
	}

	@keyframes shine {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	.button:hover::after {
		content: '';
		background: #6CD4CD72;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.button.selected:after {
		content: '';
		background: #6cd4cd;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.innerContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		max-width: 900px;
		padding: 0 20px;

		box-sizing: border-box;
	}


	.innerContainer :global(a) {
		height: 30px;
		color: white;
	}

	.NavBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 20;
		background: transparent;

		display: flex;
		justify-content: center;

		padding: 20px 0;
		height: 80px;
	}

	.right {
		display: flex;
		align-items: center;
		gap: 32px;
		margin-left: auto;
	}


	.buttons {
		display: none;
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
	}

	.responsiveButtons {
		width: 100%;
		margin-top: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}


	.responsiveButtons .button {
		max-width: 100px;
		width: 100%;
		text-align: center;
	}

	.buttons .button {
		padding: 0;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		text-decoration: none;
		position: relative;
		margin: 10px;
		color: hsla(0, 0%, 100%, 0.4);
	}

	.button.selected {
		color: white;
	}

	.burger :global(button) {
		margin: 0;
	}

	.lang {
		display: flex;
		gap: 13px;
		align-items: center;
	}

	.lang img {
		width: 26px;
		height: 26px;
		cursor: pointer;
		opacity: 0.5;
		filter: grayscale(100%);
		transition: all 0.3s ease;
		border-radius: 3px;
	}

	.lang img:hover {
		opacity: 0.8;
	}

	.lang img.active {
		opacity: 1;
		filter: none;
	}

	.lang-divider {
		width: 1px;
		height: 30px;
		background-color: #ffffff;
	}

	.mobile-actions {
		display: flex;
		align-items: center;
		gap: 14px;
		/* margin-left: auto; */
	}


	.mobile-lang {
		width: 26px;
		height: 26px;
		cursor: pointer;
		border-radius: 3px;
		display: block;
	}

	@media (min-width: 900px) {
		.NavBar {
			padding: 20px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* max-width: 900px; */
		}

		.buttons {
			display: flex;
		}

		.NavBar .burger {
			display: none !important;
		}
		.responsiveButtons {
			display: none !important;
		}
		.mobile-actions {
			display: none;
		}
	}
</style>
