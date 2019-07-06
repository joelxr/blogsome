<template>
  <div :class="$style.card">
    <div :class="$style.left">
      <div :class="$style.date">
        {{ post.date }}
      </div>
      <div :class="$style.timeToRead">
          {{ post.timeToRead }} min. to read
      </div>
    </div>
    <div :class="$style.right">
      <div :class="$style.title">
        <g-link :to="post.path">
          {{ post.title }}
        </g-link>
      </div>
      <div :class="$style.subtitle">
        {{ post.subtitle }}
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
  grid-template-columns: 1fr 4fr;
  grid-gap: 0.6rem;
  margin: .8rem;
  background-color: $gray-lighter;
  border-radius: 6px;
  box-shadow: 0 0.5px 1px rgba(0,0,0,0.12),
              0 0.5px 1px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 2px 3px rgba(0,0,0,0.15),
                0 2px 3px rgba(0,0,0,0.12);
  }

  .left {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: $gray-light;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    box-shadow: 0 0.5px 1px rgba(0,0,0,0.12),
              0 0.5px 1px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      box-shadow: 0 2px 3px rgba(0,0,0,0.15),
                0 2px 3px rgba(0,0,0,0.12);
    }

    .date {
      @extend %typography-5;

      color: $black;
      align-self: center;
    }

    .timeToRead {
      @extend %typography-3;

      padding: 0 .5rem;
      color: $blue-dark;
    }
  }

  .right {
    padding: 1rem;

    .title {
      @extend %typography-5;

      justify-self: flex-start;
      
      a {
        color: $blue-base;
        text-decoration: none;

        &:hover {
          background-color: $yellow-base; 
          border-radius: 4px;
        }
      }
    }

    .subtitle {
      @extend %typography-3;

      color: $black;
      margin: 0;
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-items: center;

      margin: 0 -0.6rem;
    }
  }
}

@media (max-width: 640px) {
  .card {
    grid-template-columns: auto;
    grid-gap: 0.2rem;

    .left {
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: .4rem 1rem;
      border-top-right-radius: 6px;
      border-bottom-left-radius: 0;
    }
  }
}
</style>