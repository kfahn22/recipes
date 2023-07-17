import React from "react";
import Layout from "../components/Layout";

const mongrel = () => {
  return (
    <Layout>
      <main>
        <h2 class="exerpt">Rules of Mongrel</h2>
        <p class="exerpt">
          Mongrel is a mashup of poker, where the players make increasingly
          higher, riskier bids in order to potentially gain higher rewards, and
          bridge, where the players aim to gain an advantage by naming the trump
          suit. Mongrel is a trick-taking game, (such as bridge, hearts, spades,
          or euchre) where players must play a card of the same suit that is
          lead, if possible. The game can be played with any number of players
          from two to about seven, with four to six being optimal. The dealer
          doles out five cards to each player to start the game. The deal
          rotates clockwise after each hand. The player to the dealer’s left has
          the right to bid first. If a player bids, they declare how many tricks
          they are going to take and name a trump suit. If a player bids, they
          may, before announcing their bid, replace any number of cards in their
          hand by drawing from the remains of the deck. The cards that are
          replaced are shuffled (face down) into the remains. Bidding proceeds
          around the table in a clockwise direction. Each subsequent player may
          raise the bid and replace cards to improve their hand. A player must
          raise the bid in order to draw cards. Raising the bid entails either
          increasing the number of tricks (raising the bid from two tricks to
          three for example), or changing to a higher-ranking suit at the same
          level. The rank of suits from lowest to highest is: clubs, diamonds,
          hearts, spades (alphabetical order). So, a bid of three diamonds is
          higher than a bid of three clubs, for example. Or a bid of two spades
          is higher than two hearts. To change from a lower-ranked suit to a
          higher one, the number of tricks to be taken must be raised. For
          example, to bid higher than two spades, a player would have to raise
          the bid to three in any suit. If a player does not want to raise the
          bid (or make the opening bid) they may pass. No cards in the player’s
          hand can be replaced if they pass. Rather than passing, a player with
          a weak hand may call “Twos High” on their turn to bid. As the bid
          implies, it reverses the order of the cards: the two is the highest
          card in each suit and the Ace is lowest. A call of Twos High does not
          entitle that player to draw replacement cards. A Twos High call is
          negated when a subsequent player raises the bid. A player may only
          call Twos High once for each hand, i.e. they cannot repeatedly call
          Twos High every time the bid comes around to them. Each player may
          call Twos High once during each hand, so there may be multiple Twos
          High calls if the bid keeps being raised. Bidding stops when all
          players after the current high bidder pass. The bidder is then
          committed to take the number of tricks in his or her winning bid,
          using the named suit as the trump suit. Failure to make the bid
          results in a negative score for the bidder, as explained in the
          scoring section below. Play begins with the player to the left of the
          high bidder. Play goes clockwise around the table to each player in
          turn, who must follow suit if possible. If a player cannot follow
          suit, they may play a trump card (if they have one) or discard a card
          from another suit. The trick is won by the highest trump card played,
          or the highest card in the suit led if no trump card is played. If a
          Twos High call is in effect, the lowest trump card or the lowest card
          in the led suit wins the trick. After all five tricks have been
          played, each player’s score is calculated as follows: Zero tricks: 1
          point (like a participation trophy) One trick: 2 points Two tricks: 4
          points Three tricks: 8 points Four tricks: 16 points Five tricks: 32
          points If the winning bidder fails to make their contracted bid, they
          get a negative score equal to whatever they would have earned if the
          bid was successful. If a Twos High call is in effect for the hand, the
          positive scores above are doubled, however the penalty score for
          failing to make a contracted bid is not doubled. The game is played
          until one player reaches a target score that is agreed to in advance.
          Multiples of two as 64, 72, 128, etc. are good target values for
          ending the game. One option to make the game more challenging is to
          specify that the winning score must be hit exactly, and if you go over
          you are set back to some pre-specified score.
        </p>
      </main>
    </Layout>
  );
};

export default mongrel;
