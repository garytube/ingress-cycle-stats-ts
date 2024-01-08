import PocketBase from 'pocketbase';
import type { Cycle } from '../types';

export const pb = new PocketBase('https://ics.geryy.dev');

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

export function groupArrayByYear(data: Cycle[]) {
	return data.reduce((groupedData: { [year: number]: Cycle[] }, item: Cycle) => {
		if (!groupedData[item.cycleYear]) {
			groupedData[item.cycleYear] = [];
		}
		groupedData[item.cycleYear].push(item);
		return groupedData;
	}, {});
}
