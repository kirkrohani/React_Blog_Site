import React from 'react';
import './css/App.css';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || '',
      description: this.props.description || '',
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description,
    });
  };

  render () {
      const submitText = this.props.id ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  value={this.state.project}
                  onChange={this.handleDescriptionChange}
                />
              </div>
              <div className='ui two bottom attached buttons'>
                <button
                  className='ui basic blue button'
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
                <button
                  className='ui basic red button'
                  // onClick={this.props.onFormClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    
  }
}

export default BlogForm;