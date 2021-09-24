function Person(name,yearOfBirth,job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

var button = document.querySelector('#verify');
var nameInput = document.querySelector('#name');
var birthInput = document.querySelector('#birth');
var jobInput = document.querySelector('#job');
var nameResult = document.querySelector('#nameResult')
var jobResult = document.querySelector('#jobResult')
var birthResult = document.querySelector('#birthResult')

button.addEventListener('click',function(){
  if(nameInput.value === "" || birthInput.value === "" || jobInput.value === ""){
    alert('Fill the blanks');
  }
  nameResult.innerHTML = new Person(nameInput.value,birthInput.value,jobInput.value).name;
  birthResult.innerHTML = new Person(nameInput.value,birthInput.value,jobInput.value).yearOfBirth;
  jobResult.innerHTML = new Person(nameInput.value,birthInput.value,jobInput.value).job;
})
1
