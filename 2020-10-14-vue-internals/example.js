{

let a = 4
let b = a * 2
console.log(b) // -> 8
a = 5
console.log(b) // -> 8
b = a * 2
console.log(b) // -> 10

}

{

import { ref, computed } from 'vue'

const a = ref(4)
const b = computed(() => a.value * 2) 
console.log(b.value) // -> 8

a.value = 5
console.log(b.value) // -> 10

}

{


function reactive(target) {
  const proxy = new Proxy(target, {/* ... */})
  
  return proxy
}

}


{
const targetMap = new WeakMap() 
let activeEffect = undefined
let shouldTrack = true

function track(target, key) {
  if (!shouldTrack || !activeEffect) return

  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }

  if (!deps.has(activeEffect)) {
    deps.add(activeEffect)
  }
}

}

{
const targetMap = new WeakMap() 
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const deps = depsMap.get(key)
  if (deps) {
    deps.forEach((dep) => dep.call())
  }
}

}


{

const effectStack = []
let activeEffect = undefined
function effect(fn) {
  const run = () => {
    if (!effectStack.includes(run)) {
      try {
        enableTracking()
        effectStack.push(run)
        activeEffect = run
        return fn()
      } finally {
        effectStack.pop()
        resetTracking()
        activeEffect = effectStack[effectStack.length - 1]
      }
    }
  }

  run()

  return run
}

}
{

const trackStack = []
let shouldTrack = true
function enableTracking() {
  trackStack.push(shouldTrack)
  shouldTrack = true
}

function resetTracking() {
  const last = trackStack.pop()
  shouldTrack = last === undefined ? true : last
}

}
