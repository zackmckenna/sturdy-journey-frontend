import React from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
// import Draggable from 'react-draggable' // Both at the same time
import ReactSwipe from 'react-swipe'
import RoleCard from './cards/RoleCard'
import TopDeckCard from './cards/TopDeckCard'
import UserCard from './cards/UserCard'
import RuleCard from './cards/RuleCard'
import TestingRoleCard from './cards/TestingRoleCard'

const NonDraggableCard = (props) => {

  let reactSwipeEl
  console.log(props.deck)

  if (props.session.currentPlayerRoles)  {

    // gets temporary local data for testing games
    const deckLength = props.deck.cards.length
    return (
      <Container>
        <ReactSwipe
          className="carousel"
          disableScroll={true}
          stopPropagation={true}
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
          childCount={props.deck.cards.length}
        >
          <div>
            <UserCard style={{ maxHeight: '556px' }} key={props.deck.userRoleCard.id} card={props.deck.userRoleCard} onClickPrev = {() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
          </div>
          {props.deck.cards.map(card => {
            if (card.userRoleCard) {
              return (
                <div>
                  <UserCard key={card.id} card={card} onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
                </div>
              )
            }
          })}
          <RuleCard onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
        </ReactSwipe>
      </Container>
    )
  } else {
    return (
      <ReactSwipe
        className="carousel"
        disableScroll={true}
        stopPropagation={true}
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
        childCount={props.airtable.roleCards.length}
      >
        <div>
          <TestingRoleCard />
        </div>
        <div>
          <TopDeckCard onClickNext={() => reactSwipeEl.next()}/>
        </div>
        <div>
          <RuleCard onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
        </div>
        {props.airtable.roleCards.map(role => {
          return (
            <div key={role.id}>
              <RoleCard card={role} onClickPrev={() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
            </div>
          )
        })}
      </ReactSwipe>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles,
    deck: state.deck,
    airtable: state.airtable
  }
}

export default connect(mapStateToProps)(NonDraggableCard)
