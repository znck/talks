export default function Example({ foo }) {
  const children = [
    <div>Lorem Ipsum Dolor</div>
  ]

  if (foo === true) {
    children.push(<div>Lorem Ipsum Dolor</div>)
  }

  return (
    <section>
      {children}
    </section>
  )
}