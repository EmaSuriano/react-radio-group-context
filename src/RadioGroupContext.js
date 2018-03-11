import React from 'react';

const RadioGroupContext = React.createContext('radioGroup');
const { Provider, Consumer } = RadioGroupContext;

// class RadioGroupProvider extends React.Component {
//   state = {
//     radioGroups: {}
//   };

//   render() {
//     return (
//       <Provider value={this.state.theme}>
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

export { Provider, Consumer };
export default RadioGroupContext;
