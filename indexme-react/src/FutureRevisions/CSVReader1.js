import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CSVReader } from 'react-papaparse'

const buttonRef = React.createRef()
export default class CSVReader1 extends React.Component{
  handleOpenDialog = (e) => {
    if (buttonRef.current){ buttonRef.current.open(e)
    }
  }
  handleOnFileLoad = (data) => {

    console.log('-----------------')
    console.log(data)
    console.log('---------------- ')
  }
  handleOnError= (err, file, inputElem, reason) =>{
    console.log(err)
  }
  handleOnRemoveFile = (data) =>{
    console.log('----------------')
    console.log(data)
    console.log('----------------')
  }
  handleRemoveFile = (e) => {
    if (buttonRef.current){
      buttonRef.current.removeFile(e)
    }
  }
  render(){
    return (
      <div>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          config={{header: true, skipEmptyLines: true}}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}>
          
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 5
            }}
            >
              <button
                type='button'
                onClick={this.handleOpenDialog}
                style={{
                  className: "btn btn-secondary dropdown-toggle",
                  backgroundColor: 'darkGrey',
                  height: 30,
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  width: 110,
                  paddingLeft: '0',
                  paddingRight: 0
                }}
              >
                Get CSV
              </button>
              <div
                style ={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 36,
                  lineHeight: 1.5,
                  marginTop: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: 200
                }}
              >
                {file && file.name}
              </div>
              <button
                style={{
                  backgroundColor: 'darkGrey',
                  borderRadius: 0,
                  height: 36,
                  width: 100,
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
                onClick={this.handleRemoveFile}
              >
                Remove
              </button>
            </aside>
          )}
          </CSVReader>
        </div>
          )
  }
}