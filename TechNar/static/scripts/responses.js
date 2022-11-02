
function getBotResponse(input) {
    // test responses
    if (input == "hello", "hi", "Hello", "Hi") {
        return "Welcome To Technar Support To get started kindly state your business" +
        <a href ="TSupport.js"> Technological Support </a> +  
        <a href ="Binquiries.js"> Business Inquiries </a> +  
        <a href ="Pinquiries.js"> Product Inquiry </a> +
        <a href ="refund.js"> Refund </a> ;
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Would you like to talk to an Agent?";
    }


}