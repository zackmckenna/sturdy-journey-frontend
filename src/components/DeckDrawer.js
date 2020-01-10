import React from 'react'
import { connect } from 'react-redux'
import DraggableCard from './DraggableCard'


const DeckDrawer = (props) => {

  if (props.session.currentPlayerRoles && props.session.localUser)  {
    const userRole = props.session.currentPlayerRoles.filter(user => user.userId === props.session.localUser.id)[0]
    console.log(userRole)
    console.log(userRole.role)
    console.log(props.roles)
    return (
      <DraggableCard />
    )
  }
  return (
    <DraggableCard />
  )

}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(DeckDrawer)
