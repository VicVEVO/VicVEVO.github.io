<script lang="ts">
	import { lang } from '$lib/store/lang';
	import { t } from '$lib/i18n';
	import { Emailto, Linkedin, Youtube, Github } from '$lib/Constants';
</script>

<svelte:head>
	<title>Victor Barilly: Earth Observation Student</title>
</svelte:head>

<main class="hero">
	<h1>
		{t[$lang].hi} <span class="highlight">Victor Barilly</span><br />
		<span class="subtitle">{t[$lang].me}</span>
	</h1>

	<div class="divider"></div>

	<div class="socials">
		<a href={Linkedin} target="_blank" aria-label="LinkedIn">
			<img src="/assets/icons/linkedin.png" alt="LinkedIn" />
		</a>
		<a href={Github} target="_blank" aria-label="GitHub">
			<img src="/assets/icons/github.png" alt="GitHub" />
		</a>
		<a href={Youtube} target="_blank" aria-label="GitHub">
			<img src="/assets/icons/youtube.png" alt="Youtube" />
		</a>
		<a href={Emailto} aria-label="Email">
			<img src="/assets/icons/mail.png" alt="Email" />
		</a>
	</div>
</main>

<style>
	.hero {
		min-height: 105vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
	}

	h1 {
		font-size: 48px;
		font-weight: 700;
		margin: 0;
		line-height: 1.2;
	}

	.highlight {
		color: #99D4D1;
	}

	.subtitle {
		font-size: 32px;
		font-weight: 400;
		display: block;
		margin-top: 10px;
	}

	.divider {
		width: 160px;
		height: 3px;
		background-color: #99D4D1;
		margin: 30px 0;
	}

	.socials {
		display: flex;
		gap: 20px;
	}

	.socials a {
		display: inline-flex;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		justify-content: center;
		align-items: center;
		transition: background 0.3s, transform 0.3s;
	}

	.socials a:hover {
		background: #396F6C;
		transform: translateY(-3px);
	}

	.socials img {
		width: 42px;
		height: 42px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 36px;
		}

		.subtitle {
			font-size: 24px;
		}
	}
</style>
