var firstparallaxslider=new parallaxSlider({
wrapperid: 'myparallaxslider', //ID of DIV on page to house slider
displaymode: {type:'auto', pause:2000, cycles:0, stoponclick:true, pauseonmouseover:true},
delaybtwdesc: 500, // delay in milliseconds between the revealing of each description layer inside a slide
navbuttons: ['icon/left.png', 'icon/right.png'], // path to nav images
activeslideclass: 'selectedslide', // CSS class that gets added to currently shown DIV slide
orientation: 'h', //Valid values: "h" or "v"
persist: true, //remember last viewed slide and recall within same session?
slideduration: 1000 //transition duration (milliseconds)
});
