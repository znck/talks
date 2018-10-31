<template>
  <Keynote aspect-ratio="16x9">
    <TitleSlide />
    <AuthorSlide />

    <Slide>
      <Fit>
        <p>
          <small>Slides at</small><br />
          <a href="https://znck.surge.sh"><strong>znck</strong>.surge.sh</a>
        </p>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <section>
          <small>What is</small><br />
          <h1>SFC?</h1>
        </section>
      </Fit>
    </Slide>
    <SplitSlide>
      <FileBrowserWindow :files="files" active="Greeting" />
      <Fit>
        <p><small>Single File Component</small></p>
        <p>An <strong>HTML</strong>-like file.</p>
        <p>
          Top-level <strong>block</strong> <br>
          are <strong>language regions</strong>.
        </p>
      </Fit>
    </SplitSlide>
    
    <Slide>
      <Fit>
        <small>Why prefer</small><br />
        <h1>SFC?</h1>
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <small>One file</small><br />
        One component!
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        Scoped<br />
        <small>No style leaks...</small>
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <small>Choice of</small> languages
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <small>Custom</small> blocks
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        Compiled<br />
        <small>Ahead of Time</small>
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <small>Static</small><br />
        Optimisation
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <small>Inherently</small><br />
        <strong>Shareable</strong>
      </Fit>
    </Slide>
    
    <Slide />

    <Slide>
      <Fit>
        <small>I heard,</small><br />
        Templates? 😍
      </Fit>
    </Slide>

    <SplitSlide>
      <FileBrowserWindow :files="files" active="Features" />
      <Fit>
        <small>Key Features</small>
        <Build><p>Attribute binding</p></Build>
        <Build><p>Event binding</p></Build>
        <Build><p>Interpolation</p></Build>
        <Build><p>Conditions</p></Build>
        <Build><p>Loops</p></Build>
      </Fit>
    </SplitSlide>
    
    <Slide style="text-align: center">
      <Fit>
        <strong>99%</strong><br />
        <Build>
          <span>components<br /></span>
        </Build>
        <Build>
          <span>have templates</span>
        </Build>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <img src="./assets/99.jpg" />
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        😢<small> But,</small><br />
        What about JSX?
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <p>It's good too!</p>
        <Build><strong>SOMETIMES 😜</strong></Build>
      </Fit>
    </Slide>

    <SplitSlide>
      <Fit>
        <Title style="text-align: center">Template</Title>

        <p><small>+</small> HTML Based</p>
        <p><small>+</small> Declarative</p>
        <p><small>+</small> Optimisation</p>
      </Fit>
      <Fit>
        <Title style="text-align: center">JSX</Title>

        <p><small>+</small> Javascript Based</p>
        <p><small>+</small> Flexible</p>
        <p><small>–</small> More Difficult</p>
      </Fit>
    </SplitSlide>

    <Slide>
      <Fit>
        <small>Let's look into</small>
        <h1>Template <strong>Compiler</strong></h1>
      </Fit>
    </Slide>
    <TemplateDemoSlide title="Template Compilation" :files="files" active="Stateful" />

    <Slide>
      <Fit>
        <div><small>Let's </small><strong>dive</strong><small> deeper</small></div>
        <h1>
          Compiler Output
        </h1>
      </Fit>
    </Slide>
    <Slide>
      <p class="bottom-title">
        Current Topic: <b>Compiler Output</b>
      </p>
      <SplitPane :active-index="activePane">
        <FileBrowserWindow :files="files" @pick="file = $event" active="Stateful" @maximize="activate(0)" @minimize="activate(null)" />
        <ASTExplorer v-if="file" :code="file.content" @maximize="activate(1)" @minimize="activate(null)" />
        <RenderFunctionExplorer v-if="file" :code="file.content" :strip-with="false" @maximize="activate(2)" @minimize="activate(null)">
          <span slot="title">Render Function</span>
        </RenderFunctionExplorer>
        <RenderFunctionExplorer v-if="file" :code="file.content" @maximize="activate(3)" @minimize="activate(null)">
          <span slot="title">Transpiled Render Function</span>
        </RenderFunctionExplorer>
      </SplitPane>
    </Slide>


    <SectionSlide>
      <template slot="title">
        Why<br>
        do I need<br> 
        to <strong>know this</strong>?
      </template>
    </SectionSlide>

    <SectionSlide>
      <template slot="title">
        Automatic <strong>Caching</strong>!
      </template>
    </SectionSlide>
    <TemplateDemoSlide title="Automatic Caching" :files="files" active="StaticNodes" />
    <TemplateDemoSlide title="Automatic Caching" :files="files" active="StaticRoot" />
    

    <SectionSlide>
      <template slot="title">
        Compiler <strong>Hints</strong>!
      </template>
    </SectionSlide>
    <TemplateDemoSlide title="Compiler Hints" :files="files" active="NoCompilerHints" />
    <TemplateDemoSlide title="Compiler Hints" :files="files" active="CompilerHints" />
    <Slide>
      <Fit>
        <CodePreview :code="jokeCode" />
      </Fit>
    </Slide>
    

    <Slide>
      <Fit>
        <h1>
          🤩 <br />
          😍 🤪 <br />
          Show me <br />
          <strong>Moreeeee....</strong>
        </h1>
      </Fit>
    </Slide>
    
    <SectionSlide>
      <template slot="title">
        <p class="center">
          <strong>i18n</strong><br />
          <small>(Internationalisation)</small>
        </p>
      </template>
    </SectionSlide>
    <TemplateDemoSlide title="i18n" :files="files" active="Internationalisation" explorer="InternationalisationExample" />
    <SectionSlide title="i18n block compilation">
      <CodePreview language="js" @click.stop="() => {}">
        function postTransformNode(el) {
          if (el.type === 2) {
            el.text = findTranslation(el.text)
            
            const { expression, tokens } = parseText(el.text)
            el.expression = expression
            el.tokens = tokens
          }
          if (Array.isArray(el.children)) {
            el.children.map(postTransformNode)
          }
        }
      </CodePreview>
    </SectionSlide>
    <SectionSlide>
      <template slot="title">
        In your <code>vue.config.js</code>
      </template>
      <CodePreview language="js" @click.stop="() => {}">
        module.exports = {
          chainWebpack: config => {
            config.module
              .rule('vue')
              .use('vue-loader')
                .loader('vue-loader')
                .tap(options => {
                  options.modules = {
                    ...options.modules,
                    postTransformNode
                  }

                  return options
                })
          }
        }
      </CodePreview>
    </SectionSlide>
    <Slide>
      <Fit><img src="./assets/mike-drop.gif" /></Fit>
    </Slide>

    <SectionSlide>
      <template slot="title">
        Test with<br />
        <strong>Confidence</strong><br />
      </template>
    </SectionSlide>
    <TemplateDemoSlide title="Removing Test IDs" :files="files" active="Testable" explorer="TestExample" />
    <SectionSlide>
      <template slot="title">
        Removing <code>data-test</code> attribute
      </template>
      <CodePreview language="js" @click.stop="() => {}">
        function postTransformNode(el) {
          if (el.attrs) {
            el.attrs = el.attrs.filter(({ name }) => name !== 'data-test')
          }
          if (Array.isArray(el.children)) {
            el.children.map(postTransformNode)
          }
        }
      </CodePreview>
    </SectionSlide>
    <SectionSlide>
      <template slot="title">
        In your <code>vue.config.js</code>
      </template>
      <CodePreview language="js" @click.stop="() => {}">
        module.exports = {
          chainWebpack: config => {
            config.module
              .rule('vue')
              .use('vue-loader')
                .loader('vue-loader')
                .tap(options => {
                  options.modules = {
                    ...options.modules,
                    postTransformNode
                  }

                  return options
                })
          }
        }
      </CodePreview>
    </SectionSlide>
    <Slide>
      <Fit><img src="./assets/spit-out.gif" /></Fit>
    </Slide>

    <Slide><Fit><small>ALL</small></Fit></Slide>
    <Slide><Fit><small>THE</small></Fit></Slide>
    <Slide><Fit>HACKERS</Fit></Slide>
    <Slide><Fit><small>AND</small></Fit></Slide>
    <Slide><Fit><strong>CONTRIBUTORS</strong></Fit></Slide>
    <Slide><Fit><small>NEXT</small></Fit></Slide>
    <Slide><Fit><small>SLIDE</small></Fit></Slide>
    <Slide><Fit><small>IS</small></Fit></Slide>
    <Slide><Fit><small>FOR</small></Fit></Slide>
    <Slide><Fit><strong>YOU</strong></Fit></Slide>
    <Slide>
      <Fit>
        <h1>
          Compilation<br />
          Process <strong>Brearkdown</strong>
        </h1>
      </Fit>
    </Slide>
    <Slide>
      <p class="bottom-title">
        Current Topic: <b>Compilation Process Brearkdown</b>
      </p>
      <Fit>
        <p>vue-template-compiler (parseComponent)</p>
        <Build><p>vue-template-compiler (compile)</p></Build>
        <Build><p>vue-template-es2015-compiler (transpile)</p></Build>
        <Build><p>@vue/component-compiler-utils (low level API)</p></Build>
        <Build><p>@vue/component-compiler</p></Build>
        <Build><p><strong>vue-loader</strong> / <b><small>rollup-plugin-vue</small></b></p></Build>
      </Fit>
    </Slide>
    
    
  </Keynote>
</template>

<script>
import Vue from 'vue'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.component('Greeting', {
  functional: true,
  render(h, { data, children }) {
    return h('div', data, children)
  }
})

function loadFiles() {
  const context = require.context('!!raw-loader!./files/', false, /\.vue$/)
  

  return context.keys().map(name => ({ name: name.replace('./', ''), content: context(name) }))
}

const files = loadFiles()

export default {
  data() {
    return {
      files,
      file: null,
      size: 1,
      activePane: null,
      jokeCode: '<p v-pre>{{ new Date().getFullYear() }}</p>'
    }
  },
  methods: {
    activate(index) {
      console.log(arguments)
      this.activePane = index
    }
  },
  watch: {
    size(value) {
      document.querySelector('html').style.fontSize = value + 'vw'
    }
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Varela+Round'); */

.slideshow:focus {
  outline: none;
}

html {
  font-family: 'Circular Std', sans-serif;
  font-size: 1vw;
}

body {
  font-size: 1.111rem;
}

code {
  color: var(--color-accent);
}

.token.operator {
  background: transparent !important;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
}

small {
  color: rgba(0, 0, 0, 0.54);
}

strong {
  color: var(--color-primary);
}

.center {
  text-align: center;
}

.bottom-title {
  position: fixed; 
  bottom: 0.5rem;
  font-size: 1.25rem;
}
</style>

