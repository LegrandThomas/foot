const tab1=['corner1','corner2','corner3','corner4','corner5','corner6','corner7','corner8','corner9','corner10','corner11','corner12'];//tab pr les corners 0à3 cornerHD/4à6 cornerBD/7à9 cornerHG/ 10à12 cornerBG

let formationDom="";
let formationExt="";
let cornertirage=0;
let coupftirage=0;
let coupftirage2=3;
let coupftirage3=6;
let coupftirage4=9;

const tabAction=['coupFBD','coupFBD2', 'coupFBD3','coupFHD','coupFHD2','coupFHD3','coupFHG','coupFHG2','coupFHG3','coupFBG','coupFBG2','coupFBG3'];

var i=0;
var a=0;
var envoi="";
var compteur=0;

function swap(cssFile) {
    var link = document.getElementById("change-style")
    link.href = cssFile;
}

function RetienFormation(Form){
    formationDom=Form;
}

function RetienFormation2(Form2){
    formationExt=Form2;
}

function videVar(){
    formationDom="";
    formationExt="";

}

function VSFormation(){
    console.log(JSON.parse(JSON.stringify(formationDom)))  
    console.log(JSON.parse(JSON.stringify(formationExt)))  
    switch (formationDom) {
        case '4-3-3':
            switch (formationExt){
                    case '4-3-3':
                     console.log('4-4-3 vs 4-4-3');
                      swap('css/433Ext.css');
                      break;
                    case '4-4-2':
                        console.log('4-4-3 vs 4-4-2');
                        swap('css/433vs442.css');
                        break;
                    case '5-3-2':
                        console.log('4-3-3 vs 5-3-2');
                        swap('css/433vs532.css');
                         
                                 }  
                break;
         
        case '4-4-2':
            switch (formationExt){
                case '4-3-3':
                 console.log('4-4-2 vs 4-4-3');
                  swap('css/442vs433.css');
                  break;
                case '4-4-2':
                    console.log('4-4-2 vs 4-4-2');
                    swap('css/442Ext.css');
                    break;
                case '5-3-2':
                    console.log('4-4-2 vs 5-3-2');
                    swap('css/442vs532.css');
                   
                                 }
            break;
            
        case '5-3-2':
            switch (formationExt){
                case '4-3-3':
                 console.log('5-3-2 vs 4-4-3');
                  swap('css/532vs433.css');
                  break;
                case '4-4-2':
                    console.log('5-3-2 vs 4-4-2');
                    swap('css/532vs442.css');
                    break;
                case '5-3-2':
                    console.log('5-3-2 vs 5-3-2');
                    swap('css/532Ext.css');
                              
                                 }
          break;
          default:
           alert(" selectionner formation Domicile en premier, Merci");
                         }
  
}


function VSFormation2(){
console.log(JSON.parse(JSON.stringify(formationDom)))  
console.log(JSON.parse(JSON.stringify(formationExt)))  
switch (formationExt) {

    
    case '4-3-3':
        switch (formationDom){
            case '4-3-3':
            console.log('4-4-3 vs 4-4-3');
            swap('css/433Ext.css');
            break;
            case '4-4-2':
                console.log('4-4-2 vs 4-4-3');
                swap('css/442vs433.css');
            break;
            case '5-3-2':
                console.log('5-3-2 vs 4-4-3');
                swap('css/532vs433.css');
                                             
                            }  
            break;
                             
    case '4-4-2':
        switch (formationDom){
            case '4-3-3':
                console.log('4-4-3 vs 4-4-2');
                swap('css/433vs442.css');
            break;
            case '4-4-2':
            console.log('4-4-2 vs 4-4-2');
            swap('css/442Ext.css');
            break;
            case '5-3-2':
                console.log('5-3-2 vs 4-4-2');
                swap('css/532vs442.css');
                                       
                            }
            break;
                                
        case '5-3-2':
            switch (formationDom){
                case '4-3-3':
                    console.log('4-3-3 vs 5-3-2');
                    swap('css/433vs532.css');
                break;
                case '4-4-2':
                    console.log('4-4-2 vs 5-3-2');
                    swap('css/442vs532.css');
                   
                break;
                case '5-3-2':
                console.log('5-3-2 vs 5-3-2');
                swap('css/532Ext.css');
                                                  
                                 }
            break;
            case '':
        swap('css/433.css');
        break;
           
         }
                      
}


function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


function cornerHDsenar(){
let test="";

cornertirage=entierAleatoire(0, 2);
test=tab1[cornertirage];
console.log(JSON.parse(JSON.stringify(test)));

switch (test) {
  case 'corner1':
      swap('css/cornerHD.css');
    break;
    
  case 'corner2':
      swap('css/cornerHD2.css');
    break;

    case 'corner3':
      swap('css/cornerHD3.css');
    break;

  
                    }
                        }

function cornerHGsenar(){
let test="";
cornertirage=entierAleatoire(3, 5);
test=tab1[cornertirage];
console.log(JSON.parse(JSON.stringify(test)));

switch (test) {

case 'corner4':
swap('css/cornerHG.css');
break;
                              
case 'corner5':
swap('css/cornerHG2.css');
break;
                          
case 'corner6':
swap('css/cornerHG3.css');
break;                     
                              
}
                        }

                        
function cornerBGsenar(){
    let test="";
    cornertirage=entierAleatoire(6, 8);
    test=tab1[cornertirage];
    console.log(JSON.parse(JSON.stringify(test)));
    
    switch (test) {
    
    case 'corner7':
    swap('css/cornerBG.css');
    break;
                                  
    case 'corner8':
    swap('css/cornerBG2.css');
    break;
                              
    case 'corner9':
    swap('css/cornerBG3.css');
    break;                     
                                  
    }
}

function cornerBDsenar(){
    let test="";
    cornertirage=entierAleatoire(9, 11);
    test=tab1[cornertirage];
    console.log(JSON.parse(JSON.stringify(test)));
    
    switch (test) {
    
    case 'corner10':
    swap('css/cornerBD.css');
    break;
                                  
    case 'corner11':
    swap('css/cornerBD2.css');
    break;
                              
    case 'corner12':
    swap('css/cornerBD3.css');
    break;                     
                                  
    }
}

function coupFBDsenar(){
    let test="";
   
    test=tabAction[coupftirage];
    switch (test) {
    
    case 'coupFBD':
    swap('css/coupFBD.css');
    coupftirage=coupftirage+1;
    break;
                                  
    case 'coupFBD2':
    swap('css/coupFBD2.css');
    coupftirage=coupftirage+1;
    break;
                              
    case 'coupFBD3':
    swap('css/coupFBD3.css');
    coupftirage=0;
    break;                     
                                  
    }
}


function coupFHDsenar(){
    let test="";
    test=tabAction[coupftirage2];
    console.log(test);
    switch (test) {
    
    case 'coupFHD':
    swap('css/coupFHD.css');
    coupftirage2=coupftirage2+1;
    break;
                                  
    case 'coupFHD2':
    swap('css/coupFHD2.css');
    coupftirage2=coupftirage2+1;
    break;
                              
    case 'coupFHD3':
    swap('css/coupFHD3.css');
    coupftirage2=3;
    break;                     
                                  
    }
}


function coupFHGsenar(){
    let test="";
    test=tabAction[coupftirage3];
    console.log(test);
    switch (test) {
    
    case 'coupFHG':
    swap('css/coupFHG.css');
    coupftirage3=coupftirage3+1;
    break;
                                  
    case 'coupFHG2':
    swap('css/coupFHG2.css');
    coupftirage3=coupftirage3+1;
    break;
                              
    case 'coupFHG3':
    swap('css/coupFHG3.css');
    coupftirage3=6;
    break;                     
                                  
    }
}

function coupFBGsenar(){
    let test="";
    test=tabAction[coupftirage4];
    console.log(test);
    switch (test) {
    
    case 'coupFBG':
    swap('css/coupFBG.css');
    coupftirage4=coupftirage4+1;
    break;
                                  
    case 'coupFBG2':
    swap('css/coupFBG2.css');
    coupftirage4=coupftirage4+1;
    break;
                              
    case 'coupFBG3':
    swap('css/coupFBG3.css');
    coupftirage4=9;
    break;                     
                                  
    }
}
/*

function senarDetermine(min,max){
i=min+compteur;
a=max;
console.log(i);
console.log(a);
while(compteur<(a-1)){
    envoi=tabAction[i];
    console.log(envoi);
    swap(envoi);
    i=i+1;
    compteur=compteur+1
}
}

*/
