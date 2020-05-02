import React from 'react';
import { connect } from 'react-redux';
import { CALCULATE } from '../../redux/actions/actions';

const calculate = props => {
    let numberOne = document.getElementById('value-one');
    let numberTwo = document.getElementById('value-two');
    let result = Number(numberOne.value)+Number(numberTwo.value)

    props.calculateOperation(result);
}


const Home = (props)=>{
    
    return(
        <div className="container card mt-5 border border-dark rounded" style={{ width: '20%' }}>
            <div className="card-body">
                <h5 className="text-monospace">Calculator with redux</h5>
                <div className="form-group">
                    <input type="number" placeholder="Numero 1" id="value-one" className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                <input type="number" placeholder="Numero 2" id="value-two" className="form-control"/>
                </div>
                <br/>
                <button onClick={() => calculate(props)} className="btn btn-dark form-control" >Calcular</button>
                <br/>
                <div className="form-group mt-2">
                    <span  className="form-control" >El resultado es: {props.result}</span>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({ //Esta funcion nos trae el estado del Store para poder usar el state en este componente, tamebine con esta funcion podemos consultar el estado
    result: state.result
});
const mapDispatchToProps = dispatch => ({
    calculateOperation(result){
        dispatch({
            type: CALCULATE,
            result
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);