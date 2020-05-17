//hide preloader
window.addEventListener('load',() => document.querySelector('.preloader')
.classList.add('hidePreloader'));

const CreateCars = (() => {
	//car data
	const cars = [];
	//car class
	class Car{
		constructor(make,country,img,special,model,price,type,trans,gas){
			this.make = make;
			this.country = country;
			this.img = img;
			this.special = special;
			this.model = model;
			this.price = price;
			this.type = type;
			this.trans = trans;
			this.gas = gas;
		}
	}
	//car creation function
	function makeCar(make,country,img = 'IMG/1.jpeg',special = true,model = 'new model',price = 10000,type = 'sedan',trans= 'automatic',gas = '50'){
		const car = new Car(make,country,img,special,model,price,type,trans,gas);
		cars.push(car)
	}
	//produce cars
	function produceCars(){
		makeCar('chevy','amrican','IMG/2.jpeg',true);
		makeCar('mercedes','german','IMG/3.jpeg',true);
		makeCar('bmw','german','IMG/4.jpeg',true);
		makeCar('mercedes','amrican','IMG/5.jpeg',true);
		makeCar('bmw','german','IMG/6.jpeg',undefined,'other model');
		makeCar('bmw','german','IMG/7.jpeg',false,'some model');
		makeCar('mercedes','amrican','IMG/8.jpeg',false);
		makeCar('chevy','german','IMG/9.jpeg',false);
		makeCar('chevy','german','IMG/10.jpeg',false);
		
	}
	produceCars();
	//console.log(cars);
	//special Cras
	const specialCars = cars.filter(car => car.special ===true)
	//console.log(specialCars);
	
	return{
		cars,
		specialCars
	}
})();
	const DisplaySpecialCars = ((CreateCars) => {
		const specialCars = CreateCars.specialCars;
		//console.log(specialCars);
		
		const info = document.querySelector('.featured-info');
		//Document Loaded Event
		document.addEventListener('DOMContentLoaded', () => {
			info.innerHTML = '';
			
			let data = '';
			
			specialCars.forEach(item => {
				data += `<!--Single Item-->
						<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
			<span data-img="${item.img}" class="featured-icon mr-2">
								<i class="fas fa-car"></i>
							</span>
							<h5 class="font-weight-bold mx-1">${item.make}</h5>
							<h5 class="mx-1">${item.model}</h5>
						</div>
						<!--End-->`
			})
			info.innerHTML = data;
		})
		//change img
		info.addEventListener('click',(event) => {
			if(event.target.parentElement.classList.contains('featured-icon')) {
				const img = event.target.parentElement.dataset.img;
				document.querySelector('.featured-photo').src = img;
			}
		})
	})(CreateCars);
	
	const DisplayCars = ((CreateCars) => {
		//all cars
		const cars = CreateCars.cars;
		//car container
		const inventory = document.querySelector('.inventory-container');
		//content loaded
		document.addEventListener('DOMContentLoaded',() => {
			inventory.innerHTML = '';
			let output = '';
			cars.forEach(car => {
				output += `<!--Single Car-->
					<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
						<div class="card car-card">
							<img src="${car.img}" class="card-img-top car-img" alt="">
							<!--Card Body-->
							<div class="card-body">
								<div class="car-info d-flex justify-content-between">
								<!--First Flex Child-->
									<div class="car-text text-uppercase">
										<h6 class="font-weight-bold">${car.make}</h6>
										<h6>${car.model}</h6>
									</div>
								<!--Second Flex Child-->
									<h5 class="car-value align-self-center py-2 px-3">$<span class="car-price">${car.price}</span></h5>
								</div>
							</div>
							<!--End Card Body-->
							<div class="card-footer text-capitalize d-flex justify-content-between">
								<p><span><i class="fas fa-car"></i></span>${car.type}</p>
								<p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
								<p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
							</div>
						</div>
					</div>
				<!--End-->` 
			})
			inventory.innerHTML = output;
		})
	})(CreateCars);
	//Filters Cars
	const FilterCars = (() => {
		const filter = document.querySelectorAll('.filter-btn');
		//console.log(filter);
		filter.forEach((btn) => {
			btn.addEventListener('click', (event) => {
				const value = event.target.dataset.filter;
				const singleCar = document.querySelectorAll('.single-car');
				
				singleCar.forEach(car => {
					if(value === 'all'){
						car.style.display = 'block'
					}else{
						(!car.classList.contains(value)) ? car.style.display = 'none' : car.style.display = 'block';
					}
				})
			})
		})
	})();