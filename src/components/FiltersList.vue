<template>
<div class="filters-list">
  <v-select
      v-for="(filterOption, key) in filtersOptions"
      v-model="filterOption.value"
      :key="key"
      :items="filterOption.items"
      :label="filterOption.label || `Filter by ${filterOption.model}`"
      :clearable="filterOption.clearable || true"
      @input="filtersDidUpdate"/>
</div>
</template>

<script>
import { cloneDeep } from "lodash-es"

export default {
  name: "FiltersList",

  props: {
    /**
     * @typedef {Object} options[i]
     * @property {String} model      - key для возвращаемой json-filtersModel
     * @property {Array} items       - :items для v-select
     * @property {String} label      - :label для v-select
     * @property {Boolean} clearable - :clearable для v-select
     */
    options: {
      type: Array,
      required: true,
    },
  },

  computed: {
    filtersOptions() {
      let filtersOptions = cloneDeep(this.options)
      for (let key in filtersOptions)
        filtersOptions[key].value = null
      return filtersOptions
    },
  },

  watch: {
    options: {
      deep: true,
      handler: "filtersDidUpdate",
    },
  },

  methods: {
    filtersDidUpdate() {
      this.$emit("filter", this.getFiltersModel())
    },

    getFiltersModel() {
      return Object.entries(this.filtersOptions).reduce((filtersModel, [, { model, value, predicate }]) => (
        Object.assign(filtersModel, { [model]: predicate ? predicate(value) : value })
      ), Object.create(null))
    }
  },
}
</script>
