<template>
	<div>
		<div>
			Title :
			<input v-model="company.title" type="text" />
		</div>
		<div>
			Rate :
			<input v-model="company.rate" type="number" />
		</div>
		<div>
			Year :
			<input v-model="company.year" type="number" />
		</div>
		<div>
			Owner :
			<input v-model="company.owner" type="text" />
		</div>
		<button v-if="!userId" @click="onCreate">Create</button>
		<button v-if="userId" @click="onSave">Save</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'CompanyCreate',
	emits: ['add'],
	data() {
		return {
			company: {
				title: null,
				rate: null,
				year: null,
				owner: null,
			},
		}
	},
	computed: {
		...mapGetters(['getUserById']),
		userId() {
			return this.$route.params.userId
		},
	},
	created() {
		this.company = this.getUserById(this.userId)
	},
	methods: {
		...mapActions(['addNewCompany', 'updateCompany']),
		onCreate() {
			this.addNewCompany({
				title: this.company.title,
				rate: this.company.rate,
				year: this.company.year,
				owner: this.company.owner,
			})
			this.$router.push({
				name: 'home',
			})
			this.company.title = null
			this.company.rate = null
			this.company.year = null
			this.company.owner = null
		},
		onSave() {
			this.updateCompany(this.company)
			this.$router.push({
				name: 'home',
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>