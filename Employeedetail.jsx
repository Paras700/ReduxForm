import React, { Component } from 'react';
import {connect} from 'react-redux';
class Employeedetail extends Component{

    render(){
        return (
            <div>
               <p>{this.props.formDeatil}</p>
           </div>
        )
    }
}

function mapStateToProps(state){
     return({
         formDeatil : state.formState.name,
     })
}
function mapDispatch(dispatch){
     return({

     })
}

export default connect(mapStateToProps,mapDispatch)(Employeedetail);