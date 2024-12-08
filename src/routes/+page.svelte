<script>
	import { animateTyping } from '$lib/TypingEff'
</script>


<svelte:head>
	<title>Victor Barilly - Main page</title>
</svelte:head>
<main>
	<h1> Welcome, <br /> <span use:animateTyping={[
		"I\'m Victor!",
		"Here is my Portfolio.",
		"To my world!"
	]}></span>
	</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin: 0 auto;
		font-weight: 700;
		text-align: left;
		width: 700px;
		margin-left: -300px !important;
	}

	main > h1 {
		margin: -50px 10px 0;
		font-size: 36px;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (max-width: 900px) {
		h1 {
			margin-left: 0px !important;
			width: 305px;
		}
		main > h1 {
			font-size: 36px;
		}
	}


	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
