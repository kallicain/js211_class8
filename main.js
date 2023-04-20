let animals = [ 
 { 
  type: 'dog',
  breed: 'husky',
  sound: 'bark',
  color: 'black'
 },
 {
  type: 'cat',
  breed: 'shorthaired',
  sound: 'meow',
  color: 'orange',
 },
]

animals.forEach((animal) => {
  console.log(`I own a ${animal.type}`)
});