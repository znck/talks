<script>
import photo from './assets/znck.png'

export default {
  data: () => ({
    title: "Stealing Ideas from Vue",
    author: {
      name: "Rahul Kadyan",
      twitter: "@znck0",
      photo,
      website: "https://znck.me"
    }
  }),

  computed: {
    config() {
      const { title, author } = this;

      return {
        progress: {
          $presentation: { title, author }
        }
      };
    }
  },

  components: {
    Note: {
      functional: true,
      render() {
        return null
      }
    }
  }
};
</script>

<template>
  <Keynote :plugin-progress="config.progress">
    <TitleSlide :title="title" />
    <PhotoVerticalSlide :photo="author.photo" :title="author.name">
      <div slot="subtitle" style="text-align: center">
        <small>
          <em>Improving DX at Myntra</em>
        </small>

        <small>
          <p>Contributor and Core Team, Vue</p>
          <p>Co-organizer, VueBLR</p>
        </small>
      </div>
    </PhotoVerticalSlide>

    <PhotoHorizontalSlide photo="./assets/take-sfc.gif" title="Take Single File Components" />

    <!-- Single File Components -->
    <TitleSlide>
      <span slot="title">
        <b>Single File Components</b> allow authoring truly encapsulated components.
      </span>>
    </TitleSlide>

    <PhotoHorizontalSlide photo="./assets/hammer.jpg">
      <span slot="title">
        <strong>Style</strong> and <strong>Markup</strong> in <em>JavaScript</em> is powerful but 
        at expanse of increased complexity.
      </span>
    </PhotoHorizontalSlide>

    <PhotoHorizontalSlide photo="./assets/no-more-hammer.jpg">
      <span slot="title">
        The strategy, <strong>"It's just JavaScript"</strong>, breaks <em>developer experience</em> often.
      </span>
    </PhotoHorizontalSlide>

    <PhotoHorizontalSlide photo="./assets/hammer-axe.jpg">
      <span slot="title">
        Like <strong>HTML</strong>, Single File Component is built support multiple embedded languages.
      </span>
    </PhotoHorizontalSlide>

    <!-- Template -->
    <PhotoHorizontalSlide photo="./assets/take-templates.gif" title="Take templates" />
    <TitleSlide>
      <span slot="title">
        HTML Constraints are keeping <b>templates</b> simple, rigid and comprehensible.
      </span>
    </TitleSlide>

    <Photo2UpSlide class="template-ex" left="./assets/code-ex-jsx.png" right="./assets/code-ex-template.png" />

    <PhotoHorizontalSlide photo="./assets/take-slots.gif" title="Take slots" />
    <TitleSlide>
      <span slot="title">
        The <strong><code>&lt;slot&gt;</code> element</strong> is render prop for web component standard and Vue too.
      </span>
    </TitleSlide>

    <!-- Maybe a slide about slots -->
    <PhotoHorizontalSlide photo="./assets/take-directives.gif" title="Take directives" />
    <TitleSlide>
      <span slot="title">
        <strong>Directives</strong> add programmatic capabilities to Vue templates.
      </span>
    </TitleSlide>

    <Photo2UpSlide class="template-ex" left="./assets/code-ex-directive-model-react.png" right="./assets/code-ex-directive-model-vue.png" />
    <Photo2UpSlide class="template-ex" left="./assets/code-ex-directive-event-react.png" right="./assets/code-ex-directive-event-vue.png" />
    <Photo2UpSlide class="template-ex" left="./assets/code-ex-directive-event-keyboard-react.png" right="./assets/code-ex-directive-event-keyboard-vue.png" />

    <QuoteSlide quote="You get directives with JSX for Vue" author="github.com/vuejs/jsx" />

    <!-- Template -->
    <PhotoHorizontalSlide photo="./assets/take-computed.gif" title="Take computed properties" />
    <TitleSlide>
      <span slot="title">
        <b>Computed properties</b> make the derived state but memoized.
      </span>
    </TitleSlide>
    <Photo2UpSlide class="template-ex" left="./assets/code-ex-computed-react.png" right="./assets/code-ex-computed-vue.png" />

    <!-- Template -->
    <PhotoHorizontalSlide photo="./assets/take-cli.gif" title="Take CLI UI" />
    <TitleSlide>
      <span slot="title">
        <b>Vue CLI UI</b> is an enabler for new developers intimidated by terminals.
      </span>
    </TitleSlide>

    <Slide>
      <video autoplay muted controls class="video">
        <source src="./assets/cli-demo.mp4"
            type="video/mp4">
      </video>
    </Slide>
    
    <PhotoHorizontalSlide photo="./assets/take-hooks.gif" title="Taking hooks" />
    <TitleSlide>
      <span slot="title">
        <b>Hooks</b> present a powerful new composition pattern.
      </span>
    </TitleSlide>
    <TitleSlide>
      <span slot="title">
        github.com/yyx990803/<b>vue-hooks</b>
      </span>
    </TitleSlide>

    <PhotoSlide photo="./assets/fin.gif" />

    <TitleSlide>
      <span slot="title">
        Find me on twitter as <b>@znck0</b>
      </span>
    </TitleSlide>
  </Keynote>
</template>

<style>
.video {
  width: 100%;
  object-fit: contain;
}

/* Keynote Slide Style Fixes */
h1[class^="title"] {
  overflow-y: visible;
}

.template-ex img {
  object-fit: contain;
}
</style>