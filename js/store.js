const { observable, action, autorun } = require('mobx');



// class Store {
//      @observable count = 0;
//     @action add () {
//         this.count = ++this.count;
//     }
// }
// const mstore = new Store();


var mstore =observable({
	 count:[
       {name:'kinsliy'}
	 ],
	 add(){
	 	 this.count[0].name='hello'
	 }
	
})





export default mstore;