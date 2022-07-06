<template>
<v-list three-line>
  <v-subheader v-if="title" v-text="title"/>

  <v-divider v-if="divided"/>

  <user-list-item v-for="(user, i) in users" :key="user.id || i" :user="user"/>
</v-list>
</template>

<script>
import UserListItem from "./UserListItem"

export default {
  name: "CardList",

  components: {
    UserListItem,
  },

  props: {
    title: String,
    divided: Boolean,
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>
