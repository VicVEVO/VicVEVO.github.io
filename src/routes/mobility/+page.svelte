<script>
	import mobilities from '$lib/Mobility';
</script>

<svelte:head>
	<title>Victor Barilly — Mobility</title>
</svelte:head>

<div class="mobilityContainer">
	<div class="mobilities">
		<h1>Mobility (outdated)</h1>
		{#each mobilities as mobility}
			<div class="mobility">
				<img src={mobility.img} alt={mobility.title} class="mobilityImage" />
				<div class="header">
					<h2>
						{mobility.title}
					</h2>
				</div>
				<p>
					{mobility.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.mobilityContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.mobilityContainer .mobilities {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.mobility {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 25px;
		transition: transform 0.2s ease-in-out;
	}

	.mobilityImage {
		width: 100%;
		height: auto;
		border-radius: 15px;
		margin-bottom: 1rem;
		object-fit: cover;
	}

	.mobility p {
		color: #aaaaaa;
	}

	.mobilities {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	@keyframes shine {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	@media (min-width: 900px) {
		.mobilityContainer {
			padding: 0;
		}
		.mobilities > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.mobilities {
			grid-template-columns: 1fr;
		}

		.mobilities .mobility {
			min-height: 200px;
		}
	}

	@media (max-width: 900px) {
		h2 {
			font-size: medium;
		}

		.mobility {
			padding: .7rem;
		}

		.mobility p {
			font-size: small;
		}
	}

	@media (min-width: 600px) {
		.mobilities {
			grid-template-columns: 1fr;
		}
	}
</style>
