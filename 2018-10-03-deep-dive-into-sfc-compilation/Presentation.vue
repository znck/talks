<template>
  <Keynote aspect-ratio="16x9">
    <TitleSlide />
    <AuthorSlide />

    <SplitSlide>
      <FileBrowserWindow :files="files" active="Connect" />
      <Fit>
        <Build>
          <div>
            Zoom Level:
            <input type="number" v-model="size" step="0.05" @keypress.stop="() => {}" @keyup.stop="() => {}" min="0.85" max="1.3" />
          </div>
        </Build>

        <Build>
          <p>
            Or visit <br />
            <a href="https://znck.surge.sh">znck.surge.sh</a>
          </p>
        </Build>
      </Fit>
    </SplitSlide>

    <SectionSlide title="What is SFC?" />
    <SplitSlide>
      <FileBrowserWindow :files="files" active="Greeting" />
      <Fit>
        <p>An HTML-like file.</p>
        <p>
          Top-level block <br>
          are language regions.
        </p>
      </Fit>
    </SplitSlide>

    
    <SectionSlide title="Why SFC?" />
    
    <SectionSlide title="One component. One file." />
    <SectionSlide title="Templates" />
    <SectionSlide title="Compiled ahead of time" />
    <SectionSlide title="Choice of language" />
    <SectionSlide title="No style leaks" />
    <SectionSlide title="Static Analysis &amp; Optimisations" />
    <SectionSlide title="Shareable" />
    <Slide />

    <SectionSlide>
      <template slot="title">
        So,<br />
        Templates?
      </template>
    </SectionSlide>
    <SplitSlide>
      <FileBrowserWindow :files="files" active="Features" />
    </SplitSlide>
    <SplitSlide>
      <Fit>
        <Title style="text-align: center">Template</Title>

        <Build name="1"><p>+ HTML Based</p></Build>
        <Build name="2"><p>+ Declarative</p></Build>
        <Build name="4"><p>+ Optimisation</p></Build>
      </Fit>
      <Fit>
        <Title style="text-align: center">JSX</Title>

        <Build with="1"><p>+ Javascript Based</p></Build>
        <Build with="2"><p>+ Flexible</p></Build>
        <Build with="4"><p>– More Difficult</p></Build>
      </Fit>
    </SplitSlide>
    <SectionSlide title="There is no silver bullet." />
    <SectionSlide title="99%" />
    <SectionSlide title="Template Compilation" />
    <TemplateDemoSlide title="Template Compilation" :files="files" active="Stateful" />
    <Slide class="split-4">
      <Title style="text-align: center">Template Compilation</Title>
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
        to know this?
      </template>
    </SectionSlide>
    
    <SectionSlide title="Automatic Caching" />
    <TemplateDemoSlide title="Automatic Caching" :files="files" active="StaticNodes" />
    <TemplateDemoSlide title="Automatic Caching" :files="files" active="StaticRoot" />
    <Slide />
    
    
    <SectionSlide title="Compiler Hints" />
    <TemplateDemoSlide title="Compiler Hints" :files="files" active="NoCompilerHints" />
    <TemplateDemoSlide title="Compiler Hints" :files="files" active="CompilerHints" />
    <Slide />
    

    <SectionSlide title="What else can I do?" />
    
    <SectionSlide title="Static Internationalization" />
    <TemplateDemoSlide :files="files" active="Internationalisation" explorer="InternationalisationExample" />
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
    <SectionSlide title="vue.config.js">
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
    <Slide />

    <SectionSlide title="Testable Components" />
    <TemplateDemoSlide :files="files" active="Testable" explorer="TestExample" />
    <SectionSlide title="Removing data-test during compilation">
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
    <SectionSlide title="vue.config.js">
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
    <Slide />

    <SectionSlide title="Compilation Process" />
    <Slide>
      <Fit>
        <p>vue-template-compiler (parseComponent)</p>
        <Build><p>vue-template-compiler (compile)</p></Build>
        <Build><p>vue-template-es2015-compiler (transpile)</p></Build>
        <Build><p>@vue/component-compiler-utils (low level API)</p></Build>
        <Build><p>@vue/component-compiler</p></Build>
        <Build><p>vue-loader / rollup-plugin-vue</p></Build>
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
      activePane: null
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

.split-4 .split-pane {
  height: 88%;
}
</style>

