$.ajax({
    url: '/echo/json/',
    type: "post",
    dataType: "json",
    data: {
        json: JSON.stringify([
            {
            id: 1,
            elementName: "Germanium",
            atomicNumber: "13"},
        {
            id: 2,
            elementName: "Uranium",
            atomicNumber: "92"}
        ]),
        delay: 3
    },
    success: function(data, textStatus, jqXHR){
        // since we are using jQuery, you don't need to parse response
        drawTable(data);
    }
});

function drawTable(data){
    for(var i = 0; i < data.length; i++)
        drawRow(data[i]);
}

function drawRow(rowData){
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.rockType + "</td>"));
    row.append($("<td>" + rowData.atomicNumber + "</td>"));
}