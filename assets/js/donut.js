/************************
** name:  Donutjs
** owner: Min Mon
** version: donut-1.1.1
*************************/

var DonutJs = function(){
  this.BaseManager = {
    elements: [],
    getElement: function(el) {
      let element = document.getElementsByClassName(el);
      return element;
    },
    pushRegElements: function() {
      let arguments = Donut.BaseManager.pushRegElements.arguments;
      let elements  = Donut.BaseManager.elements;
      let length    = arguments.length;

      if(length >= 0) {
        for(let i = 0; i < length; i++) {
          elements.push(arguments[i]);
        }
      }
    },
    getRegElements: function() {
      let arguments = Donut.BaseManager.getRegElements.arguments;
      let elements  = Donut.BaseManager.elements;
      let el_length = elements.length;
      let ar_length = arguments.length;
      let selected  = [];

      for(let i = 0; i < el_length; i++) {
        for (let j = 0; j < ar_length; j++) {
          if(arguments[j] == elements[i]) {
            selected.push(elements[i]);
          }
        }
      }
      return selected;
    },
    popRegElements: function() {
      Donut.BaseManager.elements = [];
    },
  };
  this.GeoRenderer = {
    Sphere: function(el) {
      let Sphere3D = function(el) {
        let canvas= el;

        for(let i = 0; i <= 180; i++) {
          let x = document.createElement('div');
          let y = document.createElement('div');
          x.classList.add('circle');
          y.classList.add('circle');
          x.style.transform = 'rotateX(-90deg)'+'rotateX('+i+'deg)';
          y.style.transform = 'rotateY(-90deg)'+'rotateX('+i+'deg)';
          canvas[0].appendChild(x);
          canvas[0].appendChild(y);
          i += 25;
        }
      };

      Sphere3D(el);
    },
  };
  this.AppsManager = {

  };
};

var Donut = new DonutJs();
