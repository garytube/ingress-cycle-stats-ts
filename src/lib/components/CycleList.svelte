<script lang="ts">
	import { page } from '$app/stores';
	import { groupArrayByYear } from '$lib';
	import CylceCard from './CycleCard.svelte';

	let groupedList = $derived(groupArrayByYear($page.data.cycles));
</script>

<div id="cycleList">
	{#each Object.keys(groupedList).reverse() as year (year)}
		<div class="year">
			<h2>{year}</h2>
			{#each groupedList[Number(year)] as cycle (cycle.id)}
				<CylceCard {cycle} />
			{/each}
		</div>
	{/each}
</div>
