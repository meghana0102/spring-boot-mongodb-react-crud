import React from 'react';
import axios from 'axios';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      Employee Name:'',
      Employee Team:'',
      Employee PhoneNumber:''
    }
  }
  componentDidMount(){
    axios.get("http://172.31.51.8:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        Employee Name:'',
        Employee Team:'',
        Employee PhoneNumber:''
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://172.31.51.8:8080/api/",{
        Employee Name:this.state.Employee Name,
        Employee Team:this.state.Employee Team,
        Employee PhoneNumber:this.state.Employee PhoneNumber
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://172.31.51.8:8080/api/",{
        id:id,
        Employee Name:this.state.Employee Name,
        Employee Team:this.state.Employee Team,
        Employee Phone Number:this.state.employee phoneNumber
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://172.31.51.8:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://172.31.51.8:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        Employee Name:res.data.Employee Name,
        Employee Team:res.data.Employee Team,
        Employee PhoneNumber:res.data.Employee PhoneNumber
      });
    }) 
  }
  render(){
    return (
      <div className="container">
         <div className="row">
         <div className="col s6">
                 <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter Name</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mail</i>
                    <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type="email" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter Email</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} type="password" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter Password</label>
                  </div>
                  <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                 </form>
          </div>          
          <div className="col s6">
          <table>
        <thead>
          <tr>
              <th>Employee Name</th>
              <th>Employee Team</th>
              <th>Employee PhoneNumber</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.Employee Name}</td>
                      <td>{user.Employee Team}</td>
                      <td>{user.Employee PhoneNumber}</td>
                      <td>
                        <button onClick={(e)=>this.edit(user.id)} className="btn waves-effect waves-light" type="submit" name="action">
                          <i className="material-icons ">edit</i>
                        </button>       
                      </td>
                      <td>
                        <button onClick={(e)=>this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }
         

        </tbody>
      </table>
          </div>                
          </div>              
      </div>
    );
  }
}

export default App;
