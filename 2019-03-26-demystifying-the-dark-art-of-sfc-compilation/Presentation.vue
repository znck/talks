<template>
  <Keynote :plugin-keyboard="{}" :plugin-progress="config.progress">
    <TitleSlide />

    <SplitSlide title class="padded-container" minion="overvue.png" style="background-position: 53% 100%; background-size: 30%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w2 flex flex-align-center flex-justify-center" style="text-align: center;">
        My Indian Accent
      </div>
      
      <div class="text-w2 flex flex-align-center flex-justify-center" style="text-align: center;">
        The SFC Compiler  
      </div>
    </SplitSlide>
    
    <SplitSlide title class="padded-container" minion="overvue.png" style="background-position: 53% 100%; background-size: 30%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w2 flex flex-align-center flex-justify-center" style="text-align: center; color: red;">
        My Indian Accent
      </div>
      
      <div class="text-w2 flex flex-align-center flex-justify-center" style="text-align: center; color: green;">
        The SFC Compiler  
      </div>
    </SplitSlide>
    
    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li>Parse SFC to blocks</li>
          <li>Compile each block <br>(script, style, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>
    
    <SplitSlide title class="padded-container focus-areas">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span> | Key Focus Areas
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center; margin-top: -4em; color: green;">
        <h2>What</h2>
      </div>
      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center; margin-top: -4em; color: green;">
        <h2>Why</h2>
      </div>
      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center; margin-top: -4em; text-decoration: line-through;">
        <h2>How</h2>
      </div>
    </SplitSlide>

    <Slide class="text-w4 padded-container">
      <h1>Testable Components</h1>

      <CodePreview lang="vue">
        &lt;button data-test="login-button"&gt;
          Login
        &lt;/button&gt;
      </CodePreview>
    </Slide>

    <SplitSlide title>
      <template #title>
         Testable Components
        <img src="./assets/magic.png" class="slide-intro-test-minion">
      </template>
      <FileBrowserWindow :files="files" active="Testable"/>
      <FileBrowserWindow :files="files" active="TestableProd"/>
    </SplitSlide>
    
    <SplitSlide title>
      <template #title>
        Compile-time Internationalization
        <img src="./assets/magic.png" class="slide-intro-test-minion">
      </template>
      <FileBrowserWindow :files="files" active="IntEx"/>
      <FileBrowserWindow :files="files" active="IntExES"/>
    </SplitSlide>

    <SectionSlide
      minion="what"
      style="background-size: 15%; background-position: 100% 90%;"
    >What is SFC?</SectionSlide>

    <SplitSlide
      size="small"
      minion="i-see"
      style="background-size: 28%; background-position: 65% 100%;"
    >
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <h2 class="text-w2">
        An HTML like file with
        <code>.vue</code> extension.
      </h2>
    </SplitSlide>

    <Slide
      class="padded-container"
      minion="bananas"
      style="background-position: 100% 84%; background-size: 50%;"
    >
      <h2 class="text-w2">Benefits of SFC</h2>
      <ul class="text-w4">
        <li>One File per Component</li>
        <li>Style in the same file</li>
        <li>It's mini application</li>
        <li>Uses just HTML, CSS &amp; JS</li>
        <li>Plus, choice of Languages</li>
      </ul>
    </Slide>

    <SectionSlide
      size="small"
      minion="phone"
      style="background-position: 65% 100%; background-size: 50%;"
    >Browsers don't understand SFC.</SectionSlide>

    <SectionSlide
      size="small"
      minion="stupid"
      style="background-position: 50% 100%; background-size: 50%;"
    >
      We convert SFC to
      <em>JavaScript</em>.
    </SectionSlide>

    <SectionSlide
      size="small"
      minion="stupid"
      style="background-position: 50% 100%; background-size: 50%; position: relative"
    >
      <div
        style="position: absolute; top: 20%; left: 20%; font-family: 'Gloria Hallelujah'; color: green;"
      >compile</div>We
      <span style="text-decoration: line-through">convert</span> SFC to
      <em>JavaScript</em>.
    </SectionSlide>

    <SectionSlide
      size="small"
      minion="stupid"
      style="background-position: 50% 100%; background-size: 50%; position: relative"
    >
      <div
        style="position: absolute; top: 10%; left: 22%; font-family: 'Gloria Hallelujah'; color: red;"
      >transpile</div>
      <div
        style="position: absolute; top: 20%; left: 20%; font-family: 'Gloria Hallelujah'; color: green; text-decoration: line-through;"
      >compile</div>We
      <span style="text-decoration: line-through;">convert</span> SFC to
      <em>JavaScript</em>.
    </SectionSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li>Parse SFC to blocks</li>
          <li>Compile each block <br>(script, style, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide size="small" minion="overvue.png" style="background-size: 50%; background-position: 0% 100%">
      <div style="margin-left: 10em">Parse SFC <br>into Blocks</div>
    </SectionSlide>

    <SplitSlide title>
      <FileBrowserWindow :files="files" active="CompileScript" @pick="file = $event" />
      <SfcExplorer :code="file ? file.content : ''" />
      <template #title>
        Parse SFC to blocks
        <img src="./assets/okay.png" class="slide-compile-list-minion">
      </template>
    </SplitSlide>

    <SplitSlide title>
      <div>
        <CodePreview class="text-w5" language="js" @click.stop="() => {}">
          import { parseComponent } from 'vue-template-compiler'

          const blocks = parseComponent(source)
        </CodePreview>
      </div>

      <template #title>
        Parse SFC to blocks | How?
        <img src="./assets/okay.png" class="slide-compile-list-minion">
      </template>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li style="text-decoration: line-through">Parse SFC to blocks</li>
          <li>Compile each block <br>(script, style, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide size="small" minion="overvue.png" style="background-size: 50%; background-position: 0% 100%">
      <div style="margin-left: 10em">
        Compile <br>Script Block
      </div>
    </SectionSlide>

    <SplitSlide title>
      <template #title>
         Compile each block | Script Block
        <img src="./assets/deep-think.png" class="slide-compile-script-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-Script"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compile each block | Script Block
        <small>(No Script Block)</small>
        <img src="./assets/complain.png" class="slide-compile-no-script-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileNoScript"/>
      <FileBrowserWindow :files="files" active="CompileNoScript-Script"/>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li style="text-decoration: line-through">Parse SFC to blocks</li>
          <li>Compile each block <br>(<span style="text-decoration: line-through">script</span>, style, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide size="small" minion="overvue.png" style="background-size: 50%; background-position: 0% 100%">
      <div style="margin-left: 10em">
        Compile <br>Style Block
      </div>
    </SectionSlide>

    <SplitSlide title>
      <template #title>
        Compile each block | Style Block
        <img src="./assets/cool.png" class="slide-compile-style-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-Style"/>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li style="text-decoration: line-through">Parse SFC to blocks</li>
          <li>Compile each block <br>(<span style="text-decoration: line-through">script</span>, <span style="text-decoration: line-through">style</span>, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide
      class="compiling-template-slide"
      size="small"
      title="Compile Template Block"
      minion="run"
      style="background-size: 45%; background-position: 0% 100%"
    />
    <SplitSlide class="padded-container" title>
      <template #title>
        JSX vs Templates
        <img src="./assets/evil-twin.jpg" class="slide-jsx-vs-template-minion">
      </template>
      <div class="jsx text-w4">
        <h2 style="margin-top: 0">JSX</h2>
        <ul style="text-align: left">
          <li>Extends JavaScript</li>
          <li>Inherently Flexible</li>
          <li>Empowers End User</li>
        </ul>
      </div>
      <div class="template text-w4">
        <h2 style="margin-top: 0">Templates</h2>
        <ul dir="rtl" style="text-align: right">
          <li>Extends HTML</li>
          <li>Inherently Declarative</li>
          <li>Empowers Build Tools</li>
        </ul>
      </div>
    </SplitSlide>
    <SplitSlide class="padded-container" title>
      <template #title>
        Declarative Rendering
        <img src="./assets/evil-twin.jpg" class="slide-jsx-vs-template-minion">
      </template>
      <div class="jsx text-w4">
        <h2 style="margin-top: 0">JSX</h2>
        <ul style="text-align: left">
          <li>Extends JavaScript</li>
          <li style="color: red">Inherently Flexible</li>
          <li style="color: green">Empowers End User</li>
        </ul>
      </div>
      <div class="template text-w4">
        <h2 style="margin-top: 0">Templates</h2>
        <ul dir="rtl" style="text-align: right">
          <li>Extends HTML</li>
          <li style="color: green">Inherently Declarative</li>
          <li style="color: green">Empowers Build Tools</li>
        </ul>
      </div>
    </SplitSlide>
    <SplitSlide style="padding: 1em;" title>
      <FileBrowserWindow :files="files" active="Features"/>
      <template #title>
        Compile each block | Template Block
        <img src="./assets/write.png" class="slide-template-features-minion">
      </template>
    </SplitSlide>

    <SplitSlide style="padding: 1em;" title>
      <div>
        <ul
          class="text-w4"
          style="font-family: 'Gloria Hallelujah'; line-height: 1.2; position: absolute; right: 2%; top: 5%; list-style-type: circle;"
        >
          <li>Interpolation</li>
          <li>Directives</li>
        </ul>
        <FileBrowserWindow :files="files" active="Features"/>
      </div>
      <template #title>
        Compile each block | Template Block
        <img src="./assets/write.png" class="slide-template-features-minion">
      </template>
    </SplitSlide>

    <SplitSlide class="padded-container flex flex-justify-center flex-align-center" title="Compile each block | Template Block">
      <div class="text-w4 flex flex-all compiler-steps">
        <div class="flex flex-justify-center flex-align-center">Template</div>
        <div class="flex flex-direction-column flex-justify-center flex-align-center">
          <img
            src="./assets/parse.png"
            style="height: 3em; transform: scale(1.3) translateY(0.4em)"
          >
          <small style="font-size: 0.75em; margin-top: 2em; color: #666">
            <em>parse(template)</em>
          </small>
        </div>
        <div class="flex flex-justify-center flex-align-center">Abstract Syntax Tree</div>
        <div class="flex flex-direction-column flex-justify-center flex-align-center">
          <img src="./assets/towel.png" style="height: 3em; transform: scale(1.25)">
          <small style="font-size: 0.75em; margin-top: 2em; color: #666">
            <em>codegen(AST)</em>
          </small>
        </div>
        <div class="flex flex-justify-center flex-align-center">Render Function</div>
      </div>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compiling Template |
        <em>parse(template)</em>
        <img src="./assets/parse.png" class="slide-compile-template-parse-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript" @pick="file = $event"/>
      <ASTExplorer :code="file ? file.content : ''"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compiling Template |
        <em>codegen(AST)</em>
        <img src="./assets/towel.png" class="slide-compile-template-codegen-minion">
        <FileBrowserWindow
          hidden
          :files="files"
          active="CompileScript"
          @pick="file = $event"
          style="display: none"
        />
      </template>
      <ASTExplorer :code="file ? file.content : ''"/>
      <RenderFunctionExplorer v-if="file" :code="file ? file.content : ''" :strip-with="true"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compiling Template |
        <em>codegen(AST)</em>
        <img src="./assets/towel.png" class="slide-compile-template-codegen-minion">
        <FileBrowserWindow
          hidden
          :files="files"
          active="CompileScript"
          @pick="file = $event"
          style="display: none"
        />
      </template>
      <ASTExplorer :code="file ? file.content : ''"/>
      <FileBrowserWindow :files="files" active="CompileScript-Codegen"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compiling Template |
        <em>codegen(AST)</em>
        <img src="./assets/towel.png" class="slide-compile-template-codegen-minion">
        <FileBrowserWindow
          hidden
          :files="files"
          active="CompileScript"
          @pick="file = $event"
          style="display: none"
        />
      </template>
      <ASTExplorer :code="file ? file.content : ''"/>
      <FileBrowserWindow :files="files" active="CompileScript-CodegenSimple"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compiling Template |
        <em>compile(template)</em>
        <img src="./assets/parse.png" class="slide-compile-template-p-minion">
        <img src="./assets/towel.png" class="slide-compile-template-c-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-CodegenSimple"/>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li style="text-decoration: line-through">Parse SFC to blocks</li>
          <li style="text-decoration: line-through">Compile each block <br>(script, style, template)</li>
          <li>Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SplitSlide title>
      <FileBrowserWindow :files="files" active="CompileScript" @pick="file = $event" />
      <SfcExplorer :code="file ? file.content : ''" />
      <template #title>
        Parse SFC to blocks
        <img src="./assets/okay.png" class="slide-compile-list-minion">
      </template>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compile each block | Script Block
        <img src="./assets/deep-think.png" class="slide-compile-script-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-Script"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compile each block | Style Block
        <img src="./assets/cool.png" class="slide-compile-style-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-Style"/>
    </SplitSlide>

    <SplitSlide title>
      <template #title>
        Compile each block | Template Block
        <img src="./assets/parse.png" class="slide-compile-template-p-minion">
        <img src="./assets/towel.png" class="slide-compile-template-c-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-CodegenSimple"/>
    </SplitSlide>

    <SectionSlide size="small" minion="overvue.png" style="background-size: 50%; background-position: 0% 100%">
      <div style="margin-left: 10em">
        Combine <br>all blocks
      </div>
    </SectionSlide>

    <SplitSlide title>
      <template #title>
        Combine all blocks
        <img src="./assets/meet.jpg" class="slide-compile-minion">
      </template>
      <FileBrowserWindow :files="files" active="CompileScript"/>
      <FileBrowserWindow :files="files" active="CompileScript-Output"/>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick over<span style="color: var(--text-color)">vue</span>
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h2>Compilation Process</h2>

        <ul style="text-align: left">
          <li style="text-decoration: line-through">Parse SFC to blocks</li>
          <li style="text-decoration: line-through">Compile each block <br>(script, style, template)</li>
          <li style="text-decoration: line-through">Combine all blocks</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide
      size="small"
      minion="stupid"
      style="background-position: 50% 100%; background-size: 50%; position: relative"
    >
      <div
        style="position: absolute; top: 10%; left: 29%; font-family: 'Gloria Hallelujah'; color: red;"
      >transpiled</div>
      <div
        style="position: absolute; top: 20%; left: 27%; font-family: 'Gloria Hallelujah'; color: green; text-decoration: line-through;"
      >compiled</div>Okay,
      <span style="text-decoration: line-through;">converted</span> to
      <em>JavaScript</em>.
    </SectionSlide>

    <SectionSlide size="small" minion="test.png" style="background-size: 50%; background-position: 0 100%">
      <div style="margin-left: 55%">Testable Components</div>
    </SectionSlide>

    <SplitSlide title>
      <template #title>
         Testable Components
        <img src="./assets/magic.png" class="slide-intro-test-minion">
      </template>
      <FileBrowserWindow :files="files" active="Testable"/>
      <FileBrowserWindow :files="files" active="TestableProd"/>
    </SplitSlide>

    <TemplateDemoSlide title="Testable Components" :files="files" active="Testable" explorer="TestExample"/>
    
    <SplitSlide title="Removing data-test during compilation">
      <div>
        <CodePreview class="text-w5" language="js" @click.stop="() => {}">
          function postTransformNode(node) {
            if (node.attrs) {
              node.attrs = node.attrs.filter(
                ({ name }) => name !== 'data-test'
              )
            }
            if (Array.isArray(node.children)) {
              node.children.map(postTransformNode)
            }
          }
        </CodePreview>
        <img src="./assets/test.png" style="position: absolute; bottom: 3em; width: 25%; right: 0;" />
      </div>
    </SplitSlide>

    <SplitSlide title="vue.config.js">
      <div>
        <CodePreview class="text-w5" language="js" @click.stop="() => {}">
          module.exports = {
            chainWebpack: config => {
              config.module.rule('vue').use('vue-loader')
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
        <img src="./assets/test.png" style="position: absolute; bottom: 3em; width: 25%; right: 0;" />
      </div>
    </SplitSlide>

    <SectionSlide size="small" minion="smug" style="background-size: 35%">
      <div style="margin-left: 40%">
        Compile-time Internationalization
      </div>
    </SectionSlide>
    
    <TemplateDemoSlide
      :files="files"
      title="Internationalization"
      active="Internationalisation"
      explorer="InternationalisationExample"
    />
    <SplitSlide title="Internationalization">
      <div>
        <CodePreview class="text-w5" language="js" @click.stop="() => {}">
          function postTransformNode(node) {
            if (node.type === 2) {
              node.text = findTranslation(node.text)
              const { expression, tokens } = parseText(node.text)
              node.expression = expression
              node.tokens = tokens
            }
            if (Array.isArray(node.children)) {
              node.children.map(postTransformNode)
            }
          }
        </CodePreview>
        <img src="./assets/config.png" style="position: absolute; bottom: 1em; width: 25%; right: 0;" />
      </div>
    </SplitSlide>
    <SplitSlide title="vue.config.js">
      <div>
        <CodePreview class="text-w5" language="js" @click.stop="() => {}">
          module.exports = {
            chainWebpack: config => {
              config.module.rule('vue').use('vue-loader')
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
        <img src="./assets/config.png" style="position: absolute; bottom: 1em; width: 25%; right: 0;" />
      </div>
    </SplitSlide>

    <SectionSlide size="small" minion="cool.png" style="background-size: 50%; background-position: 0 100%">
      <div style="margin-left: 55%">Handwriting Render Function</div>
    </SectionSlide>
    
    <SplitSlide title="https://template-explorer.vuejs.org/">
      <div class="flex">
        <iframe style="width: 100%" src="https://template-explorer.vuejs.org/" />
        <img src="./assets/cool.png" style="position: absolute; right: 0; bottom: 4em; width: 10em" />
      </div>
    </SplitSlide>

    <SplitSlide title class="padded-container" minion="actual-overvue.png" style="background-position: 100% 88%; background-size: 27%;">
      <template #title>
        A quick summary | Things to Remember
      </template>

      <div class="text-w4 flex flex-direction-column flex-align-center flex-justify-center" style="text-align: center;">
        <h1 style="margin: 0; padding: 0">Summary</h1>
        <ul style="text-align: left">
          <li>Compiler is a series of simple steps</li>
          <li>Override/extend compiler (postTransformNode)</li>
          <li>Vue CLI config allows extending compiler</li>
          <li>Everything is possible!</li>
        </ul>
      </div>
    </SplitSlide>

    <SectionSlide minion="disguise" style="background-size: 100%; background-position: center;">
      <div style="color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.54)">New in Vue 3.0</div>
    </SectionSlide>

    <AuthorSlide />
  </Keynote>
</template>

<script>
import Vue from 'vue'
import photo from './assets/znck.jpg'
import ASTExplorer from './components/ASTExplorer.vue'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.component('Greeting', {
  functional: true,
  render(h, { data, children }) {
    return h('div', data, children)
  },
})

function loadFiles() {
  const context = require.context('!!raw-loader!./files/', false, /\.(vue|js)$/)

  return context.keys().map(name => ({
    name: name.replace('./', ''),
    lang: name.endsWith('.vue') ? 'vue' : 'js',
    content: context(name),
  }))
}

const files = loadFiles()

export default {
  data() {
    return {
      files,
      file: null,
      size: 1,
      activePane: null,
      title: 'SFC Compilation',
      author: {
        name: 'Rahul Kadyan',
        twitter: '@znck0',
        photo,
        website: 'https://znck.me',
      },
    }
  },
  computed: {
    exampleFiles() {
      return this.files.filter(file => file.name.startsWith('Example'))
    },
    nextFiles() {
      return this.files.filter(file => file.name.startsWith('Next') && file.name.endsWith('.vue'))
    },
    config() {
      const { title, author } = this

      return {
        progress: {
          $presentation: { title, author },
        },
      }
    },
  },
  methods: {
    activate(index) {
      this.activePane = index
    },
  },
  components: {
    ASTExplorer,
  },
  watch: {
    size(value) {
      document.querySelector('html').style.fontSize = value + 'vw'
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

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

.flex {
  display: flex;
}

.flex-direction-column {
  flex-direction: column;
}

.flex-all > * {
  flex: 1;
}

.flex-justify-center {
  justify-content: center;
}

.flex-align-center {
  align-items: center;
}

.padded-container {
  padding: 4kem;
}

.text-w1 {
  font-size: 9kem;
}

.text-w2 {
  font-size: 6kem;
}

.text-w4 {
  font-size: 4kem;
}

.text-w5 {
  font-size: 2.5kem;
}

.slide-compile-list-minion {
  position: absolute;
  width: 25kem;
  left: 28kem;
  bottom: -1kem;
}

.slide-compile-script-minion {
  position: absolute;
  width: 20kem;
  left: 81kem;
  bottom: 2.5kem;
}

.slide-intro-test-minion {
  position: absolute;
  width: 40kem;
  left: 65kem;
  bottom: 2.5kem;
}

.slide-compile-no-script-minion {
  position: absolute;
  width: 22kem;
  left: 81kem;
  bottom: 2.5kem;
}

.slide-compile-style-minion {
  position: absolute;
  width: 16kem;
  left: 81kem;
  bottom: 2.5kem;
}

.slide-jsx-vs-template-minion {
  position: absolute;
  width: 40kem;
  left: 25kem;
  bottom: -1.2kem;
}

.slide-compile-template-parse-minion {
  position: absolute;
  width: 10kem;
  left: 41kem;
  bottom: -2.5kem;
}

.slide-compile-template-codegen-minion {
  position: absolute;
  width: 11kem;
  left: 42.5kem;
  bottom: -1.5kem;
}

.slide-compile-template-with-this-minion {
  position: absolute;
  width: 40kem;
  left: 30kem;
  bottom: -1.5kem;
}

.slide-compile-template-p-minion {
  position: absolute;
  width: 10kem;
  left: 36kem;
  bottom: -2.5kem;
}

.slide-compile-template-c-minion {
  position: absolute;
  width: 11kem;
  left: 50kem;
  bottom: -1.4kem;
}

.slide-template-features-minion {
  position: absolute;
  width: 25kem;
  bottom: 3.5kem;
  left: 73kem;
}

.compiling-template-slide > h2 {
  margin-left: 10em;
}

.jsx,
.template {
  text-align: center;
}

.compiler-steps {
  text-align: center;
}

.live {
  width: 8kem;
  position: absolute;
  left: 20kem;
  bottom: -2kem;
}

.slide-compile-minion {
  width: 25kem;
  position: absolute;
  left: 30kem;
  mix-blend-mode: darken;
  bottom: -2.5kem;
}

.focus-areas {
  background: 
    url('./assets/what.jpg') 50% 88% no-repeat,
    url('./assets/focus.png') 0% 88% no-repeat, 
    url('./assets/deep-think.png') 90% 88% no-repeat; 
  background-size: 15%, 30%, 16%;
}
</style>
