const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠', '🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳', '🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '☕', '🍵', '🥣', '🍼', '🥤', '🥛🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', '🥢', '🥡'];

app.get('/cards/:difficulty/:theme', (request, response) => {

    var data = { cards: [] };

    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.type !== null) {
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty);
            cards.forEach(card => {
                data.cards.push(card);
            });
            cards.forEach(card => {
                data.cards.push(card);
            });

            shuffleArray(data.cards);
        }
    }

    response.send(JSON.stringify(data));
});

app.get('/scores', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('Lista de scores');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getIconIdenx(iconIndex) {
    let newIconIndex = randomInteger(0, (food.length - 1));
    if (iconIndex === newIconIndex) {
        return getIconIdenx(iconIndex);
    }
    return newIconIndex;
};

function getCards(difficulty) {
    var cards = [];
    for (let i = 0; i < difficulty; i++) {
        var iconIndex = getIconIdenx(-1);
        var card = {
            "isDiscovered": false,
            "icon": food[iconIndex],
            "id": iconIndex
        }
        cards.push(card);
    }
    console.log(cards);
    return cards;
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// var cards = `{
//     "cards": [
//         {
//             "isDiscovered": false,
//             "icon": "🥜",
//             "id": 49
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍏",
//             "id": 0
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥝",
//             "id": 16
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥝",
//             "id": 16
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥭",
//             "id": 13
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥭",
//             "id": 13
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍉",
//             "id": 6
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥒",
//             "id": 22
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍹",
//             "id": 56
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥜",
//             "id": 49
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍹",
//             "id": 56
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍏",
//             "id": 0
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥎",
//             "id": 53
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🍉",
//             "id": 6
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥎",
//             "id": 53
//         },
//         {
//             "isDiscovered": false,
//             "icon": "🥒",
//             "id": 22
//         }
//     ]
// }`;
