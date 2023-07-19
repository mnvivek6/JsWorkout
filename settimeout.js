// function x(){

//     for (let i = 1;  i<=5 ; i++) {
//         setTimeout(function () {
//             console.log(i);
//         },i*1000)
        
//     }
    
//     console.log("mnvivek");
// }
// x()


function x() {

    for (var i = 1; i <=100; i++) {
        
        function s(i) {
            setTimeout(function () {
                console.log(i);
    
            },i*1500)
        }
       s(i)
      
    }
    
}
x()

