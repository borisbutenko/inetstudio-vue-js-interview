<template>
<v-container class="page-home">
  <v-row justify="center" class="ma-4">
    <v-col cols="12">
      <common-logo/>
    </v-col>
  </v-row>

  <v-row justify="center" class="ma-4">
    <v-col cols="12" md="6">
      <v-btn-toggle borderless>
        <v-btn @click="fetchUsersFromApi">
          Fetch users from api
        </v-btn>
        <v-btn @click="fetchUsersFromJson">
          Fetch users from json
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>

  <v-row justify="center" class="ma-4">
    <v-col cols="12" md="4">
      <filters-list :options="filtersListOptions" @filter="filterUsers"/>
    </v-col>

    <v-col cols="12" md="4">
      <v-card max-width="450" class="mx-auto">
        <v-skeleton-loader v-show="isLoading" type="card, list-item-three-line"/>
        <users-list v-show="!isLoading && filteredUsers.length" :users="filteredUsers"/>
        <v-card-text v-show="!isLoading && !filteredUsers.length">
          Users not found
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
import { head } from "lodash-es"

import CommonLogo from "@/components/CommonLogo"
import FiltersList from "@/components/FiltersList"
import UsersList from "@/components/UsersList"

let {
  mapState: mapStateUsers,
  mapMutations: mapMutationsUsers,
  mapActions: mapActionsUsers,
  mapGetters: mapGettersUsers,
} = createNamespacedHelpers('users')

export default {
  name: "PageUsers",

  components: {
    CommonLogo,
    FiltersList,
    UsersList,
  },

  data() {
    return {
      selectedCountry: null,
      selectedScore: null,
      filtersListItemScores: {
        model: "score",
        items: [
          "> 25",
          "> 50",
          "> 75",
        ],
        predicate: val => val && Number(head(val.match(/\d+/g))),
      },
    }
  },
  
  computed: {
    ...mapStateUsers([
      'isLoading',
      'users',
    ]),

    ...mapGettersUsers([
      'availableCountries',
      'filterUsersByCountry',
    ]),

    filteredUsers() {
      let { selectedCountry, selectedScore } = this
      let users = selectedCountry ? this.filterUsersByCountry(selectedCountry) : this.users
      if (!selectedScore)
        return users
      return users.filter(user => user.score > selectedScore)
    },

    filtersListOptions() {
      return [
        this.filtersListItemCountries,
        this.filtersListItemScores,
      ]
    },

    filtersListItemCountries() {
      return {
        model: "country",
        items: this.availableCountries,
      }
    },
  },

  serverPrefetch() {
    this.fetchUsersFromApi()
  },

  mounted() {
    this.fetchUsersFromApi()
  },
  
  methods: {
    ...mapMutationsUsers([
      'SET_IS_LOADING',
    ]),

    ...mapActionsUsers([
      'fetchUsersFromApi',
      'fetchUsersFromJson',
    ]),

    filterUsers({ country, score }) {
      this.SET_IS_LOADING(true)
      this.selectedCountry = country
      this.selectedScore = score
      setTimeout(this.SET_IS_LOADING, 200, false)
    },
  },
}
</script>
