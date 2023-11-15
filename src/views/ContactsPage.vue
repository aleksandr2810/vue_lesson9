<template>
	<div>
<h1>{{ currP }}</h1>
	</div>
</template>

<script>
const p ={
	boy: ['game', 'joy', 'cake'],
	man: ['auto', 'money', 'house'],
}
	export default {
		name: 'ContactsPage',
		computed: {
			currPer() {
				return this.$route.params.person 
			},
			currP() {
				return p[this.currPer][1]
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>