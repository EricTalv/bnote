import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    currentNoteTitle: 'sample title',
    currentNoteDescription: 'sample desc',

    notesList: {},
  };

  handleFormSubmit = () => {
    // const { currentNoteTitle, currentNoteDescription } = this.state;
    // localStorage.setItem('currentNoteTitle', currentNoteTitle);
    // localStorage.setItem('currentNoteDescription', currentNoteDescription);
    // Put current note into notes list
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
                  this.setState({ currentNoteTitle: e.target.value });
                }}
              />

              <textarea
                type='text'
                className='form-control my-4'
                placeholder='Description'
                onChange={(e) => {
                  this.setState({ currentNoteDescription: e.target.value });
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
              <h1>{this.state.currentNoteTitle}</h1>
              <p>{this.state.currentNoteDescription}</p>
            </div>

            {/* check if there is data in the list; display list data */}
            {/* {(this.state.notesList || []).map((item) => (
              <div className='m-2 p-5 border'>
                <h1>{item}</h1>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
