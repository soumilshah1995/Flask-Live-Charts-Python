
/*
    Java Scripts
*/
var chart;
class Image{

    constructor(imgUrl, size)
    {
        this.imgUrl=imgUrl;
        this.size=size;
    }

    backgroundImage()
    {

        // Select the Image
        var img = document.querySelector(".jumbotron");

        // create Css Text
        var text = "margin:auto;"+
            "background-image: url("+this.imgUrl+");" +
            "background-size:cover;"+
            "opacity:1;"+
            "background-blend-mode: darken;"+
            "height: "+ this.size + "vh;";

        img.style.cssText =  text;
    }

    centerTitle()
    {
        /*
            Center the Title
         */
        var t1 = document.querySelector("#title");
        t1.classList.add("text-white");
        t1.classList.add("text-center");
        t1.classList.add("display-3");
    }
}

class Charts{

    constructor(width, height, XData, YData)
    {
        this.width = width;
        this.height = height;
        this.XData = XData;
        this.YData=YData;

    }

    CreateGraph()
    {
        var data =
            {
            labels: this.XData,
            series: [this.YData]
            };

        var options = {
            width:this.width,
            height:this.height,
            axisX:{
                showGrid:true,
                showLabel:true
            },
            axisY:{
                offset: 60
            }
        };

        new Chartist.Line('.ct-chart', data, options);

    }
}


$(window).bind("load", function() {

    // your javascript event here
    const imgUrl = 'https://media3.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif'
    const size = "50";
    var obj = new Image(imgUrl, size);
    obj.backgroundImage();
    obj.centerTitle();

    // Charts
    var XData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    // Ajax call to get the Data from Flask
    var requests = $.get('/Sensor/data');

    var tm = requests.done(function (result) {

        console.log("TEMPERATURE", result.temperature);
        var chart  = new Charts(200,200, XData, result.temperature);
        chart.CreateGraph();

    })

}); // ready function closed

