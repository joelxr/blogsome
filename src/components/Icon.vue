<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'

// https://fontawesome.com/icons
fontAwesomeIconLibrary.add(
  require('@fortawesome/free-brands-svg-icons/faGithub').definition,
  require('@fortawesome/free-brands-svg-icons/faLinkedin').definition,
  require('@fortawesome/free-brands-svg-icons/faTwitter').definition,
  require('@fortawesome/free-solid-svg-icons/faTag').definition,
  require('@fortawesome/free-solid-svg-icons/faHome').definition,
  require('@fortawesome/free-solid-svg-icons/faUser').definition,
)

export default {
  components: {
    FontAwesomeIcon,
  },
  inheritAttrs: false,
  props: {
    name: {
      type: String | Array,
      required: true,
    },
  },
}
</script>

<template>
  <FontAwesomeIcon
    v-bind="$attrs"
    :icon="name"
  />
</template>
