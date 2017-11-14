import React, {Component} from 'react'
import debounce from 'lodash/debounce'

export default class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      question: ''
    };
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Form submited!');
  }

  formInputChangeHandler = debounce((event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }, 200);

  render() {
    return (<div>
      <form onSubmit={this.formSubmitHandler}>
        <div>
          <label htmlFor='userName'>User Name</label>
          <input onChange={this.formInputChangeHandler} id='userName' name='userName' type='text'></input>
        </div>
        <div>
          <label htmlFor='question'>Question</label>
          <input onChange={this.formInputChangeHandler} id='question' name='question' type='text'></input>
        </div>
        <button>Submit form</button>
      </form>
      <div>
        <ul>
          <li>Name: </li>
          <li>{this.state.userName}</li>
        </ul>
        <ul>
          <li>Question: </li>
          <li>{this.state.question}</li>
        </ul>
      </div>
    </div>);
  }
}
