let send = document.getElementById('send');
let message = document.getElementById('message');
let sender = document.getElementById('sender');
let receiver = document.getElementById('receiver');
let product1 = document.getElementById('product1');
let product2 = document.getElementById('product2');
let hand1 = document.getElementById('hand1');
let hand2 = document.getElementById('hand2');


const animate = () => {
       {
        message.classList.add("slide-down"); 
        sender.classList.add("slide-right1");
        receiver.classList.add("slide-left");    
        //package is delivered     
        setTimeout(() => {
                product1.style.visibility = "hidden"
                product2.style.visibility = "visible"
        }, 2550);            

        //sender leaves
        setTimeout(() => {
            
            sender.classList.add("slide-left1");
            //sender.classList.remove("slide-right1");
        }, 2700);

        //receiver leaves
        setTimeout(() => {
            
            receiver.classList.add("slide-right");
        }, 3000);
        
        setTimeout(() => {
            product2.style.visibility = "hidden";
        },4000);

        //show "sent" message
        setTimeout(() => {
            message.innerText = "DELIVERED!";
            message.classList.add("slide-up");
        },5000);
    }
}

//send button is clicked
send.addEventListener('click', animate);