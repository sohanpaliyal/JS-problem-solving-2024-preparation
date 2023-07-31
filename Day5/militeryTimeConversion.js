// Given a time in -hour AM/PM format, convert it to military (24-hour) time.






function getArmyFormatTime(str){
      
    
    let inBetweenTimeStr = str.split('').splice(2 , str.split('').length -4).join('')
    let startTime = str.split('').splice(0 , 2).join('')
 
    
    if(str.startsWith('12'))
        startTime = 0;
    
    
     if(str.includes("PM"))
        startTime = (parseInt(startTime))+12;
    
    return startTime + inBetweenTimeStr
  
}

console.log(getArmyFormatTime('12:40:22AM'))





for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}


["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"]

["abcde", "sdaklfj", "asdjf", "na","basdn"]