$(document).ready(function() {
    var $mainmenuItems = $("#main_menu ul").children("li"),
        totalmainmenuItems = $mainmenuItems.length,
        openedIndex = 2,
        init = function(){
            bindEvents();
            if(validIndex(openedIndex)){
                animateItem(animateItem($mainmenuItems.eq(openedIndex),true,700),true,250);
            }
        },
        bindEvents = function(){
            $mainmenuItems.children(".images").click(function(){
                var newIndex = $(this).parent().index(),
                $item = $mainmenuItems.eq(newIndex);
                if(openedIndex === newIndex){
                    animateItem($item,false,250);
                    openedIndex = -1;
                }else{
                    if(validIndex(newIndex)){
                        animateItem($mainmenuItems.eq(openedIndex),false,250);
                        openedIndex = newIndex;
                        animateItem($item,true,250);
                    }
                }
            });
            $(".button").hover(
                function(){
                    $(this).addClass("hovered");
                },
                function(){
                    $(this).removeClass("hovered");
                }
            );
            $(".button").click(function() {
                var newIndex = $(this).index();
                $item = $mainmenuItems.eq(newIndex);
                if(openedIndex === newIndex){
                    animateItem($item,false,250);
                    openedIndex = -1;
                }else{
                    if(validIndex(newIndex)){
                        animateItem($mainmenuItems.eq(openedIndex),false,250);
                        openedIndex = newIndex;
                        animateItem($item,true,250);
                    }
                }
            });
        },
        validIndex = function (indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalmainmenuItems);
        },
        animateItem = function($item,toOpen,speed){
            var $colorImage = $item.find(".color"),
            itemParam = toOpen?{width:"420px"}:{width:"140px"},
            colorImageParam = toOpen?{left:"0px"}:{left:"140px"};
            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);
        };
        init();
});