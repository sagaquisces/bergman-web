
class IndecisionApp extends React.Component {
    render () {
      const title = 'Indecision App'
      const subtitle = '!!Putting your hands into the hands of a computer'
      const options = ['Thing one', 'Thing two', 'Thing four']
      
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action/>
          <Options options={options}/>
          <AddOption/>
        </div>
      )
    }
  }
  
  class Header extends React.Component{
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      )
    }
  }
  
  class Action extends React.Component{
    handlePick() {
      alert('handlePick')
    }
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      )
    }
  }
  
  class Options extends React.Component{
    constructor(props) {
      super(props)
      this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
      console.log(this.props.options)
      // alert('handleRemoveAll')
    }
    
    render() {
      
      return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option}/>
          )}
          <Option />
        </div>
      )
    }
  }
  
  class Option extends React.Component{
    render() {
      return (
        <p>
          {this.props.optionText}
        </p>
      )
    }
  }
  
  // 1. Setup the form with text input and submit button
  // 2. Wire up onSubmit
  // 3. handleAddOption -> fetch the value typed -> if value, then alert
  
  class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault()
  
      const option = e.target.elements.option.value.trim()
  
      if (option) {
        alert(option)
      }
      e.target.elements.option.value = ''
    }
    render() {
      return (
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      )
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
  
  // console.log('App.js is running')
  
  // // only render the subtitle (and p tag) if subtitle exists
  // // -- use logical AND operator
  // // render new p tag - if options.length > 0 "Here are your options" "No options"
  // // -- ternary operator
  
  // const app = {
  //   title: 'Indecision',
  //   subtitle: 'Hello.',
  //   options: []
  // }
  
  // const onFormSubmit = (e) => {
  //   e.preventDefault()
  
  //   const option = e.target.elements.option.value
  
  //   if (option) {
  //     app.options.push(option)
  //     e.target.elements.option.value = ''
  //     render()
  //   }
  // }
  
  // const onRemoveAll = () => {
  //   app.options = []
  //   render()
  // }
  
  // const onMakeDecision = () => {
  //   const rando = Math.floor(Math.random() * app.options.length)
  //   const option = app.options[rando]
  //   alert(option)
  // }
  
  // // create "Remove All" button above list
  // // onClick -> wipe the array --> rerender
  
  
  // const appRoot = document.getElementById('app')
  
  
  // const render = () => {
  //   const template = (
  //     <div>
  //       <h1 id='someId'>{app.title}</h1>
  //       {app.subtitle && <p>{app.subtitle}</p>}
  //       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  //       <ol>
  //         {
  //           app.options.map((option) => <li key={option}>{option}</li>)
  //         }
  //       </ol>
  //       <form onSubmit={onFormSubmit}>
  //         <input type='text' name="option"/>
  //         <button>Add Option</button>
  //       </form>
  //       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
  //       <button onClick={onRemoveAll}>RemoveAll</button>
        
  //     </div>
  //   )
  
  //   ReactDOM.render(template, appRoot)
  // }
  
  // render()