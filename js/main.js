function q1(){
    var first_name = document.getElementById("iF_name").value;
    var middle_name = document.getElementById("iM_name").value;
    var Last_Name = document.getElementById("iL_name").value;
    var Age = document.getElementById("i_Age").value;
    var Departmen = document.getElementById("i_Department").value;
    var Jop_Title = document.getElementById("i_jop").value;
    document.getElementById("uf_name").innerHTML = "Full Name is: "+ first_name +" "+ middle_name +" "+ Last_Name;
    document.getElementById("u_age").innerHTML = "you age is: "+ Age;
    document.getElementById("u_department").innerHTML = "your Departmen is: "+ Departmen;
    document.getElementById("u_jop").innerHTML = "Jop Title is : "+ Jop_Title;
   
}
function q2(){
    var number = document.getElementById("number_value").value;
    if(number /3 == 1 )
        {
            document.getElementById("divide").innerHTML = "yes";
        }
    else 
        {
            document.getElementById("divide").innerHTML = "no";
            
        }
    
} /*mash 3ref a3mlha */
function q3(){
    var first_number =document.getElementById("f_number").value;
    var Second_number =document.getElementById("s_number").value;
    if(first_number > Second_number )
        {
            document.getElementById("large_number").innerHTML ="The big number is the first number -> "+first_number;
        }
    else if (first_number == Second_number) 
    {
         document.getElementById("large_number").innerHTML ="<h1>The first and second digits are the same. Please enter two digits that are not the same</h1>";
        
    }
     else
        {
            document.getElementById("large_number").innerHTML ="The big number is the Second number -> "+ Second_number;
        }
    
}
function q4(){
    var typ_of = document.getElementById("typ_number").value;
    if (typ_of > 0)
        {
            document.getElementById("type_number").innerHTML = "The Number Is Positive"
        }
    else {
         document.getElementById("type_number").innerHTML = "The Number Is Negative"
    }
    
    
    
   
}
function q5(){
    var number_one = document.getElementById("number_1").value;
    var number_tow = document.getElementById("number_2").value;
    var number_thre = document.getElementById("number_3").value;
    
    var x = number_one + number_thre + number_tow ;
    var max = Math.max(number_one,number_tow,number_thre);
    var min = Math.min(number_one,number_tow, number_thre);
    document.getElementById("max_number").innerHTML = "The Max Number is : "+max;
    document.getElementById("min_number").innerHTML = "The Min Number is : "+min;
    //alert(Math.max(number_one,number_thre,number_tow));
}
function q6(){
    var eo_number = document.getElementById("even_or_odd").value;
    if(eo_number % 5 == 0) {
            document.getElementById("EaO_number").innerHTML = "the number is odd"
         }
    else
         {
            document.getElementById("EaO_number").innerHTML = "the number is even"
         }
}
function q7(){
    var input_character ="";
    input_character = document.getElementById("character").value;
    if(input_character == "a" || input_character == "e" || input_character == "i" || input_character == "o" ||input_character == "u" )
        {
            document.getElementById("character_output").innerHTML = "Output vowel";
        }
    else
        {
              document.getElementById("character_output").innerHTML = "Output consonant";
        }
}   
function q8(){
    
    var number_b = document.getElementById("btn_number").value;
    var x ="";
    for (i = 0 ; i <  number_b ; i++)
        {
         
            
         x = x+ i+",";
            
            
            
        }
          document.getElementById("number_btn").innerHTML = x+i ;  
}
function q9(){
    
    
    
    
    
    
    
    
    
} /*mash 3ref a3mlha */ 
function q10(){
    
    var number = document.getElementById("input_number_10").value;
    var x ="";
    var y ="";
    for (i = 0 ; i <= number ; i++)
        {
            x = x+ i;
            
            
            
        }
    console.log((x))
    
    
    
    
} /*mash 3ref a3mlha */
function q11(){
     var number_power = document.getElementById("input_number_11").value;
     var number_power2 = document.getElementById("input_number").value;
    
    
    
    var x = parseInt(number_power);
    var y = parseInt(number_power2);
    var z = Math.pow(x,y)
    document.getElementById("number_btn_11").innerHTML = z ;
   
//var x = math.pow(number_power, number_power2);
    
    
}
