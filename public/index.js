const API = {
    "characters": "https://rickandmortyapi.com/api/character/",
    "locations": "https://rickandmortyapi.com/api/location/",
    "episodes": "https://rickandmortyapi.com/api/episode/"
};

const charactersPerPage = 6;
let page = 0;

$('#search-button').on('click', () => {
    let queryData = $('#search-bar').val();
    $('#search-bar').val('');

    $.get({
        url: API.characters,
        data: {
            name: queryData,
            page: 0
        },
        success: (res) => {
            $('.result').html('');

            for(let [key, value] of Object.entries(res.results)) {
                let elem = $('<div>');
                elem.addClass('card');
                let img = $('<img>');
                img.attr('src', value.image);
                let name = $('<span>');
                name.text(value.name);
                name.addClass('card-title');
                elem.append(img);
                elem.append(name);
                $('.result').append(elem);
            }
        }
    })
})