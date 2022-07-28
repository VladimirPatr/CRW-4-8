'use strict';


const cart = {
	items: [],
	totalPrice: 0,
	count: 0,


	getTotalPrice(){
		return this.totalPrice;
	},
	add(nameProduct, priceProuct, countProduct = 1){
		const addProucts = {nameProduct, priceProuct, countProduct};
		this.items.push(addProucts);
		this.increaseCount();
		this.calculateItemPrice();	
	},
	increaseCount(plus = 0){
		this.count = (this.items.reduce((total, {countProduct})=> total + countProduct, 0) + plus);
	},
	calculateItemPrice(){
		// this.totalPrice += this.items[this.items.length-1].priceProuct * this.items[this.items.length-1].countProduct;
		 let price = this.items.map( node => node.priceProuct * node.countProduct);
		 this.totalPrice = price.reduce((sum, index)=> sum + index, 0)
	},
	clear(){
		this.items.length = 0;
		this.totalPrice = 0;
		this.count = 0;
	},
	print(){
		const itemsStr = JSON.stringify(this.items);
		console.log(
			`${itemsStr}   
             ${this.totalPrice}`)
	},

}

	cart.add('трусы', 500, 2)
	cart.add('шорты', 1000, 3)
	cart.add('шлепки', 1500, 2)
	cart.add('шапка', 400, 5)
	
	cart.print()
	


	






