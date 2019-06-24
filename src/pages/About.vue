<template>
  <Layout>
    <div :class="$style.title">
      About me
    </div>
    <div :class="$style.content"></div>
  </Layout>
</template>

<style lang="scss" module>
@import '~/design/index.scss';

.title {
  @extend %typography-xxlarge;  
  
  padding: 1rem;
}

.content {
  padding: 1rem;
}
</style>
