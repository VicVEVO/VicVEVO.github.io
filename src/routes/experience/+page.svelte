<script>
  import experiences from '$lib/Experiences';
</script>

<svelte:head>
	<title>Victor Barilly — Experience</title>
</svelte:head>

<div class="timeline">
  <h1>Experience</h1>
  {#each experiences as project, i}
    <div class="timeline-item">
      <div
        class="timeline-marker"
        style="--index: {i + 1}"></div>
      <div class="timeline-content"
        style="--index: {i + 1}">
          <div class="logo-title-container">
            {#if project.logo != ''}
              <img src={project.logo} alt="Project logo" class="project-logo" />
            {/if}
            <h3 class="project-title">{project.title}</h3>
          </div>
          <hr>
          <div class="jobtitle-date-container">
            <p1>{project.jobtitle}</p1>
            <p2>{project.date}</p2>
          </div>
          <p>{project.description}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline {
    position: relative;
    margin: 0 auto;
    padding: 2rem 0;
    width: 80%;
    max-width: 800px;
  }

  .timeline h1 {
		text-align: center;
		font-weight: 700;
	}

  @keyframes dateBlinkColor {
    0% {
      color: #6cd4cd;
    }
    95% {
      color: #111;
    }
    100% {
      color: #6cd4cd;
    }
  }

  @keyframes blocBlinkColor {
    0% {
      background: #6cd4cd;
      color: #000;
      box-shadow: 0 0 45px #6cd4cd;
    }
    100% {
      background: #111;
      color: #aaa;
      box-shadow: none;
    }
  }

  @keyframes titleBlinkColor {
    0% {
      color: #000;
    }
    100% {
      color: #fff;
    }
  }

  @keyframes dotBlinkColor {
    0% {
      background-color: #6cd4cd;
      box-shadow: 0 0 45px #6cd4cd;
    }
    95% {
      background-color: #000;
      box-shadow: none;
    }
    100% {
      background-color: #6cd4cd;
      box-shadow: 0 0 55px #6cd4cd;
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }

  .timeline-marker {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 16px;
    height: 16px;
    background-color: #000;
    border-radius: 50%;
    z-index: 2;
    animation: dotBlinkColor 4s infinite;
    animation-delay: calc(0.5s * var(--index));
  }

  .timeline-content {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: #aaa;
		background: #111;
		padding: 2rem;
		width: 100%;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation: blocBlinkColor 4s 1;
    animation-delay: calc(0.5s * var(--index));
  }

  .project-title {
    color: #fff;
    animation: titleBlinkColor 4s 1;
    animation-delay: calc(0.5s * var(--index));
  }

  .logo-title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .jobtitle-date-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-title-container h3 {
    margin-bottom: .3rem;
    color: #fff;
  }

  .timeline-content hr {
    background-color: #3b3b3b;
    border: none;
    height: 1.5px;
    width: 100%;
  }

  .project-logo {
    width: 50px;
    margin-bottom: -1rem;
  }

  .timeline-content p2 {
    font-size: small;
    color: #111;
    display: flex;
    justify-content: right;
    animation: dateBlinkColor 4s infinite;
    animation-delay: calc(0.5s * var(--index));
  }

  .timeline-content p1 {
    font-size: small;
    font-weight: 700;
  }
  .timeline-content p {
    font-size: small;
    text-align: justify;
  }

  @media (min-width: 900px) {
    .timeline > h1 {
        font-size: 48px;
        margin: 50px;
      }
  }

  @media (max-width: 900px) {
    .jobtitle-date-container {
      flex-direction: column;
      align-items: flex-start;
    }

    .logo-title-container h3 {
      font-size: medium;
    }

    .timeline-content p2 {
      font-size: smaller;
    }

    .timeline-content p1 {
      font-size: smaller;
    }

    .project-logo {
      width: 40px;
      margin-bottom: -.5rem;
    }
  }
</style>
