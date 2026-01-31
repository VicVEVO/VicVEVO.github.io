<script lang="ts">
	export let title: string;
	export let company: string;
	export let location: string;
	export let type: string;
	export let dates: string;
	export let duration: string;
	export let description: string;
	export let logo: string;

	let cardEl: HTMLDivElement;

	function handleMove(e: MouseEvent) {
		const rect = cardEl.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const midX = rect.width / 2;
		const midY = rect.height / 2;

		const rotateY = ((x - midX) / midX) * 8;
		const rotateX = -((y - midY) / midY) * 8;

		cardEl.style.transform = `
			rotateX(${rotateX}deg)
			rotateY(${rotateY}deg)
			translateZ(12px)
		`;
		cardEl.style.setProperty('--mx', `${x}px`);
		cardEl.style.setProperty('--my', `${y}px`);
		cardEl.style.setProperty('--hover', '1');
	}

	function reset() {
		cardEl.style.transform = `
			rotateX(0deg)
			rotateY(0deg)
			translateZ(0)
		`;
		cardEl.style.setProperty('--hover', '0');
	}
</script>

<div class="card-3d">
	<div
		class="card-xp"
		style="--logo: url('{logo}')"
		bind:this={cardEl}
		on:mousemove={handleMove}
		on:mouseleave={reset}
	>
		<!-- LOGO À GAUCHE -->
		<img class="xp-logo" src={logo} alt={company} />

		<!-- CONTENU À DROITE -->
		<div class="xp-content">
			<div class="xp-header-text">
				<h3>{title}</h3>

				<div class="xp-tags">
					<span class="tag">
						<img src="/assets/icons/enterprise.svg" alt="" />
						{company}
					</span>
					<span class="tag">
						<img src="/assets/icons/location.svg" alt="" />
						{location}
					</span>
					<span class="tag">
						<img src="/assets/icons/hourglass.svg" alt="" />
						{type}
					</span>
				</div>
			</div>

			<div class="xp-row">
				<img src="/assets/icons/calendar.svg" alt="" />
				<span>{dates}</span>
			</div>

			<hr />

			<div class="xp-row">
				<img src="/assets/icons/time.svg" alt="" />
				<span>{duration}</span>
			</div>

			<hr />

			<p class="xp-description">{description}</p>
		</div>
	</div>
</div>

<style>
	.card-3d {
		perspective: 1000px;
	}

	.card-xp {
		width: 555px;
		background: white;
		border: 1px solid #e2e2e2;
		border-radius: 14px;
		padding: 20px;

		display: flex;
		gap: 20px;

		color: black;

		transform-style: preserve-3d;
		transition: transform 0.15s ease, box-shadow 0.15s ease;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

		position: relative;
		overflow: hidden;

		--mx: 50%;
		--my: 50%;
		--hover: 0;
	}

	.card-xp::before {
		content: "";
		position: absolute;
		inset: 0;

		background:
			radial-gradient(
				400px at var(--mx) var(--my),
				rgba(255, 255, 255, 0.85),
				rgba(255, 255, 255, 1) 70%
			),
			var(--logo);

		background-repeat: no-repeat;
		background-position: center;
		background-size: 600px;
		filter: grayscale(100%);

		opacity: calc(var(--hover));
		transition: opacity 0.2s ease;

		pointer-events: none;
		z-index: 0;
	}



	.card-xp:hover {
		box-shadow:
			0 20px 40px rgba(0, 0, 0, 0.18),
			0 0 0 1px rgba(0, 0, 0, 0.03);
	}

	.xp-logo {
		width: 48px;
		height: 48px;
		object-fit: contain;
		border-radius: 6px;
		flex-shrink: 0;
		transform: translateZ(25px);
	}

	.xp-content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		flex: 1;
		transform: translateZ(15px);
	}

	.xp-header-text h3 {
		margin: 0 0 8px 0;
		font-size: 18px;
		font-weight: 700;
	}

	.xp-tags {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 4px 10px;
		font-size: 13px;
		border: 1px solid #dcdcdc;
		border-radius: 999px;
		background: #fafafa;
		white-space: nowrap;
	}

	.tag img {
		width: 14px;
		height: 14px;
		opacity: 0.7;
	}

	.xp-row {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
	}

	.xp-row img {
		width: 16px;
		height: 16px;
		opacity: 0.7;
	}

	hr {
		border: none;
		border-top: 1px solid #e2e2e2;
		margin: 4px 0;
	}

	.xp-description {
		font-size: 14px;
		line-height: 1.5;
		margin: 0;
		color: #333;
		text-align: justify;
		max-width: 95%;
	}


	@media (max-width: 768px) {
		.card-xp {
			width: 20em;
			border-radius: 10px;
  			padding: 7px;
		}

		.xp-row, .xp-description {
			font-size: 10px;
		}

		.xp-content {
			gap: 5px;
		}

		.xp-header-text h3 {
			font-size: 14px;
		}

		.tag {
			font-size: 9px;
			padding: 2px 6px;
			gap: 4px
		}

		.tag img {
			width: 12px;
			height: 12px;
		}

		.xp-logo {
			width: 40px;
			height: 40px;
		}
	}
</style>
