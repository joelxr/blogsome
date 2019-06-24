<template>
  <div>
    <g-image
      :class="$style.img"
      src="~/img/avatar.jpg"
      width="128"
      height="128"
      blur="10"
      immediate="true"
      fit="fill"
    >
    </g-image>
  </div>
</template>

<style lang="scss" module>
@import '~/design/index.scss';

.img {
  border: 8px solid $blue-darker;
  border-radius: 100%;

  &:hover {
    
  }
}

</style>

