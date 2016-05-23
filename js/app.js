function Face() {
    this.image = document.createElement("img");
    this.image.id = "tam";
    this.image.src = "images/face.png";
    this.image.style.position = "absolute";
    this.image.class = "small";
}



function App() {
    
};

App.prototype = {
        
    run: function() {
        this.drawFaces();
    },
    
    drawFaces: function() {
        var that = this;
        setInterval(function(){ 
            that.insertOutsideFaces(); 
        }, 75);
        
        for(var i = 0; i < 50; i++) {
            this.insertInitialFaces();   
        }
    },
    
    insertOutsideFaces: function() {
        var face = new Face();
                
        face.image.style.top = Math.round((Math.random() * (0 - window.innerHeight)) - 300) + 'px';
        face.image.style.left = Math.round((Math.random() * (0 - window.innerWidth * 1.5)) + 1000) + 'px';

        document.body.appendChild(face.image); 
        $(face.image).animate({
            left: '+=' + window.innerWidth * 1.5 + 'px',
            top: '+=' + window.innerWidth * 1.5 + 'px',
        }, 20000, "linear", function() {
            face.image.remove();
        });
    },
    
    insertInitialFaces: function() {
        
        var face = new Face();
        
        face.image.style.top = Math.round((Math.random() * window.innerHeight) - 450) + 'px';
        face.image.style.left = Math.round((Math.random() * window.innerWidth) - 450) + 'px';

        document.body.appendChild(face.image); 
        $(face.image).animate({
            left: '+=' + window.innerWidth * 1.5 + 'px',
            top: '+=' + window.innerWidth * 1.5 + 'px',
        }, 20000, "linear", function() {
            face.image.remove();
        });
    }
};

// need to destroy faces an dshit

var app = new App();

app.run();

var audio = new Audio('sounds/laugh2.mp3');
var audio2 = new Audio('sounds/laugh2.mp3');
audio.loop = true;
audio.play();

setInterval(function(){ 
    audio.loop = true;
    audio2.play();
}, 1000);

$(document).on("mouseenter", "#tam", function() {
    $(this).attr("src", "images/laughingface1.png");
});
