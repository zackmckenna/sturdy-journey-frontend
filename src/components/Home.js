import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({ session }) => {
  const history = useHistory()
  if (session.localUser) {

    history.push('/game_lobby')
    return (
      <>
      </>
    )
  } else {
    return (
    <>
    </>
    )
  }
}
const mapStateToProps = state => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(Home)
