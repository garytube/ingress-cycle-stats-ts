import type { Cycle } from '../types';
import { writable } from 'svelte/store';

export const cycleStore = writable<Cycle>();

// export function createCycleState(initialValue: string, data: CycleYear[]) {
// 	let index = $state(data[0].id);
// 	console.log('index', index);
// 	return {
// 		get cycle() {
// 			return data.find((cycle) => cycle.id === index);
// 		},
// 		set cycle(newValue: string) {
// 			index = newValue;
// 		}
// 	};
// }
