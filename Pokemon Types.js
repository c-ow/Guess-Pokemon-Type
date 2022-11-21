function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var generatedPoke = []
function generate() {
    document.getElementById('pokemon').innerHTML = '';
    randNum = Math.random() * 1000;
    randNum = randNum % 898;
    randNum = Math.round(randNum) + 1;
    if (generatedPoke.includes(randNum) == false) {
        generatedPoke.push(randNum)
        getPoke(randNum);
    }
    else if (generatedPoke.includes(randNum) == true) {
        generate()
    }
}
function getPoke(data) {
    var URL = `https://pokeapi.co/api/v2/pokemon/${data.toString()}`
    fetch(URL).then(pokeData => pokeData.json()).then(pokeInfo => {
        var name = pokeInfo['name'];
        var type = pokeInfo['types'][0]['type']['name'];
        element = `<li id='currPoke' class='${type}'> <a>#${data}</a><br><a>${capFirst(name)}</a> <br> <img class='sprite' src=${pokeInfo['sprites']['front_default']}></img> </button><br><button id='minus ${data}' onclick='move(this)' class='fa-solid fa-minus btn hide'></button></li>`; 
        document.getElementById('pokemon').innerHTML += element;
    })
}
function move(button) {
    document.getElementById('gen').disabled = false;
    document.getElementById('pokemon').innerHTML = '';
    var parent = button.parentNode;
    $(parent).removeClass('wrong-type');
    $('#currPoke .btn').removeClass('show');
    $('#currPoke .btn').addClass('hide');
    $(parent).prependTo('#pokemon');
}
function removeButton() {
    var button = document.querySelector('#currPoke .btn')
    button.parentNode.removeChild(button);
    document.querySelector('#currPoke').removeAttribute('id')
}
function checkType(type, move) {
    $('#currPoke').removeClass('wrong-type')
    if ($('#currPoke').length && $('#currPoke').attr('class') != type) {
        document.getElementById('gen').disabled = true;
        $('#currPoke').addClass('wrong-type');
        $('#currPoke .btn').removeClass('hide');
        $('#currPoke .btn').addClass('show');
        $('#currPoke').prependTo(move);
    }
    else if ($('#currPoke').attr('class') == type) {
        document.getElementById('gen').disabled = false;
        $('#currPoke').prependTo(move);
        $('#currPoke').addClass('right-type');
        removeButton()
    }
}
function normalType() {
    checkType('normal', '#normal')
}
function fireType() {
    checkType('fire', '#fire')
}
function waterType() {
    checkType('water', '#water')
}
function grassType() {
    checkType('grass', '#grass')
}
function electricType() {
    checkType('electric', '#electric')
}
function iceType() {
    checkType('ice', '#ice')
}
function fightingType() {
    checkType('fighting', '#fighting')
}
function poisonType() {
    checkType('poison', '#poison')
}
function groundType() {
    checkType('ground', '#ground')
}
function flyingType() {
    checkType('flying', '#flying')
}
function psychicType() {
    checkType('psychic', '#psychic')
}
function bugType() {
    checkType('bug', '#bug')
}
function rockType() {
    checkType('rock', '#rock')
}
function steelType() {
    checkType('steel', '#steel')
}
function ghostType() {
    checkType('ghost', '#ghost')
}
function darkType() {
    checkType('dark', '#dark')
}
function dragonType() {
    checkType('dragon', '#dragon')
}
function fairyType() {
    checkType('fairy', '#fairy')
}