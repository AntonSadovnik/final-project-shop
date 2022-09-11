export default function sortFunction(arr, sorting) {
	let sorted;
	if (sorting === 'name') {
		sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sorting === 'firstCheaper') {
		sorted = arr.sort((a, b) => (a.currentPrice > b.currentPrice ? 1 : -1));
	} else if (sorting === 'firstExpensive') {
		sorted = arr.sort((a, b) => (a.currentPrice > b.currentPrice ? -1 : 1));
	} else if (sorting === 'weight') {
		sorted = arr.sort((a, b) => (a.weight > b.weight ? -1 : 1));
	}
	return sorted;
}
