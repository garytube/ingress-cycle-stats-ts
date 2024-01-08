<script lang="ts">
	import type { CycleYear } from './../../types.ts';
	const { score } = $props<{ score: CycleYear }>();
</script>

<div class="score__box">
	<h2 class="score__year">CYCLES WON {score.cycleYear}</h2>
	<span class="score res" class:win={score.winner === 'resistance'}>RES {score.res_wins}</span>
	<span class="score enl" class:win={score.winner === 'enlightened'}>ENL {score.enl_wins}</span>
	<div class="chart">coming soon</div>
</div>

<style>
	.score__box {
		display: block;
		text-align: center;
	}
	h2 {
		font-family: var(--ff);
		display: block;
		margin: 0.5em 0;
		font-size: 1.425rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		width: 100%;
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
