import oakpic from "./treePics/oak.png";
import sprucepic from "./treePics/spruce.png";
import junglepic from "./treePics/jungle.png";

var oak = {name: "Oak", 
    category:"hardwood", 
    soilCon:"medDrain",
    sunCon:"sunny",
    mainten:"lowMain",
    heightV:"<1",
    gRate:"fastR",
    pic:oakpic};

var spruce = {name: "Spruce", category:"hardwood", soilCon:"slow", sunCon:"shade", mainten:"medMain", heightV:"2-3", gRate:"medR", pic:sprucepic};
var jungle = {name: "Jungle", category:"hardwood", soilCon:"fast", sunCon:"medSun", mainten:"highMain", heightV:">3", gRate:"slowR", pic:junglepic};
var trees=[oak,spruce,jungle];
export {trees};
