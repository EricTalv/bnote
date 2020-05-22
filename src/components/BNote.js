import React from 'react';

class BNote extends React.Component {
  constructor() {
    super();
  }

  state = {
    noteTitle: 'sample title',
    noteDescription: 'sample desc',

    notesList: [],
  };

  handleFormSubmit = () => {
    const { noteTitle, noteDescription } = this.state;

    localStorage.setItem('noteTitle', noteTitle);
    localStorage.setItem('noteDescription', noteDescription);
  };

  render() {
    const myStyles = {
      maxWidth: 500,
    };

    return (
      <div className='App'>
        <div className='container-fluid mt-5'>
          <div
            style={myStyles}
            className='row justify-content-center border mx-auto p-5'
          >
            <div className='form-group m-0 w-100'>
              <input
                type='text'
                className='form-control'
                placeholder='Title'
                onChange={(e) => {
                  this.setState({ noteTitle: e.target.value });
                }}
              />

              <textarea
                type='text'
                className='form-control my-4'
                placeholder='Description'
                onChange={(e) => {
                  this.setState({ noteDescription: e.target.value });
                }}
              />

              <button
                onClick={() => this.handleFormSubmit()}
                className='form-control'
              >
                Save
              </button>
            </div>
          </div>

          <hr />

          <div className='row border justify-content-center mx-auto'>
            <div className=' m-2 p-5 border'>
              <h1>{this.state.noteTitle}</h1>
              <p>{this.state.noteDescription}</p>
            </div>

            {/* check if there is data in the list; display list data */}
            {(this.state.notesList || []).map((item) => (
              <div className='m-2 p-5 border'>
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BNote;
