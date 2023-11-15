<template>
	<companies-filters />
	<company-list />
</template>

<script>
import CompaniesFilters from "./CompaniesFilters.vue";
import CompanyList from "./CompanyList.vue";

export default {
	name: "HomeView",
	components: {
		CompanyList,
		CompaniesFilters,
	},
};
</script>
