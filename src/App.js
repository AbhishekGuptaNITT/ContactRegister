import React,{Component} from 'react'
import classes from './App.module.css'
import DisplayContact from './Components/DisplayContact/DisplayContact'
// import Addcontact from './Components/AddContact/Addcontact'
import Nav from './Components/Nav/Nav'
import Form from './Components/Form/Form'
import Search from './Components/Search/Search'
class App extends Component{
  state = {
    contacts:[],
    addingMode:false,
    searchResults:null,
  }
  addContactHandler = () => {
    let formStatus = this.state.addingMode
    this.setState({
      addingMode:!formStatus,
    })
  }
  addDataHandler = () => {
    const person = {
      name:document.getElementById('name').value,
      dob:document.getElementById('date').value,
      tel:document.getElementById('tel').value
    }
    let contactList = this.state.contacts
    contactList.push(person)
    this.setState({
      contacts:contactList,
      addingMode:false,
    })
  }
  searchTelHandler = () => {
    let tel = document.getElementById('stel').value
    const contactList = this.state.contacts
    let resultList = []
    for(let i=0;i<contactList.length;i++){
      if(contactList[i].tel===tel){
        resultList.push(i)
      }
    }
    this.setState({
      searchResults:resultList,
    })
  }
  render(){
    let displayContact = null;
    if(this.state.searchResults){
      let results = this.state.searchResults
      let contactList = this.state.contacts
      displayContact = results.map(
        (index) => {
          return(
            <DisplayContact 
            name={contactList[index].name}
            dob={contactList[index].dob}
            tel={contactList[index].tel}
            />
          )
        }
      )
      if(displayContact.length==0)
        displayContact=<h1 style={{padding:'20px',boxShadow:'10px 10px 20px black',margin:'50px'}}>0 Results Fetched</h1>
    }
    let form = null,search=<Search searchFun={this.searchTelHandler} />;
    if(this.state.addingMode){
      form=<Form insertData = {this.addDataHandler} />
      search=null
    }
    return(
      <div>
        <Nav addnew = {this.addContactHandler}/>
        {search}
        {form}
        {displayContact}
        <h1>HEY THIS IS TEST BRANCH</h1>
      </div>
    )
  }
}

export default App