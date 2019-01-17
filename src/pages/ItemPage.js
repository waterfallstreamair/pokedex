import { connect } from 'react-redux'
import * as itemActions from '../redux/actions/itemActions'

import React, { Component } from 'react'

class ItemPage extends Component {
  componentDidMount() {}

  render() {
    const error = false
    const isFetched = false
    return (
      <div className="item">
        {error && <div className="item__error">{error}</div>}
        <div className="item__title">Pokemon details</div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="details">Pokemon id {this.props.match.params.id}</ul>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage)
