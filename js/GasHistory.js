$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds/bbc-gas/data?X-AIO-Key=aio_FWGy121rk3IJVBpTTdHQ71cIlS8e",function(data){
    var table = document.getElementById('infoTableGas');

    var dataLength = data.length;

    for (var i = 0; i < dataLength; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = data[i].created_at;
        var cell2 = row.insertCell();
        cell2.innerHTML = data[i].value;
    }
});