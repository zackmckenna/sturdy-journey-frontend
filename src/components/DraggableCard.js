import React from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import Draggable from 'react-draggable' // Both at the same time
import ReactSwipe from 'react-swipe'
import RoleCard from './cards/RoleCard'
import TopDeckCard from './cards/TopDeckCard'
import UserCard from './cards/UserCard'

const DraggableCard = (props) => {

  let reactSwipeEl
  console.log(props.deck)

  if (props.session.currentPlayerRoles)  {

    // gets temporary local data for testing games
    const deckLength = props.deck.cards.length
    return (
      <Draggable
        axis='y'
        bounds={{ top:0 }}
      >
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
              <TopDeckCard onClickNext={() => reactSwipeEl.next()}/>
            </div>
            <div>
              <UserCard key={props.deck.userRoleCard.id} card={props.deck.userRoleCard} onClickPrev = {() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
            </div>
            {props.deck.cards.map((card, index) => {
              if (card.userRoleCard) {
                return (
                  <div>
                    <UserCard key={card.id} card={card} onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              } else if (deckLength === index + 1){
                return (
                  <div key={card.id}>
                    <RoleCard card={card} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              }
              else {
                return (
                  <div key={card.id}>
                    <RoleCard card={card} onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              }
            })}
          </ReactSwipe>
        </Container>
      </Draggable>
    )
  } else {
    return (
      <Draggable
        axis='y'
        bounds={{ top:0, bottom: 275 }}
      >
        <Container >
          <ReactSwipe
            className="carousel"
            disableScroll={true}
            stopPropagation={true}
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
            childCount={props.airtable.roleCards.length}
          >
            <div>
              <TopDeckCard onClickNext={() => reactSwipeEl.next()}/>
            </div>
            {props.airtable.roleCards.map(role => {
              return (
                <div key={role.id}>
                  <RoleCard card={role} onClickPrev={() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
                </div>
              )
            })}
          </ReactSwipe>
        </Container>
      </Draggable>
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

export default connect(mapStateToProps)(DraggableCard)
