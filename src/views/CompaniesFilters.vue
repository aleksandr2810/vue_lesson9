<template>
	<div>
		<div>
			Title :
			<input v-model.lazy="obj.title" type="text" />
		</div>
		<div>
			Rate :
			<input v-model.lazy="obj.rate" type="number" />
		</div>
		<div>
			Year :
			<input v-model.lazy="obj.year" type="number" />
		</div>
		<div>
			Owner :
			<input v-model.lazy="obj.owner" type="text" />
		</div>
		<button @click="onReset">Reset</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'CompaniesFilters',
	data() {
		return {
			obj: {},
		}
	},
	watch: {
		obj: {
			handler(newValue) {
				this.updateFilter(newValue)
			},
			deep: true,
		},
	},

	methods: {
		...mapActions(['updateFilter']),
		onReset() {
			this.obj = {}
		},
	},
}
</script>

<style lang="scss" scoped></style>