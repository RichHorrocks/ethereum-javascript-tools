/**
 * Transfer the ENTIRE BALANCE from one account to another.
 * 
 * Before you call this, you must unlock your account:
 *   personal.unlockAccount(from)
 * 
 * @see https://github.com/ethereum/go-ethereum/issues/1637
 */
function transferEntireBalance(from, to) {
    var gas = 21000;
    var price = web3.toWei(50, "shannon");
    var balance = eth.getBalance(from);
    var value = balance - gas * price;
    if (value > 0) {
        var txn = eth.sendTransaction({from: from, to: to, gasPrice: price, gas: gas, value: value});
        console.log("  Transfer "+ from +" to "+ to +": "+ txn);
        return txn;
    }
    console.log("  Transfer "+ from +" to "+ to +": (No funds available)");
    return null;
}
