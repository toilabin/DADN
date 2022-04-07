$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds/bbc-temp/data?X-AIO-Key=aio_iPXE967AnIwtpOBRdiNC6qWguHFp",function(data){
    var table = document.getElementById('incidentTableTemp');

    var dataLength = data.length;

    for (var i = 0; i < dataLength; i++) {
        if (data[i].value > 60) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.innerHTML = data[i].created_at;
            var cell2 = row.insertCell();
            cell2.innerHTML = data[i].value;
            var cell3 = row.insertCell();
            cell3.innerHTML = data[i].id;
        }
    }
    console.log(data)
})