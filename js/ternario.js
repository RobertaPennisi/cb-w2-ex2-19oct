let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda")

let output = (animal==1) ? "Choose the Dog" :
             (animal==2) ? "Choose the Cat" : 
             (animal==3) ? "Choose the Goldfish" : 
             (animal==4) ? "Choose the Monkey" : 
             (animal==5) ? "Choose the Panda" :
                           "Animal not found"

console.log(output);