export const handler = async (event) => {
    const deck = [];
    const suits = ['diamonds', 'spades', 'hearts', 'clubs'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    suits.forEach((suit) => {
        values.forEach((value) => {
            deck.push(
                {
                    value: value, 
                    suit: suit,
                    card: `${value} of ${suit}`
                }
            );
    });
});

// TODO implement
const response = {
    statusCode: 200,
    body: JSON.stringify(deck),
};
return response;
  };
