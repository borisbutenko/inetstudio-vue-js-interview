<template>
<v-list-item class="user-list-item">
  <v-list-item-avatar v-click-outside="() => isShowAddress = false">
    <v-tooltip v-model="isShowAddress" :open-on-hover="false" left>
      <template v-slot:activator="{ on, attrs }">
        <v-img v-bind="attrs" v-on="on" :src="user.avatar"/>
      </template>
      <span>
        {{ user.address }}
      </span>
    </v-tooltip>
  </v-list-item-avatar>

  <v-list-item-content>
    <v-list-item-title v-text="user.title"/>
    <v-list-item-subtitle v-html="user.subtitle"/>
    <v-list-item-subtitle>
      Score: {{ user.score }}
    </v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>
</template>

<script>
import ClickOutside from "vue-click-outside"

export default {
  name: "UserListItem",

  directives: {
    ClickOutside,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isShowAddress: false,
    }
  },
}
</script>
