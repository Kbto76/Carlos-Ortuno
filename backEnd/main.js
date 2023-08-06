const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠', '🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳', '🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '☕', '🍵', '🥣', '🍼', '🥤', '🥛🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', '🥢', '🥡'];

const faces = ['😀', '😬', '😁', '😂', '😃', '😄', '🤣', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '☹', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤', '😓', '😭', '🤩', '😵', '😲', '🤯', '🤐', '😷', '🤕', '🤒', '🤮', '🤢', '🤧', '😴', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠', '👽', '🤖', '🎃'];

const flags = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🦍', '🐔', '🐧', '🐦', '🐥', '🐺', '🦊', '🐗', '🐴', '🦓', '🦌', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '', '🦂', '🐢', '🐍', '🦎', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🐳', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🐪', '🐘', '🦏', '🐐', '🐏', '🐑', '🐎', '🐖', '🦇', '🐓', '🦃', '🦅', '🦆', '🦉', '🐕', '🐩', '🐈', '🐇', '🐀'];

app.get('/cards/:difficulty/:theme', (request, response) => {

    var data = { cards: [] };

    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.type !== null) {
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty, theme);
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


function getIconIdenx(iconIndex, iconList) {
    let newIconIndex = randomInteger(0, (iconList.length - 1));
    if (iconIndex === newIconIndex) {
        return getIconIdenx(iconIndex);
    }
    return newIconIndex;
};

function getCards(difficulty, theme) {
    var cards = [];

    var iconList = null;

    switch (theme) {
        case 'food':
            iconList = food;
            break;
        case 'flags':
            iconList = flags;
            break;
        case 'faces':
            iconList = faces;
            break;
        default:
            break;
    }

    for (let i = 0; i < difficulty; i++) {
        var iconIndex = getIconIdenx(-1);
        var card = {
            "isDiscovered": false,
            "icon": iconList[iconIndex],
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

