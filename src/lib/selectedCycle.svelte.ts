import type { Cycle } from '../types';

export function createCycleState(initialValue: Cycle) {
	let cycle = $state<Cycle>(initialValue);

	return {
		get cycle() {
			return cycle;
		},
		set cycle(newValue: Cycle) {
			cycle = newValue;
		}
	};
}
