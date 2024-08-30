const deck = [
	{
		"value": "A",
		"suit": "diamonds",
		"card": "A of diamonds"
	},
	{
		"value": "2",
		"suit": "diamonds",
		"card": "2 of diamonds"
	},
	{
		"value": "3",
		"suit": "diamonds",
		"card": "3 of diamonds"
	},
	{
		"value": "4",
		"suit": "diamonds",
		"card": "4 of diamonds"
	},
	{
		"value": "5",
		"suit": "diamonds",
		"card": "5 of diamonds"
	},
	{
		"value": "6",
		"suit": "diamonds",
		"card": "6 of diamonds"
	},
	{
		"value": "7",
		"suit": "diamonds",
		"card": "7 of diamonds"
	},
	{
		"value": "8",
		"suit": "diamonds",
		"card": "8 of diamonds"
	},
	{
		"value": "9",
		"suit": "diamonds",
		"card": "9 of diamonds"
	},
	{
		"value": "10",
		"suit": "diamonds",
		"card": "10 of diamonds"
	},
	{
		"value": "J",
		"suit": "diamonds",
		"card": "J of diamonds"
	},
	{
		"value": "Q",
		"suit": "diamonds",
		"card": "Q of diamonds"
	},
	{
		"value": "K",
		"suit": "diamonds",
		"card": "K of diamonds"
	},
	{
		"value": "A",
		"suit": "spades",
		"card": "A of spades"
	},
	{
		"value": "2",
		"suit": "spades",
		"card": "2 of spades"
	},
	{
		"value": "3",
		"suit": "spades",
		"card": "3 of spades"
	},
	{
		"value": "4",
		"suit": "spades",
		"card": "4 of spades"
	},
	{
		"value": "5",
		"suit": "spades",
		"card": "5 of spades"
	},
	{
		"value": "6",
		"suit": "spades",
		"card": "6 of spades"
	},
	{
		"value": "7",
		"suit": "spades",
		"card": "7 of spades"
	},
	{
		"value": "8",
		"suit": "spades",
		"card": "8 of spades"
	},
	{
		"value": "9",
		"suit": "spades",
		"card": "9 of spades"
	},
	{
		"value": "10",
		"suit": "spades",
		"card": "10 of spades"
	},
	{
		"value": "J",
		"suit": "spades",
		"card": "J of spades"
	},
	{
		"value": "Q",
		"suit": "spades",
		"card": "Q of spades"
	},
	{
		"value": "K",
		"suit": "spades",
		"card": "K of spades"
	},
	{
		"value": "A",
		"suit": "hearts",
		"card": "A of hearts"
	},
	{
		"value": "2",
		"suit": "hearts",
		"card": "2 of hearts"
	},
	{
		"value": "3",
		"suit": "hearts",
		"card": "3 of hearts"
	},
	{
		"value": "4",
		"suit": "hearts",
		"card": "4 of hearts"
	},
	{
		"value": "5",
		"suit": "hearts",
		"card": "5 of hearts"
	},
	{
		"value": "6",
		"suit": "hearts",
		"card": "6 of hearts"
	},
	{
		"value": "7",
		"suit": "hearts",
		"card": "7 of hearts"
	},
	{
		"value": "8",
		"suit": "hearts",
		"card": "8 of hearts"
	},
	{
		"value": "9",
		"suit": "hearts",
		"card": "9 of hearts"
	},
	{
		"value": "10",
		"suit": "hearts",
		"card": "10 of hearts"
	},
	{
		"value": "J",
		"suit": "hearts",
		"card": "J of hearts"
	},
	{
		"value": "Q",
		"suit": "hearts",
		"card": "Q of hearts"
	},
	{
		"value": "K",
		"suit": "hearts",
		"card": "K of hearts"
	},
	{
		"value": "A",
		"suit": "clubs",
		"card": "A of clubs"
	},
	{
		"value": "2",
		"suit": "clubs",
		"card": "2 of clubs"
	},
	{
		"value": "3",
		"suit": "clubs",
		"card": "3 of clubs"
	},
	{
		"value": "4",
		"suit": "clubs",
		"card": "4 of clubs"
	},
	{
		"value": "5",
		"suit": "clubs",
		"card": "5 of clubs"
	},
	{
		"value": "6",
		"suit": "clubs",
		"card": "6 of clubs"
	},
	{
		"value": "7",
		"suit": "clubs",
		"card": "7 of clubs"
	},
	{
		"value": "8",
		"suit": "clubs",
		"card": "8 of clubs"
	},
	{
		"value": "9",
		"suit": "clubs",
		"card": "9 of clubs"
	},
	{
		"value": "10",
		"suit": "clubs",
		"card": "10 of clubs"
	},
	{
		"value": "J",
		"suit": "clubs",
		"card": "J of clubs"
	},
	{
		"value": "Q",
		"suit": "clubs",
		"card": "Q of clubs"
	},
	{
		"value": "K",
		"suit": "clubs",
		"card": "K of clubs"
	}
]

export const handler = async (event) => {

    const value = event.pathParameters.value
    const card = deck.filter((c) => c.value === value)

// TODO implement
const response = {
    statusCode: 200,
    body: JSON.stringify(card),
};
return response;
  };