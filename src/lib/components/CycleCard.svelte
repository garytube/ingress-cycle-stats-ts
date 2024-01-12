<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import type { Cycle } from '../../types';
	const { cycle } = $props<{ cycle: Cycle }>();

	const selectedCycle = getContext<Writable<Cycle>>('cycleStore');
</script>

<button
	class="bubble"
	onmouseenter={() => selectedCycle.set(cycle)}
	onclick={() => selectedCycle.set(cycle)}
	class:enl={cycle.enlightened > cycle.resistance}
	class:active={$selectedCycle.id === cycle.id}
/>

<style>
	.bubble {
		border: none;
		display: inline-block;
		height: 25px;
		width: 25px;
		font-size: 9px;
		position: relative;
		padding: 0px;
		margin: 1px 3px;
		transition: all 0.5s ease 0s;
		background-color: white;
		background: var(--res);
	}
	.bubble:hover {
		box-shadow:
			rgba(0, 0, 0, 0.6) 0px 0px 10px 2px,
			rgba(0, 0, 0, 0.2) 0px 0px 5px 1px inset;
		z-index: 10;
		border-radius: 4px;
		transform: scale(1.3);
	}

	.active {
		background: yellow;
	}

	.enl {
		background: var(--enl);
	}

	@media (min-width: 768px) {
		.bubble {
			height: 25px;
			width: 25px;
		}
	}
</style>
