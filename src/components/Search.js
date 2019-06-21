import React from "react";
import { connect } from "react-redux";

class Search extends React.Component {
  render() {
    return (
      <div className="ui input">
        <input
          className="prompt"
          type="text"
          placeholder={this.props.name}
          value=""
          onChange={evt => this.updateInputValue(evt)}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weatherReducer
  };
};
export default connect(mapStateToProps)(Search);
