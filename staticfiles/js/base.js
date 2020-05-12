
var ids1=["navbar","message","personal_info","about","skills","contact"];
var ids2=["me_photo","me_info","about_tile_1","about_tile_2","about_tile_3","about_tile_4","about_tile_5","skill_icon1","skill_icon2",
"skill_icon3","skill_icon4","skill_icon5","skill_icon6","skill_icon7","skill_icon8","skill_icon9","skill_icon10","contact"];
var $window=$(window);
$window.on('scroll', every_element);
$window.on('scroll resize', every_element);
$window.trigger('scroll');


function showPage(){
    var i;
    document.getElementById("loader").style.display="none";
    try{
    document.getElementById("overall").style.display="block";
  }
  finally{
    for(i of ids1){
    document.getElementById(i).style.display="block";
  }
  }
}
function timer(){
    var time=setTimeout(showPage,2500);
    //highlight();
    //animate();
}
function every_element(){
  var i;
  for(i of ids2){
    var $animation_elements=$('#'+i)
    check_if_in_view($window,$animation_elements,i);
  }
}
function check_if_in_view($window,$animation_elements,i) {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass(i);
    } else {
      $element.removeClass(i);
    }
  });
}




/*animation on scroll:*/
/*function animate(){
  var i;
  for(i of ids2){
    console.log(i);
    var element = document.getElementById(i);
    var elementHeight = element.clientHeight;
    document.addEventListener('scroll', function(element,elementHeight){
      add_animate(element,elementHeight);
    });// listen for scroll event and call animate function
  }
}
function inView(element,elementHeight) {// check if element is in view
  var windowHeight = window.innerHeight;// get window height
  var scrollY = window.scrollY || window.pageYOffset;// get number of pixels that the document is scrolled
  var scrollPosition = scrollY + windowHeight;// get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;// get element position (distance from the top of the page to the bottom of the element)
  if (scrollPosition > elementPosition) {// is scroll position greater than element position? (is element in view?)
    return true;
  }
  return false;
}

function add_animate(element,elementHeight) {// animate element when it is in view
  if (inView(element,elementHeight)) {// is element in view?
      element.classList.add(element);// element is in view, add class to element
  }
}*/



/*function highlight(){
  var i,x;
  for(i=1;i<ids1.length;i++){
    x=document.getElementById(ids1[i]);
    x.addEventListener('mouseenter',function(){
      class_change(this);
    });
  }
}
function class_change(x){
  var a;
  a=document.getElementsByClassName('active');
  try{
    a.classList.remove('active')
  }
  finally{
  x.classList.add("active");
}
}*/