import axios from "axios"

import countriesJson from "@/json/countries"
import usersJson from "@/json/users"

import { randomIntFromInterval } from "@/utils"

function generateAvatar(userIndex) {
  return `https://cdn.vuetifyjs.com/images/lists/${userIndex}.jpg`
}

function updateUser(user, i) {
  let country = countriesJson[randomIntFromInterval(0, countriesJson.length)]?.name
  return Object.assign(user, {
    country,
    avatar: generateAvatar(i + 1),
    score: randomIntFromInterval(0, 100),
    title: user.title || usersJson[i].title,
    subtitle: user.subtitle || usersJson[i].subtitle,
    address: `Test address: From ${country}`,
  })
}

export default {
  async fetchUsersFromApi() {
    let { data: users } = await axios.get("https://open-json-api.herokuapp.com/employees")
    return users.map(updateUser)
  },

  async fetchUsersFromJson() {
    let users = await Promise.resolve(usersJson) // like http-call-implementation
    return users.map(updateUser)
  },
}
