<template>
  <div id="app" :class="$style.app">
    <aside :class="$style.aside">
      <div :class="$style.content">
        <div :class="$style.author">
          <Avatar />
          <div :class="$style.name">{{ author }}</div>
        </div>
        <div :class="$style.menu">
          <g-link :to="'/'">
            <Icon :name="['fas', 'home']" size="sm" />
            <span>Home</span>
          </g-link>
        </div>
        <div :class="$style.menu">
          <a target="blank" href="http://joelxr.github.io/">
            <Icon :name="['fas', 'user']" size="sm" />
            <span>About</span>
          </a>
        </div>
        <TagsList />
      </div>
    </aside>
    <main :class="$style.main">
      <slot />
    </main>
    <footer :class="$style.footer">
      <div :class="$style.right">
        &copy; {{ year }} <strong>{{ author }}</strong>
      </div>
      <div :class="$style.left">
        <a target="_blank" href="https://twitter.com/oquenqs">
          <Icon :name="['fab','twitter']" />
        </a>
        <a target="_blank" href="https://github.com/joelxr">
          <Icon :name="['fab','github']" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/joelxr">
          <Icon :name="['fab','linkedin']" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Avatar from "~/components/Avatar"
import Icon from "~/components/Icon"
import TagsList from "~/components/TagsList"

export default {
  components: { Avatar, Icon, TagsList },
  data () {
    return {
      toggleOn: true
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    author () {
      return "Joel Rocha"
    }
  }
}
</script>

<style lang="scss" module>
@import '~/design/index.scss';

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @extend %typography-2;
  
  height: 100vh;
  color: $black;
  margin: 0;
  padding: 0;
}

.app {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 11fr 1fr;

  .aside {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    text-align: center;
    padding: 0;
    grid-row: 1 / span 2;
    color: $white;
    background-color: $blue-darker;

    .content {
      position: sticky;
      top: 0;

      .author {
        padding: 0.4rem;
        color: $white;
        background-color: $blue-darkest;

        .name {
          @extend %typography-4;
      
          text-align: center;
          margin-bottom: 1rem;
        }
      }

      .menu {
        margin-left: .5rem;
        padding: .559rem;
        text-align: left;
        user-select: none;

        a {
          color: $white;
          text-decoration: none;

          &:hover {
            color: $yellow-base
          }
        }

        span {
          @extend %typography-4;

          margin-left: 1rem;
        }
      }
    }
  }

  .main {    
    background-color: $gray-lightest;
  }

  .footer {
    @extend %typography-2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: $blue-lightest;

    .left {
      @extend %typography-5;

      a {
        margin: 0 .4rem;
        color: $black;

        &:hover {
          color: $blue-base;
        }
      }
    }
  }
}
</style>
