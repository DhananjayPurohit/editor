import React from 'react';

import './index.css';
import * as vega from 'vega';
import * as vl from 'vega-lite';

const getVersion = (mode) => {
  return mode === 'vega' ? vega.version : vl.version;
}

export default class Toolbar extends React.Component {
  static propTypes = {
    error: React.PropTypes.string,
    debug: React.PropTypes.bool,
    renderer: React.PropTypes.string,
    autoParse: React.PropTypes.bool
  }

  renderWarningsAndErrors() {
    if (this.props.error) {
      return (
        <div className='error-field'>
          {this.props.error}
        </div>
      )
    }
  }

  manualParseSpec() {
    if(!this.props.autoParse) {
      return (
        <div className='autoParse' onClick={this.props.setNextRender}>
          {`Parse`}
        </div>
      )
    }
  }

  render () {
    return (
      <div className='toolbar'>
        {this.renderWarningsAndErrors()}
        {/*<div className='debug-toggle' onClick={this.props.toggleDebug}>
          {
            this.props.debug ? 'Hide debug tools' : 'Show debug tools'
          }
        </div>*/}
        <div className='status'>
          {
            `Mode: ${this.props.mode}  Version: ${getVersion(this.props.mode)}`
          }
        </div>
        <div className='autoParse' onClick={this.props.toggleAutoParse}>
          {
            this.props.autoParse ? `Parse: auto` : `Parse: manual`
          }
        </div>
        {this.manualParseSpec()}
        <div className='renderer-toggle' onClick={this.props.cycleRenderer}>
          {
            `Renderer: ${this.props.renderer}`
          }
        </div>
      </div>
    );
  };
};
