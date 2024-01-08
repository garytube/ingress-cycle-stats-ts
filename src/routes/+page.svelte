<script lang="ts">
	import '../app.css';
	import YearScore from '$lib/components/YearScore.svelte';
	import CycleList from '$lib/components/CycleList.svelte';
	import { createCycleState } from '$lib/selectedCycle.svelte.js';
	import { setContext } from 'svelte';

	const { data } = $props();

	const lastEntry = data.cycles[data.cycles.length - 1];
	const selectedCycle = createCycleState(lastEntry);

	setContext('selectedCycle', selectedCycle);
	$inspect(selectedCycle.cycle); // updates just fine!
</script>

<!-- // wont update -->
<code>Wont update!| selectedCycle.cycle.id >>> {selectedCycle.cycle.id}</code><br />
<code>Does update| selectedCycle.cycle.id >>> {JSON.stringify(selectedCycle.cycle.id)}</code><br />
<!-- // updates just fine!-->
<!-- BUG! THIS ONLY UPDATES ONCE -->
<h1>{selectedCycle.cycle.cycle} - {selectedCycle.cycle.cycleYear}</h1>
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
