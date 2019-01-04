export default 
class Example extends React.Component {
  state = {
    firstName: 'Jane',
    lastName: 'Doe'
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: state.firstName + ' ' + state.lastName
    }
  }
}
