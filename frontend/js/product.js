$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $("#name").text(data.graphql.hashtag.name);
        $("#numberpost").text(data.graphql.hashtag.slug);
        $("#count").text(" = " + data.graphql.hashtag.edge_hashtag_to_media.count);
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
$post("demo_ajax_gethint.aso",){products: txt},function(result){
    $("span").html(result);
        // ===============================

    });
})