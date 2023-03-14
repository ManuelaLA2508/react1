import React from 'react';
import '../stylesheest/Tarjeta.css';

function Tarjeta (props){
    return (
        <div class="container">
            <div className="card">
            <img src={require(`../images/${props.imagen}.svg`)} alt="" className='hero'/>
            <div class="card-body">
                <div className="card1">
                    <h3 className="ti">{props.ti}</h3>
                    <p className="you">{props.you}</p>
                </div>
                <div className="icon-music">
                    <img src={require(`../images/${props.imagen1}.svg`)} alt="" className="icon"/>
                    <div className="icon">
                    <h6 className='h'>{props.h}</h6>
                    <p className='p'>{props.p}</p>
                    </div>
                    <p className="p1">{props.p1}</p>
                </div>
            </div>
                <div className="card2">
                <button type="button" class="btn btn-primary" className='boton1'>{props.boton1}</button>
                </div>
                <div className="card3">  
                <button type="button" class="btn btn-link" className='boton2'>{props.boton2}</button>
                </div>
            </div>
        </div>

    );
}

export default Tarjeta;