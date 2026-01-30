<script lang="ts">
	import { slide } from 'svelte/transition';
	import { lang } from '$lib/store/lang';
	import { t } from '$lib/i18n';
	import { Emailto, Linkedin, Youtube, Github } from '$lib/Constants';
	import Card from '$lib/components/Card.svelte';
	import CardXp from '$lib/components/CardXp.svelte';
	import { derived } from 'svelte/store';
	export const i18n = derived(lang, ($lang) => t[$lang]);

	type Accordion = 'more' | 'education' | 'experience' | null;
	let openAccordion: Accordion = 'more';
	let moreRef: HTMLElement;
	let educationRef: HTMLElement;
	let experienceRef: HTMLElement;

	function scrollToAccordion(name: Accordion) {
		const map = {
			more: moreRef,
			education: educationRef,
			experience: experienceRef
		};

		const el = map[name];
		if (!el) return;

		setTimeout(() => {
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}, 50);
	}
	function toggleAccordion(name: Accordion) {
		openAccordion = openAccordion === name ? null : name;
		scrollToAccordion(name);
	}

</script>

<svelte:head>
	<title>{t[$lang].about} | Victor Barilly</title>
</svelte:head>

<!-- ABOUT ME -->
<section class="about-hero">
	<div class="about-hero-overlay">
		<h1>
			{t[$lang].about}<br />
			<span class="highlight">Victor Barilly</span><br />
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
			<a href={Youtube} target="_blank" aria-label="Youtube">
				<img src="/assets/icons/youtube.png" alt="Youtube" />
			</a>
			<a href={Emailto} aria-label="Email">
				<img src="/assets/icons/mail.png" alt="Email" />
			</a>
		</div>
	</div>
</section>

<!-- MORE ABOUT ME -->
<div
	class="accordion-header"
	bind:this={moreRef}
	on:click={() => toggleAccordion('more')}
>
	<img src="/assets/icons/caret--left.svg" class:open={openAccordion === 'more'} />
	<span>{t[$lang].aboutdesc.title}</span>
	<img src="/assets/icons/caret--right.svg" class:open={openAccordion === 'more'} />
</div>

{#if openAccordion === 'more'}
	<section class="more-section" transition:slide>

		<div class="split-section">
			<div class="text-block">
				<h2>{t[$lang].about}</h2>
				<div class="section-line"></div>
				<p>
					{t[$lang].aboutdesc.desc}
				</p>
			</div>

			<div class="image-block">
				<img src="/assets/pic-of-me.jpg" alt="About me" />
			</div>
		</div>

		<div class="full-image">
			<img src="/assets/glacier.jpg" alt="" />
		</div>

		<div class="split-section-2">
			<div class="text-block">
				<h2>{t[$lang].start.title}</h2>
				<div class="section-line"></div>
			</div>

			<div class="text-block">
				<p>
					{t[$lang].start.desc}
				</p>
			</div>
		</div>

		<div class="split-section">
			<div class="image-block">
				<img src="/assets/next-step.jpg" alt="About me" />
			</div>
			<div class="text-block">
				<h2>{t[$lang].next.title}</h2>
				<div class="section-line"></div>
				<p>
					{t[$lang].next.desc}
				</p>
			</div>
		</div>

	</section>
{/if}

<!-- EDUCATION -->

<div
	class="accordion-header"
	bind:this={educationRef}
	on:click={() => toggleAccordion('education')}
>
	<img src="/assets/icons/caret--left.svg" class:open={openAccordion === 'education'} />
	<span>{t[$lang].education.title}</span>
	<img src="/assets/icons/caret--right.svg" class:open={openAccordion === 'education'} />
</div>

{#if openAccordion === 'education'}
	<section
		class="timeline-section"
		transition:slide
	>
	<div class="timeline-layout">
		<div class="timeline-stack">
			<img
				class="left-arrow"
				src="/assets/icons/caret--left.svg"
				alt=""
			/>
				<div class="timeline-vertical-line-1"></div>
				<div class="timeline-vertical-line-2"></div>
				<div class="timeline-simple">
					<div class="timeline-horizontal-line"></div>
					<div class="timeline-cards">
						<div class="timeline-item">
							<img
								class="timeline-dot"
								src="/assets/icons/dot.svg"
								alt=""
							/>
							<Card
								title={t[$lang].card1.title}
								university={t[$lang].card1.university}
								location={t[$lang].card1.location}
								dates={t[$lang].card1.dates}
								logo={t[$lang].card1.logo}
							/>
						</div>
						
						<div class="timeline-item">
							<img
								class="timeline-dot"
								src="/assets/icons/dot.svg"
								alt=""
							/>
							<Card
								title={t[$lang].card2.title}
								university={t[$lang].card2.university}
								location={t[$lang].card2.location}
								dates={t[$lang].card2.dates}
								logo={t[$lang].card2.logo}
							/>
						</div>
					</div>
				</div>

				<div class="timeline-simple">
					<div class="timeline-horizontal-line"></div>
					<div class="timeline-cards">
						<div class="timeline-item">
							<img
								class="timeline-dot"
								src="/assets/icons/dot.svg"
								alt=""
							/>
							<Card
								title={t[$lang].card4.title}
								university={t[$lang].card4.university}
								location={t[$lang].card4.location}
								dates={t[$lang].card4.dates}
								logo={t[$lang].card4.logo}
							/>
						</div>

						<div class="timeline-item">
							<img
								class="timeline-dot"
								src="/assets/icons/dot.svg"
								alt=""
							/>
							<Card
								title={t[$lang].card3.title}
								university={t[$lang].card3.university}
								location={t[$lang].card3.location}
								dates={t[$lang].card3.dates}
								logo={t[$lang].card3.logo}
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="timeline-text-right">
				<p>
					{t[$lang].education.desc}
				</p>
			</div>
		</div>
	</section>
{/if}

<div
	class="accordion-header"
	bind:this={experienceRef}
	on:click={() => toggleAccordion('experience')}
>
	<img src="/assets/icons/caret--left.svg" class:open={openAccordion === 'experience'} />
	<span>{t[$lang].experience.title}</span>
	<img src="/assets/icons/caret--right.svg" class:open={openAccordion === 'experience'} />
</div>

{#if openAccordion === 'experience'}
	<section
		class="timeline-section"
		transition:slide
	>
		<div class="experience-timeline">
		
			<div class="experience-item">
				<div class="card left">
					<CardXp
						title={t[$lang].xpcard1.title}
						company={t[$lang].xpcard1.company}
						location={t[$lang].xpcard1.location}
						type={t[$lang].xpcard1.type}
						dates={t[$lang].xpcard1.dates}
						duration={t[$lang].xpcard1.duration}
						description={t[$lang].xpcard1.description}
						logo={t[$lang].xpcard1.logo}
					/>
				</div>
		
				<div class="dot-wrapper">
					<img src="/assets/icons/dot.svg" alt="" />
				</div>
			</div>
		
			<div class="experience-item">
				<div class="card right">
					<CardXp
						title={t[$lang].xpcard2.title}
						company={t[$lang].xpcard2.company}
						location={t[$lang].xpcard2.location}
						type={t[$lang].xpcard2.type}
						dates={t[$lang].xpcard2.dates}
						duration={t[$lang].xpcard2.duration}
						description={t[$lang].xpcard2.description}
						logo={t[$lang].xpcard2.logo}
					/>
				</div>
		
				<div class="dot-wrapper">
					<img src="/assets/icons/dot.svg" alt="" />
				</div>
			</div>
		
			<div class="experience-item">
				<div class="card left">
					<CardXp
						title={t[$lang].xpcard3.title}
						company={t[$lang].xpcard3.company}
						location={t[$lang].xpcard3.location}
						type={t[$lang].xpcard3.type}
						dates={t[$lang].xpcard3.dates}
						duration={t[$lang].xpcard3.duration}
						description={t[$lang].xpcard3.description}
						logo={t[$lang].xpcard3.logo}
					/>
				</div>
		
				<div class="dot-wrapper">
					<img src="/assets/icons/dot.svg" alt="" />
				</div>
			</div>

			<div class="experience-item">
				<div class="card right">
					<CardXp
						title={t[$lang].xpcard4.title}
						company={t[$lang].xpcard4.company}
						location={t[$lang].xpcard4.location}
						type={t[$lang].xpcard4.type}
						dates={t[$lang].xpcard4.dates}
						duration={t[$lang].xpcard4.duration}
						description={t[$lang].xpcard4.description}
						logo={t[$lang].xpcard4.logo}
					/>
				</div>
		
				<div class="dot-wrapper">
					<img src="/assets/icons/dot.svg" alt="" />
				</div>
			</div>

			<div class="experience-item">
				<div class="card left">
					<CardXp
						title={t[$lang].xpcard5.title}
						company={t[$lang].xpcard5.company}
						location={t[$lang].xpcard5.location}
						type={t[$lang].xpcard5.type}
						dates={t[$lang].xpcard5.dates}
						duration={t[$lang].xpcard5.duration}
						description={t[$lang].xpcard5.description}
						logo={t[$lang].xpcard5.logo}
					/>
				</div>
		
				<div class="dot-wrapper">
					<img src="/assets/icons/dot.svg" alt="" />
				</div>
			</div>
		</div>
	
	</section>
{/if}


<style>
	.about-hero {
		position: relative;
		height: 100vh;
		background-image: url('/assets/about-me.jpg');
		background-size: cover;
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
		background-position: center;
	}


	.about-hero-overlay {
		min-height: 95vh;
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
		color: black;
		background-color: #99D4D1;
		font-size: 60px;
	}

	.about-hero .subtitle {
		font-size: 20px;
		font-weight: 400;
		font-style: italic;
		display: block;
		margin-top: 10px;
		margin-bottom: -30px;
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

	.socials img {
		display: inline-flex;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		justify-content: center;
		align-items: center;
		transition: background 0.3s, transform 0.3s;
	}

	.socials img:hover {
		background: #396F6C67;
		transform: translateY(-3px);
	}

	/* Accordion */

	.accordion-header {
		width: 100vw;
		height: 50px;
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;

		background: #99D4D1;
		color: black;
		font-weight: 600;
		font-size: 20px;

		cursor: pointer;
		user-select: none;

		transition: background 0.3s;
	}

	.accordion-header:hover {
		background: #7fc3bf;
	}

	.accordion-header img {
		width: 18px;
		height: 18px;
		transition: transform 0.3s;
	}

	.accordion-header img.open {
		transform: rotate(180deg);
	}

	/* More about me */

	.more-section {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.split-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
		margin-top: 30px;
	}

	.split-section-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		margin-top: 30px;
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
		line-height: 1.6;
		white-space: pre-line;
		text-align: justify;
	}

	.image-block img {
		width: 100%;
		border-radius: 12px;
		object-fit: cover;
		max-height: 576px;
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
		max-height: 453px;
		margin-top: 30px;
	}

	/* Education */

	.timeline-layout {
		display: flex;
		gap: 80px;
		align-items: center;
	}

	.left-arrow {
		position: absolute;
		top: -19px;
		left: -33px;
		transform: translateX(-50%);
		width: 40px;
		height: 40px;
		z-index: 2;
		filter: brightness(0) saturate(100%) invert(100%) sepia(54%) saturate(1551%) hue-rotate(151deg) brightness(82%) contrast(101%);
	}

	.timeline-dot {
		position: absolute;
		top: -41px;
		left: 50%;
		transform: translateX(-50%);
		width: 20px;
		height: 20px;
		z-index: 2;
		filter: invert(1);
	}

	.timeline-stack {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-left: 42px;
		margin-top: 30px;
		margin-bottom: 40px;
	}

	.timeline-vertical-line-1 {
		position: absolute;
		left: 841px;

		top: 0px;
		bottom: 246px;
	}

	.timeline-vertical-line-2 {
		position: absolute;
		left: -30px;

		top: calc(100% - 244px);
		bottom: -13px;
	}
	.timeline-vertical-line-1,
	.timeline-vertical-line-2 {
		width: 2px;
		background: repeating-linear-gradient(
			to bottom,
			#99D4D1 0 12px,
			transparent 12px 22px
		);
	}

	.timeline-simple {
		position: relative;
		max-width: 700px;
	}

	.timeline-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		position: relative;
	}

	.timeline-horizontal-line {	
		margin-left: -30px;
		margin-bottom: 30px;
		height: 2px;
		width: 125%;
		position: relative;
		background: repeating-linear-gradient(
			to right,
			#99D4D1 0 12px,
			transparent 12px 22px
		);
	}

	.timeline-item {
		position: relative;
	}

	.timeline-section {
		display: flex;
		align-items: flex-start;
		gap: 80px;
	}

	.timeline-text-right {
		margin-left: 95px;
		margin-top: 40px;
		text-indent: 10%;
		text-align: justify;
		white-space: pre-line;
	}

	/* Timeline experiences */

	.experience-timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 60px;
		margin: 60px auto;
	}

	.experience-item {
		display: grid;
		grid-template-columns: 1fr 60px 1fr;
		align-items: center;
		position: relative;
	}

	.dot-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	.dot-wrapper img {
		width: 16px;
		height: 16px;
		filter: invert(1);
		z-index: 2;
	}

	.card.left {
		grid-column: 1;
		justify-self: end;
	}

	.experience-item:nth-child(even) .card {
		grid-column: 3;
		justify-self: start;
	}

</style>