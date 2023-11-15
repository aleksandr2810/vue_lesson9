import { createStore } from "vuex";
import { isCorrespondToFilter } from './helpers'

export default createStore({
	state: {
		companiesList: [
			{ id: 1, owner: 'Олексій', rate: 5, title: 'Company1', year: 2000 },
			{ id: 2, owner: 'Ірина', rate: 3, title: 'Company2', year: 2002 },
			{ id: 3, owner: 'Марія', rate: 2, title: 'Company3', year: 2006 },
			{ id: 4, owner: 'Віталій', rate: 4, title: 'Company4', year: 2020 },
			{ id: 5, owner: 'Андрій', rate: 6, title: 'Company5', year: 2017 },
		],
		filterObj: {},
	},
	getters: {
		getCompaniesList: (state) => state.companiesList,
		getFilteredCompaniesList: (state) =>
			state.companiesList.filter((company) => isCorrespondToFilter(company, state.filterObj)),
		getUserById: (state) => {
			return (userId) => {
				return { ...state.companiesList.find((company) => company.id == userId) }
			}
		},
	},
	mutations: {
		addCompany(state, company) {
			state.companiesList.push(company)
		},
		updateOldCompany(state, company) {
			const companyIndex = state.companiesList.findIndex((item) => item.id === company.id)
			state.companiesList[companyIndex] = { ...company }
		},
		deleteCompanyById(state, companyId) {
			state.companiesList = state.companiesList.filter((company) => company.id !== companyId)
		},
		setFilter(state, filterDataObj) {
			state.filterObj = filterDataObj
		},
	},
	actions: {
		addNewCompany({ commit }, companyData) {
			commit('addCompany', {
				id: new Date().getTime(),
				...companyData,
			})
		},
		updateFilter({ commit }, filterDataObj) {
			commit('setFilter', filterDataObj)
		},
		updateCompany({ commit }, companyData) {
			commit('updateOldCompany', companyData)
		},
		deleteCompany({ commit }, companyId) {
			commit('deleteCompanyById', companyId)
		},
	},
});
