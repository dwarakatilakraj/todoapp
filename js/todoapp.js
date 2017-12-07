import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            input:""
        }
    this.onclickhandler=this.onclickhandler.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.onclickadd=this.onclickadd.bind(this);
        
}
componentWillMount(){
   axios.get('http://127.0.0.1:3000/showalllist').then((response)=>{
            console.log("hello", response.data);
            this.setState({ data: response.data});
        })
  .catch(function (error) {
    console.log(error);
  });
}
    
    onclickhandler(index){
// var arr=this.state.data;
//         console.log("itemmmm",data);
//         var array=[]
//     arr.filter((item) => { 
//         if(item!==data){
//             array.push(item)
//         }
//     })
//         this.setState({
//             data:array
//                         })
//     }
        axios({method:'delete',url:'http://127.0.0.1:3000/todoindex',data:{data:index}
    }).then(function (response) {
    console.log("nAMASTE",response.data);
    Object.assign(this.state,{ data: response.data});
  })
  .catch(function (error) {
    console.log(error);
  })
  this.forceUpdate();
    }

    handlechange(event){
        event.preventDefault;
        this.setState({input:event.target.value})
    }
    onclickadd(){
      axios.post('http://127.0.0.1:3000/addtodolist',JSON.stringify({name:this.state.input}), 
      {
                headers: {
                    "Content-Type": "application/json"
                }
        }
             ) 
  .then(function (response) {
    console.log("oye",response.data);
    Object.assign(this.state,{ data: response.data});
  })
  .catch(function (error) {
    console.log(error);
  });
  
    }
    render(){
        console.log("rendering");
        const list= this.state.data.map((item,index) =>
                <li>
                    <span>
                    {item} 
                    <span>
                     <button onClick={(e)=>{e.preventDefault,this.onclickhandler(item)}}>   delete   </button>
                     </span>
                    </span>
                </li>
                );
        return(
            <div>
               
                  <div>{list}</div>
                  <input type="text" onChange={this.handlechange}></input>
                   <button onClick={this.onclickadd}> add </button>
                  <h1>Hi</h1>
            </div>

        )
    }
    
}