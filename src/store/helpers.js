export function isCorrespondToFilter(company, filterObj) {
	for (const props in filterObj) {
		if (filterObj[props] && filterObj[props] !== company[props]) return false
	}
	return true
}