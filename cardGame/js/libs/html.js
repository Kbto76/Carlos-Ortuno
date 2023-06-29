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
        //console.log(attributeList[attributePosition]);
    }

    // element.innerHTML = attributes.innerHTML;
    // element.className = attributes.className;

    return element
}










//codigoinicial antes del ciclo for IN
// export const createElement = function (type, attributes, parent) {
//     var element = document.createElement(type);
//     element.innerHTML = attributes.innerHTML;
//     element.className = attributes.className;
//     parent.appendChild(element);
//     return element
// } 