<script lang="ts">
	export let title: string;
	export let university: string;
	export let location: string;
	export let dates: string;
	export let logo: string;
</script>

<div class="card">
	<div class="header">
		<img class="logo" src={logo} alt={title} />

		<span class="vertical-divider"></span>

		<div class="header-text">
			<h3>{title}</h3>
		</div>
	</div>

	<div class="univ-text">
		<h4>{university}</h4>
	</div>
	

	<div class="meta">
		<div class="meta-item">
			<img class="logo-item" src="/assets/icons/location.svg" alt="location" />
			{location}
		</div>
		<div class="meta-item">
			<img class="logo-item" src="/assets/icons/calendar.svg" alt="calendar" />
			{dates}
		</div>
	</div>	
</div>


<style>
	.card {
		width: 20em;
		color: black;
		background: white;
		border: 2px solid #CECECE;
		border-radius: 8px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.logo {
		width: 42px;
		height: 42px;
		object-fit: contain;
		filter: grayscale(100%) brightness(0);
	}

	.logo-item {
		width: 15px;
		height: 15px;
	}

	.vertical-divider {
		width: 2px;
		height: 36px;
		background-color: rgb(175 175 175);
	}

	.header-text h3{
		margin: 0;
		font-size: 15px;
		font-weight: 600;
		line-height: 1.2;
	}

	.univ-text h4 {
		margin: 0;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.2;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 6px;
		font-size: 14px;
		border-top: 1px solid #CECECE;
		padding-top: 12px;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	@media (max-width: 768px) {
		.card {
			margin: 0 auto;
		}
	}

</style>
