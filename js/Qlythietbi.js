function switchbtn (checked, name) {
    // alert(checked);
    // console.log(checked);
    var str="0";
    if (name == 'led' && checked){str="1";}
    else if (name == 'pump' && !checked){str="4";}
    else if (name == 'pump' && checked){str="3";}
    else if (name == 'fan' && !checked){str="8";}
    else if (name == 'fan' && checked){str="7";}
    else if (name == 'buzzer' && !checked){str="6";}
    else if (name == 'buzzer' && checked){str="5";}
    $.ajax({
        url:'https://io.adafruit.com/api/v2/toilabin/feeds/bbc-'+ name +'/data',
        dataType:'json',
        type:'post',
        headers:{
            'Content-Type':'application/json',
            'Host':'io.adafruit.com',
            'Content-Type':'application/json',
            'X-AIO-Key':'aio_kNjE82LbtMpdxOd6eicNWnjuQI9s'
        },
        data:JSON.stringify({"value":str}),
        processData:false,
        })
    
}