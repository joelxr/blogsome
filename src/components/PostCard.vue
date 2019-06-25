<template>
  <div :class="$style.card">
    <div :class="$style.date">
      {{ post.date }}
    </div>
    <div :class="$style.title">
      <g-link :to="post.path">
        {{ post.title }}
      </g-link>
      <div :class="$style.subtitle">{{ post.subtitle }} </div>
      <div :class="$style.timeToRead">
        Reading time: {{ post.timeToRead }} min
      </div>
    </div>
    <div :class="$style.tags">
      <Tag
        v-for="tag in post.tags"
        :key="tag.id"
        :to="`/tag/${tag.id}`"
        :title="tag.id"
      />
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
import Tag from '~/components/Tag'

export default {
  components: { Icon, Tag },
  props: {
    post: {
      type: Object,
      required: true
    }
  }  
};
</script>

<style lang="scss" module>
@import '~/design/index.scss';

.card {
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-gap: 0.6rem;
  padding: 1rem 2rem 2.1rem 1rem;
  color: $black;
  background-color: $gray-lighter;
  border-radius: 6px;
  box-shadow: 0 0.5px 1px rgba(0,0,0,0.12),
              0 0.5px 1px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 2px 3px rgba(0,0,0,0.15),
                0 2px 3px rgba(0,0,0,0.12);
  }

  .date {
    @extend %typography-xlarge;

    color: $gray-darker;
    align-self: center;
  }

  .title {
    @extend %typography-xxlarge;

    justify-self: flex-start;
    
    a {
      color: $black;
      text-decoration: none;
      padding: 0 .5rem;

      &:hover {
        background-color: $yellow-base; 
        border-radius: 4px;
      }
    }

    .subtitle {
      @extend %typography-medium;

      color: $black;
      margin: 0;
      padding: 0 .5rem;
    }
  }

  .timeToRead {
    @extend %typography-small;

    padding: 0 .5rem;
    color: $blue-base;
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
  }
}
</style>