<template>
  <div :class="$style.tag">
    <g-link :to="to">
      {{ title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
@import '~/design/index.scss';

.tag {
  @extend %typography-small;

  padding: .2rem .4rem;
  margin: .4rem;
  background-color: $yellow-base;
  border-radius: 2px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 3px 0px $orange-base;
  transition: all 0.1s cubic-bezier(.25,.8,.25,1);

  &:active {
    margin-bottom: 1px;
    box-shadow: 0px 1px 0px $orange-base;
  }

  a {
    text-decoration: none;
    color: $black;

    &:hover {
      color: $orange-dark;
    }
  }
}
</style>
