<template>
<layout-footer>
  {{ fullYear }} — <strong>Vuetify</strong>
</layout-footer>
</template>

<script>
import LayoutFooter from "@/layouts/Footer"

export default {
  name: "CommonFooter",

  components: {
    LayoutFooter,
  },

  data() {
    return {
      fullYear: new Date().getFullYear(),
    }
  },
}
</script>