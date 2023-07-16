export const createDiv = function (attributesList, parent) {
    return createElement('div', attributesList, parent);
}

export const createP = function (attributesList, parent) {
    return createElement('p', attributesList, parent);
}

const createElement = function (type, attributeList, parent) {
    var element = document.createElement(type);
    parent.appendChild(element);

    for (const attributePosition in attributeList) {
        element[attributePosition] = attributeList[attributePosition]
    }
    return element
}
