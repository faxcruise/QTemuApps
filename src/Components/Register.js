import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, fetchUser } from '../Redux/actions'

class Register extends React.Component{
    
    


    render(){
        let { angkaFromRedux } = this.props
        return (
            <div>
               <h1> Coba Register : {angkaFromRedux}</h1>

               <button onClick={() => this.props.increment()}>tambah</button>    
                <button onClick={() => this.props.decrement(10)}>kurang</button>
                <button onClick={() => this.props.fetchUser()}>fetch</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    angkaFromRedux : state.angka
})

const mapDispatchToProps  =  ({
    increment,
    decrement,
    fetchUser
})

export default connect(mapStateToProps, mapDispatchToProps) (Register);