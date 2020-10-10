import {
  createRouter,
  createWebHistory,
} from 'vue-router';

createRouter({
  history: createWebHistory(),
  routes: [{ name: 'home', path: '/' }],
});

import { onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        `Do you really want to leave? 
         you have unsaved changes!`,
      );

      if (!answer) return false;
    });
  },
};

import { defineStore } from 'vuex';

const CounterStore = defineStore({
  name: 'counter',
  state() {
    return { count: 1 };
  },
  getters: {
    double() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

import { createVuex } from 'vuex';

const vuex = createVuex();
const counter = vuex.store(CounterStore);

counter.increment();
counter.count;
counter.double;

import { defineComponent } from 'vue';
import {
  useMouse,
  usePreferredDark,
  useLocalStorage,
} from '@vueuse/core';

export default defineComponent({
  setup() {
    // tracks mouse position
    const { x, y } = useMouse();
    // does user prefers dark theme
    const isDark = usePreferredDark();
    // persist state in localStorage
    const state = useLocalStorage('my-storage', {
      color: 'red',
    });

    return { x, y, isDark, state };
  },
});

import { defineComponent } from 'vue';
import {
  useMouse,
  usePreferredDark,
  useLocalStorage,
} from '@vueuse/core';

function useFunctions() {
  // tracks mouse position
  const { x, y } = useMouse();
  // does user prefers dark theme
  const isDark = usePreferredDark();

  return { x, y, isDark };
}

export default defineComponent({
  setup() {
    // persist state in localStorage
    const state = useLocalStorage('my-storage', {
      color: 'red',
    });

    return { ...useFunctions(), state };
  },
});

// GrammarlyClient.js
import { ref } from '@vue/reactivity';
export const alerts = ref([]);

client.onAlert((alert) => {
  alerts.value.push(alert);
});

// Diagnostics.js
watch(alerts, (newAlerts) => {
  vscode.sendDiagnostics(newAlerts);
});

// watch.js
import { effect } from '@vue/reactivity';
function watch(source, callback) {
  const getter = () => {
    const value = source.value;
    if (Array.isArray(value))
      value.forEach((item) => item);

    return value;
  };

  let oldValue;
  function scheduler() {
    const newValue = runner();
    callback(newValue, oldValue);
    oldValue = newValue;
  }
  const runner = effect(getter, { scheduler });

  scheduler();

  return () => runner.stop();
}

/** 
```vue
<template></template>
```
*/