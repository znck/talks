const foo = <button onClick={event => {
  event.stopPropagation()
  event.preventDefault()
  doAction(event)
}} />