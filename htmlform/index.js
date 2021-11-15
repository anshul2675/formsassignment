

var myobj=
{
    init:function(){
     var that=this;
        this.load_country();
       document.getElementById('country').addEventListener('change',function(){
        that.load_state(this.value);
      });
    },
    load_country:function(){
     let dropdown = document.getElementById('country');
     dropdown.length = 0;

         let defaultOption = document.createElement('option');
        defaultOption.text = 'Choose country';

         dropdown.add(defaultOption);
         dropdown.selectedIndex = 0;

      const url = 'https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json';


    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = i;
      dropdown.add(option);
    }
   } else {

    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

    },
load_state  : function(id){
document.getElementById('state').innerHTML=" ";
 let statedrop = document.getElementById('state');
statedrop.length = 0;

let defaultOption = document.createElement('option');

statedrop.selectedIndex = 0;

const url = 'https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json';


const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    
    const data = JSON.parse(request.responseText);
    let option;
   
    for(let k=0;k<=100;k++){
        // console.log(data[id].states[k].name);
        option = document.createElement('option');
      option.text = data[id].states[k].name;
      option.value = data[id].states[k].code;
      statedrop.add(option);
    }
   } else {
       console.log('not get ');
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

    }
    
}
myobj.init(); 




















// also do by fetch api... 


// let dropdown = document.getElementById('locality-dropdown');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose Country';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = 'https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json';

// fetch(url)  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.warn('Looks like there was a problem. Status Code: ' + 
//           response.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
//       	  option.value = data[i].name;
//       	  dropdown.add(option);
//     	}    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err);  
//   });
        


















 






