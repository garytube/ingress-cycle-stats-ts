import { pb } from '$lib';
import {type Cycle, type CycleYear } from '../types';




/** @type {import('./$types').PageLoad} */
export async function load() {
    const cycleWins = await pb.collection('year_wins').getFullList<CycleYear>({sort: 'cycleYear'});
    const cycles = await pb.collection('cycle').getFullList<Cycle>();
    return {cycles, cycleWins};
};