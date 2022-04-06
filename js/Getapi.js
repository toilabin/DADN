$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds",function(data){
    // document.write(data[(6)].description);
    document.getElementById("tgian").innerHTML = data[(1)].last_value_at;
    document.getElementById("nhietdo").innerHTML = data[(1)].last_value;
    document.getElementById("nongdogas").innerHTML = data[(6)].last_value;
    console.log(data);
})