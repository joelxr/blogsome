<template>
  <div :class="$style.tags">
    <div :class="$style.title" @click="toggle = !toggle">
      <Icon :name="['fas', 'tag']" size="sm" />
      <span>Tags</span>
    </div>
    <div :class="[$style.content, toggle ? $style.show : $style.hidden]">
      <Tag
        v-for="edge in $static.tags.edges"
        :key="edge.node.id"
        :to="`/tag/${edge.node.id}`"
        :title="edge.node.title"
      />
    </div>
  </div>
</template>

<static-query>
{
  tags: allTag {
    edges {
      node {
        id
        title
        ...on Tag {
          id
          title
        }
      }
    }
  }
}
</static-query>

<script>
import Icon from "~/components/Icon"
import Tag from "~/components/Tag"

export default {
  components: { Icon, Tag },
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="scss" module>
@import '~/design/index.scss';

.tags {
  padding: .559rem;

  .title {
    text-align: left;
    padding-bottom: 1rem;
    cursor: pointer;
    user-select: none;

    span {
      @extend %typography-xlarge;

      margin-left: 1rem;
    }

    &:hover {
      color: $yellow-base;
    }
  }

  .content {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    transition: transform ease $duration-animation-base;
    transform-origin: top;

    &.show {
      transform: scaleY(1)
    }

    &.hidden {
      transform: scaleY(0)
    }
  }
}
</style>

