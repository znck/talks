const foo = <input onKeyDown={event => {
  if (
    event.key === 'A' && 
    event.shiftKey && 
    event.ctrlKey
  ) {
    doAction(event)
  }
}} />
