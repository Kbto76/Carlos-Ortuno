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

            console.log(difficulty);

            for (let i = 0; i < difficulty; i++) {
                data.cards.push({
                    "isDiscovered": false,
                    "icon": getIcons(),
                    "id": (i + 1)

                });

                data.cards.push({
                    "isDiscovered": false,
                    "icon": getIcons(),
                    "id": (i + 1)

                });

            }
        }
    }

    response.send(JSON.stringify(data));
})

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


function getIcon() {
    return food[randomInteger(0, (food.length - 1))];
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
