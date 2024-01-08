<script lang="ts">
	import { page } from '$app/stores';
	import { groupArrayByYear } from '$lib';
	import { getContext } from 'svelte';
	import CylceCard from './CycleCard.svelte';

	let groupedList = $derived(groupArrayByYear($page.data.cycles));
</script>

<div id="cycleList">
	{#each Object.keys(groupedList) as year (year)}
		<div class="year">
			<h2>{year}</h2>
			{#each groupedList[Number(year)] as cycle (cycle.id)}
				<CylceCard {cycle} />
			{/each}
		</div>
	{/each}
</div>
