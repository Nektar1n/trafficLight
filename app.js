var app=new Vue({
    el: '#light1',
    data:{
        time:10,
        timeYellow:3,
        timeGreen:15,
        isRedActive:true,
        isYellowActive:false,
        isGreenActive:false
        // active:'red'
    // },methods:{
    //     yellowActive: function (){
    //         setInterval(function (){
    //             this.isRedActive=false
    //             this.isYellowActive=true
    //             this.timeYellow--
    //         },1000)
    //     }
    }
});

redActive()

function redActive(){
let redActive=
    setInterval(function (){
     app.isRedActive=true
     app.isYellowActive=false
    app.time--;
    if (app.time<1){
        clearInterval(redActive)
        app.timeYellow=4
        YellowActive()
    }
},1000)}

function YellowActive (){
         let YellowActive=setInterval(function (){
             app.isRedActive=false
             app.isYellowActive=true
             // document.getElementById('time').innerHTML='${{timeYellow}}'
             app.timeYellow--
             if (app.timeYellow<1){
                 clearInterval(YellowActive)
                 app.time=10
                 GreenActive()
             }
        },1000)}

function GreenActive(){
    let GreenActive=setInterval(function (){
        app.isYellowActive=false
        app.isGreenActive=true
        app.timeGreen--
        if (app.timeGreen<1){
            clearInterval(GreenActive)
            app.timeYellow=4
            yellowOne()
        }
    },1000)
}

function yellowOne(){
    let yellowOne=setInterval(function (){
        app.isYellowActive=true
        app.isGreenActive=false
        app.timeYellow--
        if (app.timeYellow<1){
            clearInterval(yellowOne)
            app.timeGreen=15
            redActive()
        }
    },1000)
}


//     setInterval(function(){
//         if (app.time<1){
//             app.active=app.active=='red'?'green':'red';
//             app.time=10;
//         }
//         app.time--;
// },1000);



// setInterval(function (){
//     if (app.time<1){
//         if(app.active=='red'){
//             app.active='green'
//         }else {
//             app.active='red'
//         }app.time=10
//     }app.time--
// },1000)
