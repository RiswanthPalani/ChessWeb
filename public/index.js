const params = new URLSearchParams(window.location.search);
const temp = params.get('temp');

 function plus (char,num){
   
   return String.fromCharCode(char.charCodeAt(0) + num);
 }
 function minus(char,num){
  return String.fromCharCode(char.charCodeAt(0) - num);
 }
 
 var wqueenc=0,wrookc=0,wknightc=0,wbishopc=0,wpawnc=0;
 var bqueenc=0,brookc=0,bknightc=0,bbishopc=0,bpawnc=0;
 

 var turn='w';
var play=1;
var checkking=0;

 for(let i='a'; i.charCodeAt(0)<='h'.charCodeAt(0); i=plus(i,1)){
    $('#1 #'+i).addClass('wp');
    $('#2 #'+i).addClass('wp');
    $('#8 #'+i).addClass('bp');
    $('#7 #'+i).addClass('bp');

    $('#2 #'+i).addClass('untouched');
    $('#7 #'+i).addClass('untouched');
 }

 function lookForChecks() {
        //continnue    
 }
 
 if(temp){
$(document).on('click','.row img',function(){      
    
 
   var piece = $(this).attr('class');
   var row = $(this).closest('.row').attr('id');
   var colm = $(this).closest('.colm').attr('id');
 
 
   if(piece==="white pawn" && turn==='w'){
   
     $(".highlighted").removeClass("highlighted");
     $(".red-highlight").removeClass("red-highlight");
     $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
        
        var capture1 ;
        if(colm != 'h')
        capture1 = '#'+ plus(row,1) + ' #'+plus(colm,1);
        var capture2;
          if(colm != 'a')
         capture2 = '#'+ plus(row,1)+' #'+minus(colm,1);
        else capture2 = '#'+plus(row,1);
      
        if($(capture1).hasClass('bp'))
          $(capture1).addClass('red-highlight');
         
        if($(capture2).hasClass('bp'))
        $(capture2).addClass('red-highlight');
       
   
          var curr = '#'+row+' #'+colm;
          
          var target1 = '#'+plus(row,1)+' #'+colm;
          var target2 = '#'+plus(row,2)+' #'+colm;
          
          var check=0;
          if($(target1).hasClass('bp')||$(target1).hasClass('wp'))
          check=1;
        else $(target1).addClass('highlighted');

        if(check==0 && !($(target2).hasClass('bp')||$(target2).hasClass('wp')) && $(curr).hasClass('untouched') )
        $(target2).addClass('highlighted');
      curr.removeClass('untouched');
      
     
     
    
   }
   
    if ((piece === "white knight" && turn==='w')){
      
      $(".highlighted").removeClass("highlighted");
      $(".red-highlight").removeClass("red-highlight");
      $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
    
    var target = [];

    var target=[0,0,0,0,0,0,0,0];
    if(row<'7'&&colm<'h')
    target[0]='#'+plus(row,2)+' #'+plus(colm,1);
  if(row<'7'&&colm>'a')
    target[1]='#'+plus(row,2)+' #'+minus(colm,1);
  if(row<'8'&&colm<'g')
    target[2]='#'+plus(row,1)+' #'+plus(colm,2);
  if(row<'8'&&colm>'b')
    target[3]='#'+plus(row,1)+' #'+minus(colm,2);
  if(row>'2'&&colm<'h')
    target[4]='#'+minus(row,2)+' #'+plus(colm,1);
  if(row>'2'&&colm>'a')
    target[5]='#'+minus(row,2)+' #'+minus(colm,1);
  if(row>'1'&&colm<'g')
    target[6]='#'+minus(row,1)+' #'+plus(colm,2);
  if(row>'1'&&colm>'b')
    target[7]='#'+minus(row,1)+' #'+minus(colm,2);
    
    for (let i=0;i<8 ;i++){
      if(target[i]!=0){
      if($(target[i]).hasClass('bp'))
      $(target[i]).addClass('red-highlight');
      else if( !($(target[i]).hasClass('wp')))
        $(target[i]).addClass('highlighted');}
    
    }
   
   }

   if(piece==="white bishop"&&turn==='w'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
    $(this).addClass("clicked");
   
        var row1 = row;
        var colm1 = colm;

       var target1=0,target2=0,target3=0,target4=0;

       if(row1 != '8' && colm1 != 'h')
       target1='#'+plus(row1,1)+' #'+plus(colm1,1);
      
       while(target1 !=0 && row1!='9' && colm1!='i' && !($(target1).hasClass('wp')))
       {
             if($(target1).hasClass('bp'))
             {$(target1).addClass('red-highlight');
             break;}
             $(target1).addClass('highlighted');
             row1=plus(row1,1);
             colm1=plus(colm1,1);
             target1='#'+row1+' #'+colm1;
       }
       row1=row;
       colm1=colm;  
       if(row1 !='8' && colm1 !='a')
       target2='#'+plus(row1,1)+' #'+minus(colm1,1);

       while(target2 !=0 && row1!='9' && colm1>='a' && !($(target2).hasClass('wp')))
       {
          if($(target2).hasClass('bp'))
          {
            $(target2).addClass('red-highlight');
            break;
          }
          $(target2).addClass('highlighted');
          row1=plus(row1,1);
          colm1=minus(colm1,1);
          target2='#'+row1+' #'+colm1;
       }

       row1=row;
       colm1=colm;  
       if(row1 !='1' && colm1 !='a')
       target3='#'+minus(row1,1)+' #'+minus(colm1,1);

       while(target3 !=0 && row1!='0' && colm1>='a' && !($(target3).hasClass('wp')))
       {
          if($(target3).hasClass('bp'))
          {
            $(target3).addClass('red-highlight');
            break;
          }
          $(target3).addClass('highlighted');
          row1=minus(row1,1);
          colm1=minus(colm1,1);
          target3='#'+row1+' #'+colm1;
       }


       row1=row;
       colm1=colm;  
       if(row1 !='1' && colm1 !='h')
       target4='#'+minus(row1,1)+' #'+plus(colm1,1);

       while(target4 !=0 && row1!='0' && colm1!='i' && !($(target4).hasClass('wp')))
       {
          if($(target4).hasClass('bp'))
          {
            $(target4).addClass('red-highlight');
            break;
          }
          $(target4).addClass('highlighted');
          row1=minus(row1,1);
          colm1=plus(colm1,1);
          target4='#'+row1+' #'+colm1;
       }
           
    

  }

   if(piece === "white rook" && turn==='w'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
    
     var target1=0;
     if(row!='8'){
      target1 = '#'+plus(row,1)+' #'+colm;
     }
     
     var trow = row;
     while(trow <'9' && target1 !=0){
      if($(target1).hasClass('bp'))
      {$(target1).addClass('red-highlight'); break;}
    else if( $(target1).hasClass('wp') )
       break;
      else
      $(target1).addClass("highlighted");
      trow = plus(trow,1);
      target1 = '#'+plus(trow,1)+' #'+colm;

     }
     
      trow = row;
      var target2 = 0;
      if(row != '1'){
        target2 = '#'+minus(row,1)+' #'+colm;
      }
      while(trow > '0' && target2 !=0){
          if($(target2).hasClass('bp')){
            $(target2).addClass('red-highlight');
            break;
          }
          else if($(target2).hasClass('wp')){
             break;
          }
          else
         $(target2).addClass('highlighted');
             trow = minus(trow,1);
             target2 = '#'+minus(trow,1)+' #'+colm;
      }
      trow = row;
      var tcolm = colm;

      var target3 = 0;
      if(tcolm != 'h'){
        target3 = '#'+row+' #'+plus(colm,1);
      }

      while(tcolm < 'i' && target3 !=0){
        if($(target3).hasClass('bp')){
          $(target3).addClass('red-highlight');
          break;
        }
        else if ($(target3).hasClass('wp')){
          break;
        }
        else
        $(target3).addClass('highlighted');
           tcolm = plus(tcolm,1);
           target3 = '#'+row+' #'+tcolm;
      }
      tcolm = colm;

      var target4 = 0;
      if(tcolm !='a'){
        target4 = '#'+row + ' #' + minus(tcolm,1);
      }

      while(tcolm>='a' && target4 !=0){
        if($(target4).hasClass('bp'))
           {
            $(target4).addClass('red-highlight');
            break;
           }
           else if($(target4).hasClass('wp')){
            break;
           }
           else 
           $(target4).addClass('highlighted');
        tcolm = minus(tcolm,1);
        target4 = '#'+row+' #'+tcolm;
      }
 
      
    }

    if(piece === 'white queen'&&turn==='w'){
     
      $(".highlighted").removeClass("highlighted");
      $(".red-highlight").removeClass("red-highlight");
      $(".clicked").removeClass("clicked");
      $(this).addClass("clicked");

      var row1 = row;
      var colm1 = colm;

     var target1=0,target2=0,target3=0,target4=0;

     if(row1 != '8' && colm1 != 'h')
     target1='#'+plus(row1,1)+' #'+plus(colm1,1);
    
     while(target1 !=0 && row1!='9' && colm1!='i' && !($(target1).hasClass('wp')))
     {
           if($(target1).hasClass('bp'))
           {$(target1).addClass('red-highlight');
           break;}
           $(target1).addClass('highlighted');
           row1=plus(row1,1);
           colm1=plus(colm1,1);
           target1='#'+row1+' #'+colm1;
     }
     row1=row;
     colm1=colm;  
     if(row1 !='8' && colm1 !='a')
     target2='#'+plus(row1,1)+' #'+minus(colm1,1);

     while(target2 !=0 && row1!='9' && colm1>='a' && !($(target2).hasClass('wp')))
     {
        if($(target2).hasClass('bp'))
        {
          $(target2).addClass('red-highlight');
          break;
        }
        $(target2).addClass('highlighted');
        row1=plus(row1,1);
        colm1=minus(colm1,1);
        target2='#'+row1+' #'+colm1;
     }

     row1=row;
     colm1=colm;  
     if(row1 !='1' && colm1 !='a')
     target3='#'+minus(row1,1)+' #'+minus(colm1,1);

     while(target3 !=0 && row1!='0' && colm1>='a' && !($(target3).hasClass('wp')))
     {
        if($(target3).hasClass('bp'))
        {
          $(target3).addClass('red-highlight');
          break;
        }
        $(target3).addClass('highlighted');
        row1=minus(row1,1);
        colm1=minus(colm1,1);
        target3='#'+row1+' #'+colm1;
     }


     row1=row;
     colm1=colm;  
     if(row1 !='1' && colm1 !='h')
     target4='#'+minus(row1,1)+' #'+plus(colm1,1);

     while(target4 !=0 && row1!='0' && colm1!='i' && !($(target4).hasClass('wp')))
     {
        if($(target4).hasClass('bp'))
        {
          $(target4).addClass('red-highlight');
          break;
        }
        $(target4).addClass('highlighted');
        row1=minus(row1,1);
        colm1=plus(colm1,1);
        target4='#'+row1+' #'+colm1;
     }


     var target5=0;
     if(row!='8'){
      target5 = '#'+plus(row,1)+' #'+colm;
     }
     
     var trow = row;
     while(trow <'9' && target5 !=0){
      if($(target5).hasClass('bp'))
      {$(target5).addClass('red-highlight'); break;}
    else if( $(target5).hasClass('wp') )
       break;
      else
      $(target5).addClass("highlighted");
      trow = plus(trow,1);
      target5 = '#'+plus(trow,1)+' #'+colm;

     }
     
      trow = row;
      var target6 = 0;
      if(row != '1'){
        target6 = '#'+minus(row,1)+' #'+colm;
      }
      while(trow > '0' && target6 !=0){
          if($(target6).hasClass('bp')){
            $(target6).addClass('red-highlight');
            break;
          }
          else if($(target6).hasClass('wp')){
             break;
          }
          else
         $(target6).addClass('highlighted');
             trow = minus(trow,1);
             target6 = '#'+minus(trow,1)+' #'+colm;
      }
      trow = row;
      var tcolm = colm;

      var target7= 0;
      if(tcolm != 'h'){
        target7 = '#'+row+' #'+plus(colm,1);
      }

      while(tcolm < 'i' && target7 !=0){
        if($(target7).hasClass('bp')){
          $(target7).addClass('red-highlight');
          break;
        }
        else if ($(target7).hasClass('wp')){
          break;
        }
        else
        $(target7).addClass('highlighted');
           tcolm = plus(tcolm,1);
           target7 = '#'+row+' #'+tcolm;
      }
      tcolm = colm;

      var target8 = 0;
      if(tcolm !='a'){
        target8 = '#'+row + ' #' + minus(tcolm,1);
      }

      while(tcolm>='a' && target8 !=0){
        if($(target8).hasClass('bp'))
           {
            $(target8).addClass('red-highlight');
            break;
           }
           else if($(target8).hasClass('wp')){
            break;
           }
           else 
           $(target8).addClass('highlighted');
        tcolm = minus(tcolm,1);
        target8 = '#'+row+' #'+tcolm;
      }
 

    }
  
     if(piece==='white king' && turn==='w'){
      $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
        
          var pos=[0,0,0,0,0,0,0,0,0];
          if(row!='8')
          pos[1]='#'+plus(row,1)+' #'+colm;
        
        if(row!='1')
        pos[2]='#'+minus(row,1)+' #'+colm;
       
       if(colm!='h')
       pos[3]='#'+row+' #'+plus(colm,1);
     
      if(colm!='a')
      pos[4]='#'+row+' #'+minus(colm,1);

      if(row!='8' && colm != 'h')
      pos[5]='#'+plus(row,1)+' #'+plus(colm,1);
   
    if(row!='8' && colm!='a')
    pos[6]='#'+plus(row,1)+' #'+minus(colm,1);

      
      if(row!='1' && colm!='h')
      pos[7]='#'+minus(row,1)+' #'+plus(colm,1);

      
      if(row!='1' && colm!='a')
      pos[8]='#'+minus(row,1)+' #'+minus(colm,1);


      for(let i=1;i<=8;i++){
        if($(pos[i]).hasClass('bp'))
           $(pos[i]).addClass('red-highlight');
        if(!($(pos[i]).hasClass('wp')))
        $(pos[i]).addClass('highlighted');
      }

     }


   if(piece === "black pawn" && turn==='b'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
    
     var capture1 ;
     if(colm != 'h')
     capture1 = '#'+ minus(row,1) + ' #'+plus(colm,1);
  
     var capture2;
       if(colm != 'a')
      capture2 = '#'+ minus(row,1)+' #'+minus(colm,1);
     else capture2 = '#'+minus(row,1);
  
   
     if($(capture1).hasClass('wp'))
       $(capture1).addClass('red-highlight');
      
     if($(capture2).hasClass('wp'))
     $(capture2).addClass('red-highlight');



    var curr = '#'+row+' #'+colm;
    var target1 = '#'+minus(row,1)+' #'+colm;
          var target2 = '#'+minus(row,2)+' #'+colm;
         
          var check=0;
          if($(target1).hasClass('bp')||$(target1).hasClass('wp'))
          check=1;
        else $(target1).addClass('highlighted');

        if(check==0 && !($(target2).hasClass('bp')||$(target2).hasClass('wp')) && $(curr).hasClass('untouched'))
        { 
          $(target2).addClass('highlighted');         
          //$(curr).removeClass('untouched');
      }
      curr.removeClass('untouched');
    
   }

   if (piece === "black knight" && turn==='b'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
    // $('#'+minus(row,2)+' #'+ plus(colm,1)).addClass("highlighted") ;
    // $('#'+minus(row,2)+' #'+ minus(colm,1)).addClass("highlighted") ;
    var target=[0,0,0,0,0,0,0,0];
    if(row<'7'&&colm<'h')
    target[0]='#'+plus(row,2)+' #'+plus(colm,1);
  if(row<'7'&&colm>'a')
    target[1]='#'+plus(row,2)+' #'+minus(colm,1);
  if(row<'8'&&colm<'g')
    target[2]='#'+plus(row,1)+' #'+plus(colm,2);
  if(row<'8'&&colm>'b')
    target[3]='#'+plus(row,1)+' #'+minus(colm,2);
  if(row>'2'&&colm<'h')
    target[4]='#'+minus(row,2)+' #'+plus(colm,1);
  if(row>'2'&&colm>'a')
    target[5]='#'+minus(row,2)+' #'+minus(colm,1);
  if(row>'1'&&colm<'g')
    target[6]='#'+minus(row,1)+' #'+plus(colm,2);
  if(row>'1'&&colm>'b')
    target[7]='#'+minus(row,1)+' #'+minus(colm,2);
    for(let i=0;i<8;i++){
      if((target[i])!=0){
        if($(target[i]).hasClass('wp'))
        $(target[i]).addClass('red-highlight');
        else if( !($(target[i]).hasClass('bp')))
          $(target[i]).addClass('highlighted');
      }
    }
   }
  
   if(piece==="black bishop"&&turn==='b'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
    $(this).addClass("clicked");
   
        var row1 = row;
        var colm1 = colm;

       var target1=0,target2=0,target3=0,target4=0;

       if(row1 != '8' && colm1 != 'h')
       target1='#'+plus(row1,1)+' #'+plus(colm1,1);
      
       while(target1 !=0 && row1!='9' && colm1!='i' && !($(target1).hasClass('bp')))
       {
             if($(target1).hasClass('wp'))
             {$(target1).addClass('red-highlight');
             break;}
             $(target1).addClass('highlighted');
             row1=plus(row1,1);
             colm1=plus(colm1,1);
             target1='#'+row1+' #'+colm1;
       }
       row1=row;
       colm1=colm;  
       if(row1 !='8' && colm1 !='a')
       target2='#'+plus(row1,1)+' #'+minus(colm1,1);

       while(target2 !=0 && row1!='9' && colm1>='a' && !($(target2).hasClass('bp')))
       {
          if($(target2).hasClass('wp'))
          {
            $(target2).addClass('red-highlight');
            break;
          }
          $(target2).addClass('highlighted');
          row1=plus(row1,1);
          colm1=minus(colm1,1);
          target2='#'+row1+' #'+colm1;
       }

       row1=row;
       colm1=colm;  
       if(row1 !='1' && colm1 !='a')
       target3='#'+minus(row1,1)+' #'+minus(colm1,1);

       while(target3 !=0 && row1!='0' && colm1>='a' && !($(target3).hasClass('bp')))
       {
          if($(target3).hasClass('wp'))
          {
            $(target3).addClass('red-highlight');
            break;
          }
          $(target3).addClass('highlighted');
          row1=minus(row1,1);
          colm1=minus(colm1,1);
          target3='#'+row1+' #'+colm1;
       }


       row1=row;
       colm1=colm;  
       if(row1 !='1' && colm1 !='h')
       target4='#'+minus(row1,1)+' #'+plus(colm1,1);

       while(target4 !=0 && row1!='0' && colm1!='i' && !($(target4).hasClass('bp')))
       {
          if($(target4).hasClass('wp'))
          {
            $(target4).addClass('red-highlight');
            break;
          }
          $(target4).addClass('highlighted');
          row1=minus(row1,1);
          colm1=plus(colm1,1);
          target4='#'+row1+' #'+colm1;
       }   

  }

     if(piece ==='black rook' && turn === 'b'){
      $(".highlighted").removeClass("highlighted");
      $(".red-highlight").removeClass("red-highlight");
      $(".clicked").removeClass("clicked");
      $(this).addClass("clicked");

       var target1=0;
     if(row!='8'){
      target1 = '#'+plus(row,1)+' #'+colm;
     }
     
     var trow = row;
     while(trow <'9' && target1 !=0){
      if($(target1).hasClass('wp'))
      {$(target1).addClass('red-highlight'); break;}
    else if( $(target1).hasClass('bp') )
       break;
      else
      $(target1).addClass("highlighted");
      trow = plus(trow,1);
      target1 = '#'+plus(trow,1)+' #'+colm;

     }
     
      trow = row;
      var target2 = 0;
      if(row != '1'){
        target2 = '#'+minus(row,1)+' #'+colm;
      }
      while(trow > '0' && target2 !=0){
          if($(target2).hasClass('wp')){
            $(target2).addClass('red-highlight');
            break;
          }
          else if($(target2).hasClass('bp')){
             break;
          }
          else
         $(target2).addClass('highlighted');
             trow = minus(trow,1);
             target2 = '#'+minus(trow,1)+' #'+colm;
      }
      trow = row;
      var tcolm = colm;

      var target3 = 0;
      if(tcolm != 'h'){
        target3 = '#'+row+' #'+plus(colm,1);
      }

      while(tcolm < 'i' && target3 !=0){
        if($(target3).hasClass('wp')){
          $(target3).addClass('red-highlight');
          break;
        }
        else if ($(target3).hasClass('bp')){
          break;
        }
        else
        $(target3).addClass('highlighted');
           tcolm = plus(tcolm,1);
           target3 = '#'+row+' #'+tcolm;
      }
      tcolm = colm;

      var target4 = 0;
      if(tcolm !='a'){
        target4 = '#'+row + ' #' + minus(tcolm,1);
      }

      while(tcolm>='a' && target4 !=0){
        if($(target4).hasClass('wp'))
           {
            $(target4).addClass('red-highlight');
            break;
           }
           else if($(target4).hasClass('bp')){
            break;
           }
           else 
           $(target4).addClass('highlighted');
        tcolm = minus(tcolm,1);
        target4 = '#'+row+' #'+tcolm;
      }
 


   }

   if(piece==='black queen' && turn==='b'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
    $(this).addClass("clicked");
     
   
    var row1 = row;
var colm1 = colm;

var target1 = 0, target2 = 0, target3 = 0, target4 = 0;

if (row1 != '8' && colm1 != 'h')
    target1 = '#' + plus(row1, 1) + ' #' + plus(colm1, 1);

while (target1 != 0 && row1 != '9' && colm1 != 'i' && !($(target1).hasClass('bp'))) {
    if ($(target1).hasClass('wp')) {
        $(target1).addClass('red-highlight');
        break;
    }
    $(target1).addClass('highlighted');
    row1 = plus(row1, 1);
    colm1 = plus(colm1, 1);
    target1 = '#' + row1 + ' #' + colm1;
}

row1 = row;
colm1 = colm;
if (row1 != '8' && colm1 != 'a')
    target2 = '#' + plus(row1, 1) + ' #' + minus(colm1, 1);

while (target2 != 0 && row1 != '9' && colm1 >= 'a' && !($(target2).hasClass('bp'))) {
    if ($(target2).hasClass('wp')) {
        $(target2).addClass('red-highlight');
        break;
    }
    $(target2).addClass('highlighted');
    row1 = plus(row1, 1);
    colm1 = minus(colm1, 1);
    target2 = '#' + row1 + ' #' + colm1;
}

row1 = row;
colm1 = colm;
if (row1 != '1' && colm1 != 'a')
    target3 = '#' + minus(row1, 1) + ' #' + minus(colm1, 1);

while (target3 != 0 && row1 != '0' && colm1 >= 'a' && !($(target3).hasClass('bp'))) {
    if ($(target3).hasClass('wp')) {
        $(target3).addClass('red-highlight');
        break;
    }
    $(target3).addClass('highlighted');
    row1 = minus(row1, 1);
    colm1 = minus(colm1, 1);
    target3 = '#' + row1 + ' #' + colm1;
}

row1 = row;
colm1 = colm;
if (row1 != '1' && colm1 != 'h')
    target4 = '#' + minus(row1, 1) + ' #' + plus(colm1, 1);

while (target4 != 0 && row1 != '0' && colm1 != 'i' && !($(target4).hasClass('bp'))) {
    if ($(target4).hasClass('wp')) {
        $(target4).addClass('red-highlight');
        break;
    }
    $(target4).addClass('highlighted');
    row1 = minus(row1, 1);
    colm1 = plus(colm1, 1);
    target4 = '#' + row1 + ' #' + colm1;
}

var target5 = 0;
if (row != '8') {
    target5 = '#' + plus(row, 1) + ' #' + colm;
}

var trow = row;
while (trow < '9' && target5 != 0) {
    if ($(target5).hasClass('wp')) {
        $(target5).addClass('red-highlight');
        break;
    } else if ($(target5).hasClass('bp'))
        break;
    else
        $(target5).addClass("highlighted");
    trow = plus(trow, 1);
    target5 = '#' + plus(trow, 1) + ' #' + colm;
}

trow = row;
var target6 = 0;
if (row != '1') {
    target6 = '#' + minus(row, 1) + ' #' + colm;
}
while (trow > '0' && target6 != 0) {
    if ($(target6).hasClass('wp')) {
        $(target6).addClass('red-highlight');
        break;
    } else if ($(target6).hasClass('bp')) {
        break;
    } else
        $(target6).addClass('highlighted');
    trow = minus(trow, 1);
    target6 = '#' + minus(trow, 1) + ' #' + colm;
}

trow = row;
var tcolm = colm;

var target7 = 0;
if (tcolm != 'h') {
    target7 = '#' + row + ' #' + plus(colm, 1);
}

while (tcolm < 'i' && target7 != 0) {
    if ($(target7).hasClass('wp')) {
        $(target7).addClass('red-highlight');
        break;
    } else if ($(target7).hasClass('bp')) {
        break;
    } else
        $(target7).addClass('highlighted');
    tcolm = plus(tcolm, 1);
    target7 = '#' + row + ' #' + tcolm;
}

tcolm = colm;

var target8 = 0;
if (tcolm != 'a') {
    target8 = '#' + row + ' #' + minus(tcolm, 1);
}

while (tcolm >= 'a' && target8 != 0) {
    if ($(target8).hasClass('wp')) {
        $(target8).addClass('red-highlight');
        break;
    } else if ($(target8).hasClass('bp')) {
        break;
    } else
        $(target8).addClass('highlighted');
    tcolm = minus(tcolm, 1);
    target8 = '#' + row + ' #' + tcolm;
}


   }

   if(piece==='black king' && turn==='b'){
    $(".highlighted").removeClass("highlighted");
    $(".red-highlight").removeClass("red-highlight");
    $(".clicked").removeClass("clicked");
     $(this).addClass("clicked");
        
          var pos=[0,0,0,0,0,0,0,0,0];
          if(row!='8')
          pos[1]='#'+plus(row,1)+' #'+colm;
        
        if(row!='1')
        pos[2]='#'+minus(row,1)+' #'+colm;
       
       if(colm!='h')
       pos[3]='#'+row+' #'+plus(colm,1);
     
      if(colm!='a')
      pos[4]='#'+row+' #'+minus(colm,1);

      if(row!='8' && colm != 'h')
      pos[5]='#'+plus(row,1)+' #'+plus(colm,1);
   
    if(row!='8' && colm!='a')
    pos[6]='#'+plus(row,1)+' #'+minus(colm,1);

      
      if(row!='1' && colm!='h')
      pos[7]='#'+minus(row,1)+' #'+plus(colm,1);

      
      if(row!='1' && colm!='a')
      pos[8]='#'+minus(row,1)+' #'+minus(colm,1);


      for(let i=1;i<=8;i++){
        if($(pos[i]).hasClass('wp'))
           $(pos[i]).addClass('red-highlight');
        if(!($(pos[i]).hasClass('bp')))
        $(pos[i]).addClass('highlighted');
      }
     
   }
  
   
});  }

$(document).on('click', '.highlighted', function() {
  var stored = $('.clicked') ;
  var row = $('.clicked').closest('.row').attr('id');
  var colm = $('.clicked').closest('.colm').attr('id');
  
  if($('#'+row+' #'+colm).hasClass('wp'))
    {   $(this).addClass('wp');
    $('#'+row+' #'+colm).removeClass('wp');
  }
  else {
    $(this).addClass('bp');
    $('#'+row+' #'+colm).removeClass('bp');
  }
  $('.clicked').remove();
  $(this).append(stored);
  stored=null;
  $(".highlighted").removeClass("highlighted");  
  $(".red-highlight").removeClass("red-highlight");   
  if(turn==='w')
  turn='b';
else turn='w';
 

});

function updateCount(element){

     //alert();
       if(element.find('img').hasClass('white pawn')){
        wpawnc++;
        $('#wpawnc').text('x '+wpawnc);
       }
       if(element.find('img').hasClass('white queen')){
        wqueenc++;
        $('#wqueenc').text('x '+wqueenc);
       }
       if(element.find('img').hasClass('white rook')){
        wrookc++;
        $('#wrookc').text('x '+wrookc);
       }
       if(element.find('img').hasClass('white bishop')){
        wbishopc++;
        $('#wbishopc').text('x '+wbishopc);
       }
       if(element.find('img').hasClass('white knight')){
        wknightc++;
        $('#wknightc').text('x '+wknightc);
       }
       if(element.find('img').hasClass('black pawn')){
        bpawnc++;
        $('#bpawnc').text('x '+bpawnc);
       }
       if(element.find('img').hasClass('black queen')){
        bqueenc++;
        $('#bqueenc').text('x '+bqueenc);
       }
       if(element.find('img').hasClass('black rook')){
        brookc++;
        $('#brookc').text('x '+brookc);
       }
       if(element.find('img').hasClass('black bishop')){
        bbishopc++;
        $('#bbishopc').text('x '+bbishopc);
       }
       if(element.find('img').hasClass('black knight')){
        bknightc++;
        $('#bknightc').text('x '+bknightc);
       }
}

$(document).on('click', '.red-highlight', function() {
 
 

  updateCount($(this));
  var stored = $('.clicked') ;
  var row = $('.clicked').closest('.row').attr('id');
  var colm = $('.clicked').closest('.colm').attr('id');
   
   if( $('#'+row+' #'+colm).hasClass('wp'))
   $('#'+row+' #'+colm).removeClass('wp');
  else if( $('#'+row+' #'+colm).hasClass('bp'))
  $('#'+row+' #'+colm).removeClass('bp');
  
  

    if($(this).hasClass('wp')){
      $(this).removeClass('wp');
      $(this).addClass('bp');
    }
    else if($(this).hasClass('bp')){
      $(this).removeClass('bp');
      $(this).addClass('wp');
    }

  $('.clicked').remove();
    $(this).find('img').remove();
  $(this).append(stored);
 
  stored=null;
  $(".red-highlight").removeClass("red-highlight");   
  $(".highlighted").removeClass("highlighted");  

  if(turn==='w')
  {turn='b';  }
else turn='w';

    
      
      
 

});
$("button").click(function(){
    $("#form").show();
    $('section').css({ 'opacity' : 0.5 });
   
});
$("form").submit(function(event){
   //event.preventDefault();

   var name1 = $("#name1").val();
   var name2 = $("#name2").val();

   $.ajax({
    type: "POST",
    url: "/submit",
    data: { name1: name1, name2: name2 },
    success: function(response) {
        console.log(response);
        // Additional actions on success
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
    
});

   $("#form").hide();
   $('section').css({ 'opacity' : 1 });
});

