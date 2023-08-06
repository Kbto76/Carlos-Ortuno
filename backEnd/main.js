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
            data.cards = getCards(difficulty);
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
    if (iconindex === newIconIndex) {
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

getCards(4);

// function getIcons(icons) {
//     var icons = [];
//     var icon = getIcon('');
//     icons.push(icon);
//     return icons;
// }


// function getIcon() {
//     return food[randomInteger(0, (food.length - 1))];
// }

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
