

const BergmanApp = () => (
  <div>
    <Nav />
    <AppContent />
  </div>
)

const AppContent = () => (
  <div className="w3-content" style={{maxWidth:'2000px',marginTop:'46px'}}>
    <Slideshow />
    <About />
  </div>
)

const NavLarge = (props) => (
  <div className='w3-top'>
    <div className="w3-bar w3-black w3-card">
      <a
        className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
        href="javascript:void(0)"
        onClick={props.toggleNavMenu}
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars"></i>
      </a>
      <a href="#" className="w3-bar-item w3-hover-red w3-button w3-padding-large">
        HOME
      </a>
      <a href="#about" className="w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small">
        ABOUT
      </a>
      <a href="#schedule" className="w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small">
        SCHEDULE
      </a>
      <a href="#contact" className="w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small">
        CONTACT
      </a>
    </div>
  </div>
)

const NavSmall = () => (
  <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:'46px'}}>
    <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-red">ABOUT</a>
    <a href="#schedule" className="w3-bar-item w3-button w3-padding-large w3-hover-red">SCHEDULE</a>
    <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-red">CONTACT</a>
  </div>
)

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavMenu = this.toggleNavMenu.bind(this)
  }
  
  toggleNavMenu () {
    const x = document.getElementById("navDemo")
      if(x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"
      } else {
        x.className = x.className.replace(" w3-show", "")
      }
  }

  render() {
    return (
      <div>
        <NavLarge toggleNavMenu={this.toggleNavMenu}/>
        <NavSmall />
      </div>
    )
  }
}

class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.runSlideshow = this.runSlideshow.bind(this)
    this.myIndex = 0
  }
  componentDidMount() {
    this.runSlideshow()
  }

  runSlideshow() {
    let i
    let x = document.getElementsByClassName("mySlides")
    for (i=0; i < x.length; i++) {
      x[i].style.display = "none"
    }
    this.myIndex++
    if (this.myIndex > x.length) {this.myIndex = 1}
    x[this.myIndex-1].style.display = "block"
    setTimeout(this.runSlideshow, 4000)
  }

  render() {
    return (
      <div>
        <Slide imgSrc='https://www.nwpb.org/wp-content/uploads/2018/02/Adult-Piano-Concert.jpeg' slideTitle={true}/>
        <Slide imgSrc='https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        <Slide imgSrc='https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
      </div>
    )
  }
}

const Slide = (props) => (
  <div className='mySlides w3-display-container w3-center'>
    <img className="w3-opacity-max" src={props.imgSrc} style={{width:'100%'}}/>
    <Header slideTitle={props.slideTitle}/>
  </div>
)

const Header = (props) => (
  <div className="w3-display-middle w3-text-red">
    <h1 className={"w3-jumbo w3-center " + (props.slideTitle && 'w3-animate-top')} style={{textShadow:'1px 1px 0 #000',lineHeight:'15vmin'}}>Lisa Bergman</h1>
    <hr className="w3-border-black" style={{margin:'auto',width:'40%'}} />
    <p className="w3-large w3-center"><strong>Pianist, Producer</strong></p>
  </div>
)

const RoleInThirds = (props) => (
  <div className="w3-third">
    <p><strong>{props.org}</strong>, {props.role}</p>
    <a href={props.url}><img src={props.imgSrc} className="w3-circle w3-margin-bottom" alt="Random Name" style={{width:'60%'}} /></a>
  </div>
)

const About = (props) => (
  <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="about">
    <SectionHeading 
      title = 'ABOUT LISA'
      subtitle = 'Finding truth in music.'
    />
    <p className="w3-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="w3-row w3-padding-32">
      <RoleInThirds 
        org='NOISE'
        role='Executive Director'
        url='http://noiseforkids.org/'
        imgSrc='https://www.w3schools.com/w3images/bandmember.jpg'
      />

      <RoleInThirds 
        org='Somewhere'
        role='Some Position'
        url='#'
        imgSrc='https://www.w3schools.com/w3images/bandmember.jpg'
      />

      <RoleInThirds 
        org='Somewhere Again'
        role='Some Other Position'
        url='#'
        imgSrc='https://www.w3schools.com/w3images/bandmember.jpg'
      />
    </div> 
  </div>
)

const SectionHeading = (props) => (
  <div>
    <h2 className="w3-wide">{props.title}</h2>
    {props.subtitle && <p className="w3-opacity"><i>{props.subtitle}</i></p>}
  </div>
)


ReactDOM.render(<BergmanApp />, document.getElementById('app'))

