<script lang="ts">
	import '../app.css';
	import YearScore from '$lib/components/YearScore.svelte';
	import CycleList from '$lib/components/CycleList.svelte';
	import { cycleStore } from '$lib/selectedCycle.svelte.js';
	import { setContext } from 'svelte';

	const { data } = $props();
	const lastEntry = data.cycles[data.cycles.length - 1];
	cycleStore.set(lastEntry);
	setContext('cycleStore', cycleStore);
</script>

<div class="center">
	<h1>{$cycleStore.cycleYear} - {$cycleStore.cycle}</h1>
	<span class="score res" class:win={$cycleStore.resistance >= $cycleStore.enlightened}
		>RES: {$cycleStore.resistance}
	</span>
	<span class="score enl" class:win={$cycleStore.enlightened > $cycleStore.resistance}
		>ENL: {$cycleStore.enlightened}
	</span>
</div>

<div class="wrapper">
	<div id="cycleList">
		<CycleList />
	</div>

	<div id="YearScore">
		{#each data.cycleWins as score (score.cycleYear)}
			<YearScore {score} />
		{/each}
	</div>
</div>

<style>
	#YearScore {
		display: grid;
		grid-auto-flow: row;
	}

	.wrapper {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	@media (min-width: 768px) {
		#YearScore {
			gap: 20px 30px;
			grid-template-columns: repeat(2, minmax(205px, max-content));
		}
	}

	.center {
		text-align: center;
		padding: 0 1rem;
	}
	.score {
		padding: 0.1em 0.25em;
		font-size: 21px;
		border-radius: 0px;
		letter-spacing: 0.1em;
		font-weight: 300;
		font-family: coda;
	}

	.enl {
		color: var(--enl);
	}
	.win {
		color: rgb(0, 0, 0);
	}
	.res.win {
		background: var(--res);
	}
	.enl.win {
		background: var(--enl);
	}
</style>
