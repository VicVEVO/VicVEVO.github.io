<script>
	export let url;
	export let text;
</script>

<div
	class="button"
	role="button"
	tabindex="0"
	on:keypress={() => {
		window.open(url, '_blank');
	}}
	on:click={() => window.open(url, '_blank')}
>
	<p>{text}</p>
	<slot />
</div>
