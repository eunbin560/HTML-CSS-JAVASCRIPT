var car={
  color:'White',
  model:'K5',
  moveHistoty:[],
  totalMove:0,
  getTotalMove:function(){
      return this.totalMove;
  },
  move:function(km){
      this.moveHistoty.push(km);
      this.totalMove+=km;
  }
}
car.move(56);
car.move(400);
car.move(10);
console.log(`주행내역: ${car.moveHistoty}`);
console.log(`총 주행거리: ${car.totalMove} km`);
console.log(`총 주행거리: ${car.getTotalMove()} km`);