$.ajax({
    url: '/echo/json/',
    type: "post",
    dataType: "json",
    data: {
        json: JSON.stringify([
        {id: 1, elementName: "Germanium", atomicNumber: 13},
        {id: 2, elementName: "Uranium", atomicNumber: 92}]),
        delay: 3
    },
    success: function(data, textStatus, jqXHR){
        drawTable(data);
    }
});

function drawTable(data){
    for(var i = 0; i < data.length; i++)
        drawRow(data[i]);
}

function drawRow(rowData){
    var row = $("<tr />")
    $("#testTable").append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.elementName + "</td>"));
    row.append($("<td>" + rowData.atomicNumber + "</td>"));
}

function init(){
	drawTable(data);
}