<svelte:head>
	<title>{t[$lang].impact} | Victor Barilly</title>
</svelte:head>

<script lang="ts">
	import { lang } from '$lib/store/lang';
	import { t } from '$lib/i18n';

	import { derived } from 'svelte/store';
	export const i18n = derived(lang, ($lang) => t[$lang]);

</script>

<!-- ABOUT ME -->
<section class="about-hero">
	<div class="about-hero-overlay">
		<h1>
			<span class="highlight">{t[$lang].impact}</span><br />
		</h1>

		<div class="divider"></div>

	</div>
</section>

<!-- MORE ABOUT ME -->

<section class="more-section">

	<div class="split-section-debut">
		<div class="image-block">
			<a href="https://www.youtube.com/watch?v=ljh7DFxi50k" target="_blank" rel="noopener noreferrer">
				<img src="/assets/docu.jpg" alt="About me" />
			</a>
		</div>		
		<div class="text-block">
			<h2>{t[$lang].docu.title}</h2>
			<div class="section-line"></div>
			<p>
				{t[$lang].docu.desc1}
			</p>
		</div>
	</div>
	<div class="blic-bloc">
		<p>
			{t[$lang].docu.desc2}
		</p>
	</div>

	<div class="split-section">
		<div class="text-block">
			<p>
				{t[$lang].docu.desc3}
			</p>
		</div>
		<div class="image-block-2">
			<img src="/assets/ecole-grain2.jpg" alt="About me" />
		</div>
	</div>

	<div class="split-section-2">
		<div class="text-block">
			<h2>{t[$lang].sport.title}</h2>
			<div class="section-line"></div>
		</div>

		<div class="text-block">
			<p>
				{t[$lang].sport.desc}
			</p>
			<div class="utmb">
				<img src="/assets/icons/50K.avif" alt="utmb" />
			</div>
		</div>
	</div>

	<div class="full-image">
		<img src="/assets/mountains.jpg" alt="" />
	</div>

</section>

<style>
	.about-hero {
		position: relative;
		height: 60vh;
		background-image: url('/assets/commitments3.jpg');
		background-size: cover;
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
		background-position: center;
	}


	.about-hero-overlay {
		min-height: 55vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
	}

	.about-hero h1 {
		font-size: 42px;
		font-weight: 600;
	}

	.highlight {
		color: white;
		font-weight: bold;
		font-size: 60px;
	}

	.divider {
		width: 160px;
		height: 6px;
		background-color: #99D4D1;
		margin-top: -30px;
	}

	/* More about me */

	.more-section {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.split-section-debut {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
		margin-top: 30px;
		text-align: justify;
	}

	.split-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
		text-align: justify;
	}

	.blic-bloc {
		text-align: justify;
	}

	.split-section-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		text-align: justify;
	}

	.text-block h2 {
		font-size: 50px;
		font-weight: 700;
		margin: 0;
	}

	.section-line {
		width: 100px;
		height: 2px;
		background: #7fc3bf;
		margin: 12px 0 20px;
	}

	.text-block p {
		font-size: 14px;
		white-space: pre-line;
		line-height: 1.6;
	}

	.image-block img {
		width: 100%;
		border-radius: 12px;
		object-fit: cover;
		max-height: 576px;
		transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
	}

	.image-block-2 img {
		width: 100%;
		border-radius: 12px;
		object-fit: cover;
		max-height: 576px;
	}

	.image-block img:hover {
		transform: scale(1.01);
		filter: brightness(1.15);
		box-shadow: 0 0px 30px rgba(254 254 254 / 0.26);
	}

	.utmb img {
		width: 20%;
		float: right;
	}

	.full-image {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.full-image img {
		width: 100%;
		border-radius: 18px;
		object-fit: cover;
		max-height: 350px;
		margin-bottom: 30px;
	}

	@media (max-width: 768px) {
		.highlight {
			font-size: 40px;
		}

		.split-section-debut {
			display: flex;
			flex-direction: column;
			gap: 24px;
			margin-top: 30px;
			margin-left: 10px;
			margin-right: 10px;
		}

		.split-section-debut .text-block {
			order: 1;
		}

		.split-section-debut .image-block {
			order: 2;
		}

		.text-block h2 {
			font-size: 45px;
		}

		.blic-bloc {
			margin-left: 10px;
			margin-right: 10px;
			font-size: 14px;
		}

		.split-section {
			display: flex;
			flex-direction: column;
			gap: 24px;
			margin-top: 0;
			margin-left: 10px;
			margin-right: 10px;
		}

		.split-section .text-block {
			order: 2;
		}

		.split-section .image-block-2 {
			order: 1;
		}

		.split-section-2 {
			display: block;
			margin-top: -30px;
			margin-left: 10px;
  			margin-right: 10px;
		}

		.full-image img {
			max-height: 123px;
		}
	}

</style>