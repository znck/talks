<template>
  <Keynote>
    <TitleSlide title="Pace up with Vue">
      <Build>
        <p>Basically! Getting  Started</p>  
      </Build>

      <Build>
        <p>Please fill this survey: https://goo.gl/xwqMQN</p>
      </Build>
    </TitleSlide>
    
    <TitleSlide title="Who are we?" />
    
    <PhotoTitleSlide photo="//github.com/znck.png" vertical title="Rahul Kadyan">
      @znck0
    </PhotoTitleSlide>
    <PhotoTitleSlide photo="//github.com/swapagarwal.png"  vertical title="Swapnil Agarwal">
      @swapagarwal
    </PhotoTitleSlide>

    <TitleSlide title="Who are you?" />

    <Slide center>
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh"><img src="https://i.redd.it/dshl53i834411.png" /></div>
    </Slide>

    <Slide>
      <Fit>
        <div>
          <h1>Resources</h1>

          <ul>
            <li>github.com/znck/pace-up-with-vue-workshop</li>
            <li>vuejs.org</li>
          </ul>
        </div>
      </Fit>
    </Slide>


    <Slide>
      <Fit>
        <div>
          <h1>Format:</h1>

          <ul>
            <li>Learn</li>
            <li>Question</li>
            <li>Practise</li>
          </ul>
        </div>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <h1>Topics:</h1>

        <ul>
          <li>Vue basics</li>
          <li>Router</li>
          <li>State Management (Vuex)</li>
        </ul>
      </Fit>
    </Slide>

    <TitleSlide title="Vue">
      <Build>
        <p>
          is a <br />progressive + reactive<br /> framework
        </p>
      </Build>
    </TitleSlide>

    <Slide>
      <Fit>
        <CodePreview :code="one"></CodePreview>
      </Fit>
    </Slide>

    <TitleSlide title="Exercise 1: Hello Vue" subtitle="npm test -- 1" />

    <Slide>
      <Fit>
        <h1>Data Binding</h1>
        <CodePreview>
          v-bind:attribute="expression"

          eg: v-bind:class="['foo', 'bar']"
        </CodePreview>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <h1>Data Binding (in text)</h1>
        <CodePreview :code="two"></CodePreview>
      </Fit>
    </Slide>

    <TitleSlide title="Exercise 2: Data Binding" subtitle="npm test -- 2" />

    <Slide>
      <Fit>
        <h1>Event Binding</h1>
        <CodePreview>
          v-on:event.modifier="expression"

          eg: v-bind:keypress.shift.ctrl.a="selectAll"
        </CodePreview>
      </Fit>
    </Slide>

    <TitleSlide title="Exercise 3: Event Binding" subtitle="npm test -- 3" />

    <Slide>
      <Fit>
        <h1>Two-way Binding</h1>
        <CodePreview>
          &lt;input
            v-bind:value="value"
            v-on:change="event => value = event.target.value"
          /&gt;
        </CodePreview>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <h1>Two-way Binding</h1>
        <CodePreview>
          &lt;input
            v-model="value"
          /&gt;
        </CodePreview>
      </Fit>
    </Slide>
    
    <TitleSlide title="Exercise 4: Two-way Binding" subtitle="npm test -- 4" />

    <Slide>
      <Fit>
        <h1>Conditional Rendering</h1>
        <CodePreview>
          &lt;input
            v-if="value"
          /&gt;
        </CodePreview>
      </Fit>
    </Slide>
    
    <Slide>
      <Fit>
        <h1>Conditional Rendering</h1>
        <CodePreview>
          v-if
          v-else
          v-else-if
        </CodePreview>
      </Fit>
    </Slide>

    <TitleSlide title="Exercise 5: Conditional Rendering" subtitle="npm test -- 5" />

    <Slide>
      <Fit>
        <h1>Iterative Rendering</h1>
        <CodePreview>
          &lt;div
            v-for="item in items"
          /&gt;
        </CodePreview>
      </Fit>
    </Slide>

    <Slide>
      <Fit>
        <h1>Iterative Rendering</h1>
        <CodePreview>
          v-for="item in itemsArray"
          v-for="(item, index) in itemsArray"
          v-for="value in itemsObject"
          v-for="(value, key) in itemsObject"
          v-for="(value, key, index) in itemsObject"
        </CodePreview>
      </Fit>
    </Slide>

    <TitleSlide title="Exercise 6: Conditional Rendering" subtitle="npm test -- 6" />

    <Slide>
      <Fit>
        <h1>Components</h1>
        <CodePreview>
          // Global Registration

          Vue.component('component-name', { /* component options */ })
        </CodePreview>
      </Fit>
    </Slide>

  </Keynote>  
</template>

<script>
export default {
  data () {
    return {
      one: `
<div id="app">
  <h1 class="heading">Hello {{ name }}! Welcome to JSFoo.</h1>
</div>

<script${'>'}
  const app = new Vue({
    el: '#app',
    data: {
      name: 'Foo'
    }
  })
${'<'}/script>`,
      two: '{{ expression }}\neg: Today\'s date is {{ new Date() }}.'
    }
  }
}
</script>