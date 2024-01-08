<script lang="ts">
	import '../app.css';
	import YearScore from '$lib/components/YearScore.svelte';
	import CycleList from '$lib/components/CycleList.svelte';
	import { createCycleState } from '$lib/selectedCycle.svelte.js';
	import { setContext } from 'svelte';

	const { data } = $props();

	const selectedCycle = createCycleState(data.cycles[data.cycles.length - 1]);
	setContext('selectedCycle', selectedCycle);
</script>

<code>DEBUG | selectedCycle.cycle.id >>> {selectedCycle.cycle.id}</code>

<!-- BUG! THIS ONLY UPDATES ONCE -->
<h1>{selectedCycle.cycle.cycleYear}-{selectedCycle.cycle.cycleYear}</h1>
<span>RES {selectedCycle.cycle.resistance}</span>
<span>ENL {selectedCycle.cycle.enlightened}</span>

<div id="cycleList">
	<CycleList />
</div>

<div id="YearScore">
	{#each data.cycleWins as score (score.cycleYear)}
		<YearScore {score} />
	{/each}
</div>

<style>
	#YearScore {
		display: grid;
		grid-auto-flow: row;
	}

	@media (min-width: 768px) {
		#YearScore {
			gap: 20px 30px;
			grid-template-columns: repeat(2, minmax(205px, max-content));
		}
	}
</style>
