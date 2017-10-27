function Aggregator(){
  this.count = 0;
}

Aggregator.prototype.add = function(n){
  this.count += n;
  return this;
};

Aggregator.prototype.getCount = function(){
  return this.count;
};

Aggregator.prototype.reset = function(){
  this.count = 0;
  return this;
};

Aggregator.prototype.draw = function(){
  textSize(32);
  text(`${this.count}`, width-100, height-100);
};
