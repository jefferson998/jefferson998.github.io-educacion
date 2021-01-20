import React from 'react';


// hol
// { <button type="button">{props.text}</button> } ejemplo 

class Button extends React.Component {
    state ={
        count:0,
    }
    handleClick =() => {
        this.setState({
            count:this.state.count + 1,
        })
    }
    render() {
        const {count}=this.state;
        return (
            <div>
                <h1> peras:{count}</h1>
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
             </div>

        )
    }
}

// const Button = props =>{
//     const {text} = props;
//     return(
//         <div>
//             <button type="button">{text}</button>
//         </div>
//     );
// };

export default Button;