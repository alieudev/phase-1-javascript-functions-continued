function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(decor="*"){
    return function (adj="special"){
        return `You are ${decor}${adj}${decor}!`
    }
}