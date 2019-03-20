function train(wagons) {
    let passengers = wagons.shift()
                           .split(" ")
                           .map(Number);
    
    let maxNumberCapacity = Number(wagons.shift());

    for (let commands of wagons) {
        let currentCommand = commands.split(" ");
    }

    if (currentCommand[0] === 0) {
        passengers.push(Number(currentCommand[1]));
    } else {

        for (let i=0; i<passengers.length; i++) {
            if (passengers[i] + Number(currentCommand[0]) <=maxNumberCapacity){
                passengers[i] += Number(currentCommand[0]);
            
            break;
            }
        }
    }
    console.log(passengers.join(" "));
}