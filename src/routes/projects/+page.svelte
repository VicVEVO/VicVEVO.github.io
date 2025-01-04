<script>
	import Button from '$lib/components/Button.svelte';
	import projects from '$lib/Projects';
</script>

<svelte:head>
	<title>Victor Barilly — Projects</title>
</svelte:head>

<div class="projectContainer">
	<div class="projects">
		<h1>Some of my Projects</h1>
		{#each projects as project}
			<div class="project">
				<div class="header">
					<h2>
						{project.title}
					</h2>
					<div class="techsContainer">
						Technologies:
						<div class="techs">
							{#each project.technologies as tech}
								<div>{tech}</div>
							{/each}
						</div>
					</div>
				</div>
				<p>
					{project.description}
				</p>
                {#if project.url != ''}
                    <div class="button-container">
                        <Button
                            url = {project.url}
                            text = 'Show more'
                        ></Button>
                    </div>
                {/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.projectContainer {
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

	.projectContainer .projects {
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

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		color: #aaaaaa;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button-container {
		cursor: pointer;
		height: 40px;
		border-radius: 10px;
		background: linear-gradient(155deg, rgba(114, 114, 114, 0.15), transparent);
		background-size: 150% 150%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		position: relative;
		overflow: hidden;
		border: 2px solid transparent;
		transition: border 0.3s ease;
	}

	.button-container:hover {
		animation: shine 2s linear infinite;
		background: linear-gradient(110deg, rgba(114, 114, 114, 0.15) 45%, rgba(255, 255, 255, 0.15) 55%, rgba(114, 114, 114, 0.15)); 
		background-size: 200% 100%;
		border: 2px solid rgb(42, 42, 42);
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
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
	}

	@media (max-width: 900px) {
		.techsContainer {
			font-size: small;
		}
		
		h2 {
			font-size: medium;
		}

		.project p {
			font-size: small;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
