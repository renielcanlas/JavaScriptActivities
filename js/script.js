var items = [];
var sort = "az";

function addItem() {
    var item = $("#item").val();
    if(item.length>0 && (!items.includes(item))) {
        items.push(item);
        $("#item").val("");
        $("#list").append("<option>" + item + "</option>");
        $("#btnLongest").removeAttr("disabled");
        $("#btnShortest").removeAttr("disabled");
        $("#btnSort").removeAttr("disabled");
        $("#btnRemove").removeAttr("disabled");
        $("#btnClear").removeAttr("disabled");
    }
}

function shortest() {
    var shortest = '';
    for(i=0; i<items.length; i++) {
        if(items[i].length < shortest.length || shortest=='') {
            shortest = items[i];
        }
    }
    if(shortest.length > 0) {
        alert(shortest);
    }
}

function longest() {
    var longest = '';
    for(i=0; i<items.length; i++) {
        if(items[i].length >= shortest.length) {
            longest = items[i];
        }
    }
    if(longest.length > 0) {
        alert(longest);
    }
}

function sortList() {
    if(sort=='az'){
        items.sort();
        sort = 'za';
        $("#btnSort").text("Sort [z-a]");
    } else {
        items.reverse();
        sort = 'az';
        $("#btnSort").text("Sort [a-z]");
    }
    
    populate();
}

function populate() {
    $("#list").html("");
    items.forEach(function(item) {
        $("#list").append("<option>" + item + "</option>");
    });
}

function remove() {
    var remove = $("#list").val();
    for(i=0; i<remove.length; i++) {
        var item = remove[i];
        items = items.filter(function(element) {
            return element != item;
        });
    }

    populate();
}

function clearList() {
    items = [];
    $("#list").html("");
    $("#btnLongest").attr("disabled", true);
    $("#btnShortest").attr("disabled", true);
    $("#btnSort").attr("disabled", true);
    $("#btnRemove").attr("disabled", true);
    $("#btnClear").attr("disabled", true);
}