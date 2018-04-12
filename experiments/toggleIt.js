let visible = false

const toggleThis = () => {
  visible = !visible
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleThis}>{visible ? 'Hide details' : 'Show details'}</button>
      {visible && <p>This is the hidden content</p>}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
}

render()