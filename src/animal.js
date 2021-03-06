function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function() {
  return this.age += 1;
};

Animal.prototype.feed = function() {
  if (this.awake === true) {
    return "NOM NOM NOM";
  }
  else {
    return "ZZZZZZZZZZZ";
  }
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function() {
  this.awake = false;
  return this.awake;
};

module.exports = Animal;
