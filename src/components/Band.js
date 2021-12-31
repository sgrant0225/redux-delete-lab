import React from 'react';



const Band = (props) => {
    return (
      <li>
        <span>{props.name.name}</span>
        <button onClick={() => props.deleteBand(props.name.id)}>DELETE</button>
      </li>
    );
  };

  export default Band;

// class Band extends Component {
     
//     handleOnClick = () => {
//         this.props.deleteBand(this.props.id)
//     }
    
//     render() {
//         return(
//         <div>
//           <li> {this.props.name} </li> 
//           <button onClick={this.handleOnClick}>
//               Delete
//           </button>
//         </div>

//         )   
//     }
    
// }

