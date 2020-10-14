<!-- Karen Wong -->
<!-- todos.js -->

// Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete the task
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newToDo = $(this).val();

        // create a new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + newToDo + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
