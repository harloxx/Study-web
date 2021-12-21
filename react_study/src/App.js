import './App.css'; 
import { Component } from 'react/cjs/react.production.min';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Content from './Components/Content';

class App extends Component{

  constructor(props){ 
    super(props);
    this.state={
      mode:'read', 
      subject : {title : 'WEB', sub:'World wide Web!'},
      welcome : {title:'welcome', desc:"Hello, React!!"},
      contents :[
        {id:1, title:'HTML',desc:"HTML is HyperText Markup language."},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'Javascript',desc:"Javascript is for interactive"}

      ]
    }
  }

  render(){
    var _title,_desc=null;

    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">

        
       <header>
            <h1>
            <a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              this.setState({mode:'welcome'});
            }.bind(this)}>{this.state.subject.title}</a>
            </h1>
            {this.state.subject.sub}
         </header>
       <TOC data={this.state.contents}></TOC>
       <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}


export default App;