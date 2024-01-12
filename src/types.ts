export interface CycleYear {
	collectionId: string;
	collectionName: string;
	cycleYear: number;
	enl_total: number;
	enl_wins: number;
	id: string;
	res_total: number;
	res_wins: number;
	winner: 'resistance' | 'enlightened';
}

export interface Cycle {
	cell: string;
	collectionId: string;
	collectionName: string;
	created: Date;
	cycle: number;
	cycleDate: Date;
	cycleYear: number;
	enlightened: number;
	id: string;
	resistance: number;
	updated: Date;
}

export interface GroupedCycles {
	[key: number]: Cycle[];
}
