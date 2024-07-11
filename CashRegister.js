// passes 5/6 tests
function checkCashRegister(price, cash, cid) {
    // unite values dictionary  
    let UNIT_VALUE = {  
        "PENNY": 0.01, 
        "NICKEL": 0.05, 
        "DIME": 0.1, 
        "QUARTER": 0.25, 
        "ONE": 1, 
        "FIVE": 5, 
        "TEN": 10, 
        "TWENTY": 20, 
        "ONE HUNDRED": 100
    }

    // Calculating total cash
    let totalCid = 0;
    for (let element of cid) {
      totalCid += element[1];
    }

    totalCid = totalCid.toFixed(2);

    let refund = cash - price;    

    let uniteRev = Object.entries(UNIT_VALUE);
    uniteRev.reverse();

    let cidRev = Object.entries(cid);
    cidRev.reverse();

    let changeState = {
        status: 'OPEN',
        change: []
    }

    if(totalCid < refund){
        changeState.status = "INSUFFICIENT_FUNDS";
    }


    if(totalCid == refund){
        changeState.status == "ClOSED";
    }



    if( totalCid >= refund){
        let change = []
        for (var i = 0; i < 9; i++){
    
            if (refund > 0 ){
    
                if (refund > uniteRev[i][1]){
    
                    if(refund >= cidRev[i][1][1]){
                        refund = (refund - cidRev[i][1][1]).toFixed(2);
                        change.push([cidRev[i][1][0], cidRev[i][1][1]]);
                    }
                    else
                    {
                        while (refund < cidRev[i][1][1]) {
                            cidRev[i][1][1] = (cidRev[i][1][1] - uniteRev[i][1]).toFixed(2);
                        }
                        refund =(refund - cidRev[i][1][1]).toFixed(2);
                        change.push([cidRev[i][1][0], cidRev[i][1][1]]);
                    }
                    
                }
            }
        }

        if(parseFloat(refund) !== 0){
            changeState.status = "INSUFFICIENT_FUNDS";
        }else
        {
            for ( var key in change){
                changeState.change.push([change[key][0], parseFloat(change[key][1])]);
            }
        }

    }
    return changeState;
}

