export default function Race(type, start, end, timeStart, timeEnd, price) {
  this.type = type;
  this.start = start;
  this.end = end;
  this.timeStart = timeStart;
  this.timeEnd = timeEnd;
  this.price = price;
  this.getType = function () {
    return this.type;
  };
  this.getStart = function () {
    return this.start;
  };
  this.getEnd = function () {
    return this.end;
  };
  this.getTimeStart = function () {
    return this.timeStart;
  };
  this.getTimeEnd = function () {
    return this.timeEnd;
  };
  this.getPrice = function () {
    return this.price;
  };
}
