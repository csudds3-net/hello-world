/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// <script type="text/javascript" src="jquery-1.6.4.js"></script>
// document.write('<p>Hello World!</p>');

$(document).ready(function(){
    $('td').mouseover(function(){
//        $(this).removeClass('test');
        $(this).addClass('highlight');
    });
    $('#text-menu li').mouseover(function(){
       $(this).addClass('menu-highlight');
    });
    $('#text-menu li').mouseout(function(){
        $(this).removeClass('menu-highlight');
    });
});





