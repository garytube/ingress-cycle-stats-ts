<script lang="ts">
	import { getContext } from 'svelte';
	import type { Cycle } from '../../types';
	const { cycle } = $props<{ cycle: Cycle }>();

	const selectedCycle = getContext<{ cycle: Cycle }>('selectedCycle');
</script>

<button
	class="bubble"
	onclick={() => (selectedCycle.cycle = cycle)}
	class:enl={cycle.enlightened > cycle.resistance}
	class:active={selectedCycle.cycle.id === cycle.id}
>
	{cycle.id} / {selectedCycle.cycle.id}
</button>

<style>
	.bubble {
		border: none;
		display: inline-block;
		height: 20px;
		width: 20px;
		font-size: 9px;
		position: relative;
		padding: 0px;
		margin: 1px 3px;
		border: 2px solid transparent;
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
		border: 2px solid yellow;
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
