$(document).ready(function () {
    var submitButton = $('.submit-button');
    var listBeforeEating = $('#list-before');
    var burgerCounter = 0;
    var listAfterEating = $('#list-after');
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "#create-burger", createBurger);
    $(document).on("click", ".devour-button", devourBurger);
    getBurgers();
    /////////
    //function that displays our database content onto the browser
    function getBurgers() {
        $.get("/api/burgers", function (data) {
            data.forEach(burger => {
                burgerCounter += 1
                var burgerUploaded = $('<li>').html(burger.burger_name);
                var devourButton = $('<button>').html('eat burger');
                devourButton.addClass("devour-button");
                devourButton.addClass("btn btn-danger");
                burgerUploaded.attr('eaten', burger.eaten);
                burgerUploaded.attr('data-id', burger.id);
                if (burgerUploaded.attr('eaten') === 'false') {
                    burgerUploaded.append(devourButton);
                    listBeforeEating.append(burgerUploaded);
                } else {
                    listAfterEating.append(burgerUploaded);
                }
            });
        });
    }
    
    //functions for event listeners
    function createBurger() {
        event.preventDefault();
        burgerCounter += 1;
        var burgerInput = $('#burger-name').val().trim();
        var newBurger = $('<li>').html(burgerInput);
        var devourButton = $('<button>').html('eat burger');
        devourButton.addClass("devour-button");
        devourButton.addClass("btn btn-danger")
        newBurger.attr('data-id', burgerCounter);
        newBurger.attr('eaten', false);
        newBurger.append(devourButton);
        listBeforeEating.append(newBurger);
        //create object
        //post to api
        var burger = {
            burger_name: burgerInput,
            eaten: newBurger.attr('eaten')
        };
        $.post("/api/burgers", burger);
        
    }
    function devourBurger() {
        event.preventDefault();
        var closestListElt = $(this).closest("li");
        //when appending a unique elt we don't have to delete it after (i.e. appending moves it, doesn't clone it)
        closestListElt.attr('eaten', true);
        listAfterEating.append(closestListElt);
        $(this).remove();

        // put request to update eaten status
        var burgerUpdated = {
            id: closestListElt.attr('data-id'),
            burger_name: closestListElt.html(),
            eaten: true
        }
        console.log(burgerUpdated);
        $.ajax(
            {
                method: 'PUT',
                url: '/api/burgers',
                data: burgerUpdated
            }
        );
    }
});




