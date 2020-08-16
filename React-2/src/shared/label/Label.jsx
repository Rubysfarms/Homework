import React, { Component } from 'react';

export class Label extends Component {

    constructor (props){
        super (props);
        this.props = props;
        this.ref = React.createRef();                
    }

    render (){     
        const {htmlFor, title, name, props, pattern} = this.props;              
        const JSX = <div className="form-group">
                        <label htmlFor={htmlFor}>{title}</label>
                        <input ref={this.ref} type="text" name={name} className="form-control"/>
                        <span className='fill-the-field visibility-hidden'>Заполните поле</span>
                        <span className='fill-the-field visibility-hidden'>Формат: 2-266-11156-6</span>                                        
                    </div>;               
        props.push(this.ref);
        return JSX
    }
}