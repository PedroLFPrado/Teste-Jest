
function solucaoSegundoGrau(a, b, c) {

    let x1 = 0, x2 = 0, delta = 0

    var obj = [
        {
        "x1": 0,
        "x2": 0
        }
    ]

    if (a != 0 && !isNaN(a)) {

        delta = (b * b) + (-4 * a * c);
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);

        if (delta < 0) {

            return 0;

        } else if (x2 == 0) {

        
            obj.x1 = x1;
            const jsonData = JSON.stringify(obj);
          
            return x1; 

        } else {


            obj.x1 = x1;
            obj.x2 = x2;
            const jsonData = JSON.stringify(obj);

            //return obj
            return {x1, x2};
        }

    } else {

        return 0;
    }

}


//module.exports = { solucaoSegundoGrau };


function solucaoPrimeiroGrau(a1, b1) {

    let x = 0;

    const obj = [
        {
            "x": 0 
        }

    ]    
    
    if (a1 != 0 && !isNaN(a1)){

        x = (-b1)/(a1);


        obj.x = x;
        const jsonData = JSON.stringify(obj);

        return x;


    } else {

        return 0;
    }
}

module.exports = { solucaoPrimeiroGrau, solucaoSegundoGrau};

