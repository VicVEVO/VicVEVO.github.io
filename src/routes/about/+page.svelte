<script>
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Victor Barilly - About</title>
</svelte:head>

<main>
	<h1>About me:</h1>
	<img src={"/assets/me.png"} alt="me" class="me" />
	<div class="buttons">
		<div class="button-container">
			<Button
				url = 'assets/CV-fr.pdf'
				text = 'French CV 📄'
			></Button>
		</div>
	</div>
</main>

<style>
	main {
		padding: 0;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		height: 80vh;
		justify-content: center;
		align-items: center;
	}

	.me {
		position: absolute;
		top: 20%;
		left: 60%;
		width: 17rem;
		z-index: -1;
		border-radius: 32%;
	}

	h1 {
		margin: 0 auto;
		font-weight: 700;
		width: 700px;
		margin-left: -30rem !important;
		margin-top: -9rem !important;
	}

	.buttons {
		position: relative;
		top: 40%;
		display: flex;
		flex-wrap: wrap;
  		gap: 10px;
	}

	.button-container {
		cursor: pointer;
		height: 40px;
		border-radius: 10px;
		background: linear-gradient(155deg, rgba(37, 37, 37, 0.85), transparent);
		background-size: 150% 150%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		position: relative;
		overflow: hidden;
		border: 2px solid transparent;
		transition: border 0.3s ease;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	.button-container:hover {
		animation: shine 2s linear infinite;
		background: linear-gradient(110deg, rgba(37, 37, 37, 0.85) 45%, rgba(255, 255, 255, 0.15) 55%, rgba(37, 37, 37, 0.85)); 
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
	  main > h1 {
		  font-size: 48px;
		  margin: 50px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}

	@media (max-width: 900px) {
		main {
			width: 100px;
		}
		h1 {
			margin: 0 auto;
			margin-left: -18.5rem !important;
			margin-top: -10rem !important;
		}
		.me {
			display: none;
		}
		.buttons {
			top: 20%;
			gap: 10px;
			justify-content: center;
		}
		.button-container {
			height: 40px;
			width: 150px;
			font-weight: 400;
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
