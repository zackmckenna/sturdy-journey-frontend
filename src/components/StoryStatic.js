import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col } from 'reactstrap'


const StoryStatic = (props) => {
  console.log(props.deck.cards.filter(card => card.type === 'userRoleCard')[0])
  if(props.deck.cards.filter(card => card.type === 'userRoleCard')[0]){
    const userRole = props.deck.cards.filter(card => card.type === 'userRoleCard')[0]
    return (
      <h1 className='text-center'>{userRole.roleName}</h1>
    )
  }
  return (
    <>
    </>
  )
  // if (props.deck.cards.filter(card => card.type === 'userRoleCard'))
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles,
    deck: state.deck,
    airtable: state.airtable
  }
}

export default connect(mapStateToProps)(StoryStatic)
