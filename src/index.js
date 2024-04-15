// console.log("Hello NodeJs");
import {sumTwoNum , printConsole } from "./util.js";
// import subTwoNum from "./util.js";
import {default as subTwoNum} from "./util.js";

function main(){
    printConsole("tong 2 so 1va 2 la " + sumTwoNum(2,3));
    printConsole("hieu 2 so 1va 2 la " + subTwoNum(7,3));
}

main();