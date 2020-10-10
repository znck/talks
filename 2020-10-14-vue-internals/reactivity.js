/** @type {WeakMap<object, Map<any, Set<Function>>>} */
const targetMap = new WeakMap()

let activeEffect = undefined
let shouldTrack = true
const effectStack = []
const trackStack = []

/**
 * @param {object} target
 * @param {string|symbol|number} key
 */
function track(target, key) {
  if (!shouldTrack || !activeEffect) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect)
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const deps = depsMap.get(key)
  if (deps) {
    deps.forEach((effect) => effect())
  }
}

const proxyMap = new WeakMap()
function reactive(target) {
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      track(target, key)
      return res
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]

      const result = Reflect.set(target, key, value, receiver)
      if (oldValue !== value) {
        trigger(target, key)
      }
      return result
    },
  })
  proxyMap.set(target, proxy)

  return proxy
}
function enableTracking() {
  trackStack.push(shouldTrack)
  shouldTrack = true
}
function resetTracking() {
  const last = trackStack.pop()
  shouldTrack = last === undefined ? true : last
}
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

function ref(value) {
  return reactive({ value })
}

function computed(fn) {
  const state = ref(fn())

  effect(() => {
    state.value = fn()
  })

  return state
}

module.exports = { computed, ref }
