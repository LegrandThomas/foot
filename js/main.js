const tab1=['corner1','corner2','corner3','corner4','corner5','corner6','corner7','corner8','corner9','corner10','corner11','corner12'];//tab pr les corners 0à3 cornerHD/4à6 cornerBD/7à9 cornerHG/ 10à12 cornerBG

let formationDom="";
let formationExt="";
let cornertirage="0";


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



/*const tab1:['action1','action2', 'action3','action4','action5','action6','action7','action8','action9','action10','action11','action12']
appel1(0,2);
appel2(3,5);
appel3(6,8);
appel4(9,11);

var i=0;
var a=0;
var envoi="";
var compteur=0;

function senarDetermine(min,max){
i=min+compteur;
a=max;

while(compteur<(a-1)){
    envoi=tab[I];
    i=i+1;
    compteur=compteur+1
}
}
}

*/