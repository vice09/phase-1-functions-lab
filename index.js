function distanceFromHqInBlocks(blocksNumber) {
    if (blocksNumber > 42) {
        return "blockNumber <42 === 1"
     } else {
         return "blockNumber <42 === 8";
     }
    }
    function distanceFromHqInFeet(blockNumber){
        return distanceFromHqInBlocks(blockNumber)* 264
    }
let start=start
let destination=destination

function distanceTravelledInFeet(start,destination) {
    if (start < destination) {
        return (destination-start)*264
     }  else {
         return (start-destination)*264

     }
    }
    function calculatesFarePrice(start, destination){
        var feet = distanceTravelledInFeet(start, destination);
        if(feet <= 400){
            return 0
        }
        else if ( feet >400 && feet <2000){
            return 0.02 *(feet -400)
        }
        else if (feet >2000 && feet <2500){
            return 25
        }
        else{
            return "cannot travel that far"
        }
    }
   


    
    

    
// Code your solution in this file!
