$(document).ready(function () {

    var submitButton = $('.submit-button');
    var listBeforeEating = $('#list-before');
    var burger_counter = 0;
    var listAfterEating = $('#list-after');
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "#create-burger", createBurger);
    $(document).on("click", ".devour-button", devourBurger);
    

    function createBurger() {
        event.preventDefault();
        burger_counter += 1;
        var burgerInput = $('#burger-name').val().trim();
        var newBurger = $('<li>').html(burgerInput);
        var devourButton = $('<button>').html('eat burger');
        devourButton.addClass("devour-button");
        devourButton.addClass("btn btn-danger")
        newBurger.attr('data-id', burger_counter);
        newBurger.attr('eaten', false);
        newBurger.append(devourButton);
        listBeforeEating.append(newBurger);
    }

    function devourBurger() {
        event.preventDefault();
        var closestListElt = $(this).closest("li");
        //when appending a unique elt we don't have to delete it after (i.e. appending moves it, doesn't clone it)
        closestListElt.attr('eaten', true);
        listAfterEating.append(closestListElt);
        $(this).remove();


    }

});




