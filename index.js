function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!"
  }else if (someValue <= 2499){
    return 'I will gladly take your thirty bucks.'
  }else if (someValue >= 2500) {
    return 'No can do.'
  }

  

  }
  


function ternaryCheckCity(destination){
  // Write your code here!
  if (destination === "NYC") {
    return "Ok, sounds good."
  } else{
    return "No go."
  } 



}

function switchOnCharmFromTip(tip){
  // Write your code here!

 
  switch (tip) {
    case 'generous': 
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  }

}