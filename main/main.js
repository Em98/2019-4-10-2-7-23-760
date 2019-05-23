const START = 6;           //起步价
const PARK_PER_MIN = 0.25  //每分钟停车等待费用
const FARE_PER_KM= 0.8;    //8公里前每公里价格
const GROWTH = 0.5         //超过8公里时车费增长比例
const BEFORE_8KM = (START +  FARE_PER_KM * (8 - 2)); // 超过8公里时， 8公里之前的固定车费

module.exports = function main(inputs) {
    let base = 0;
    if(inputs.distance < 0 || inputs.parkTime < 0)
        return "inputs format error.";
    if(inputs.distance <= 2)
        base = START;
    else if(inputs.distance <= 8)
        base = (inputs.distance - 2)*FARE_PER_KM + START;
    else 
        base = BEFORE_8KM + (inputs.distance - 8) * FARE_PER_KM * (1 + GROWTH);
    return Math.round(base + (inputs.parkTime*PARK_PER_MIN));
};
