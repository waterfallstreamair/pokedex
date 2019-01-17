import { connect } from 'react-redux'
import * as itemActions from '../redux/actions/itemActions'

import React, { Component } from 'react'

class ItemPage extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id)
  }

  render() {
    const { error, isFetched, info } = this.props
    return (
      <div className="item">
        {error && <div className="item__error">{error}</div>}
        <div className="item__title">Pokemon details</div>
        <div
          className="pokemon__sprite__info"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.props.match.params.id
            }.png`})`
          }}
        />
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="info">
            <li>Pokemon id {this.props.match.params.id}</li>
            <li>Name: {info.name}</li>
          </ul>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { info, isFetched, error } = state.item

  return {
    info,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getItem: itemActions.getItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage)
