import React from 'react';
import axios from 'axios';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      EmployeeName: '',
      EmployeeTeam: '',
      EmployeePhoneNumber:''
    }
  }
  componentDidMount(){
    axios.get("http://3.226.235.212:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        EmployeeName:'',
        EmployeeTeam:'',
        EmployeePhoneNumber:''
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://3.226.235.212:8080/api/",{
        EmployeeName:this.state.EmployeeName,
        EmployeeTeam:this.state.EmployeeTeam,
        EmployeePhoneNumber:this.state.EmployeePhoneNumber
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://3.226.235.212:8080/api/",{
        id:id,
        EmployeeName:this.state.EmployeeName,
        EmployeeTeam:this.state.EmployeeTeam,
        EmployeePhoneNumber:this.state.EmployeePhoneNumber
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://3.226.235.212:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://3.226.235.212:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        EmployeeName:res.data.EmployeeName,
        EmployeeTeam:res.data.EmployeeTeam,
        EmployeePhoneNumber:res.data.EmployeePhoneNumber
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
                    <input value={this.state.EmployeeName} onChange={(e)=>this.setState({EmployeeName:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter EmployeeName</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mail</i>
                    <input value={this.state.EmployeeTeam} onChange={(e)=>this.setState({EmployeeTeam:e.target.value})} type="EmployeeTeam" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter EmployeeTeam</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input value={this.state.EmployeePhoneNumber} onChange={(e)=>this.setState({EmployeePhoneNumber:e.target.value})} type="EmployeePhoneNumber" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter EmployeePhoneNumber</label>
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
              <th>EmployeeName</th>
              <th>EmployeeTeam</th>
              <th>EmployeePhoneNumber</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.EmployeeName}</td>
                      <td>{user.EmployeeTeam}</td>
                      <td>{user.EmployeePhoneNumber}</td>
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
