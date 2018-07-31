//pressing submit button

var submitButton = $('.submit-button');
var listBeforeEating = $('#list-before');
var burger_counter = 0;
submitButton.on("click", function(e) {
    event.preventDefault();
    burger_counter += 1;
    var burgerInput = $('#burger-name').val().trim();
    var newBurger = $('<li>').html(burgerInput);
    var devourButton = $('<button>').html('eat burger');
    devourButton.addClass("devour-button");
    newBurger.attr('data-id', burger_counter);
    newBurger.attr('eaten', false);
    newBurger.append(devourButton);
    listBeforeEating.append(newBurger);
    var anyDevourButton = $('.devour-button');
    anyDevourButton.on("click", function(e){
    event.preventDefault();
    console.log('got pressed');
    });
});

