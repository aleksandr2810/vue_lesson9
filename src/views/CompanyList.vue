<template>
	<div>
		<div v-for="company in getFilteredCompaniesList" :key="company.id">
			{{ `${company.title} - ${company.rate} - ${company.year} - ${company.owner}` }}
			<button @click="deleteCompany(company.id)">Delete</button>
			<button @click="onUserClick(company.id)">edit</button>
		</div>
		<button @click="onAddCompany">Create a Company</button>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'CompanyList',
	computed: {
		...mapGetters(['getFilteredCompaniesList']),
	},
	methods: {
		...mapActions(['deleteCompany']),
		onAddCompany() {
			this.$router.push({
				name: 'companyCreate',
			})
		},
		onUserClick(id) {
			this.$router.push({
				name: 'companyCreate',
				params: {
					userId: id,
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>