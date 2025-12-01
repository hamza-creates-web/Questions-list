// so here we have 2 methods to do this thing i-e..
// 1- Traversing the DOM
// 2- Selecting the selectors inside the element..

// Traversing the DOM..
// select the buttons class...
const buttons = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question')
// now as we have the 2 buttons so we need the foreach method to iterate these buttons..
buttons.forEach(function(p)
{
  // now we have individual buttons so we can add the event listener to it...
  p.addEventListener('click',function(e)
{
  // firsly we need to check which element we are tageting so we can see this using console...
  const final= e.currentTarget.parentElement.parentElement;
  // here we select the right class just add the funtionality into it..
  // now we need to add the toggle to the final variable...
  questions.forEach(function(item){
    if(item!==final)
    {
      item.classList.remove('show-text')
    }
  })

  final.classList.toggle('show-text');
}) 
})
// so here you can do by using the both ways.......!




// now using the selecting the selectors inside the elements...
// // firstly selects the actual section...i-e question...
// // const a = document.querySelectorAll('.question');
// a.forEach(function(question)
// {
//   const b = question.querySelector('.question-btn');
//   b.addEventListener('click',function()
// {
//   a.forEach(function(item)
//   {
//   // now we can add the functionality of the closing of the other section when others are open..
//   if(item!==question)
//   {
//     item.classList.remove('show-text')
//   }
// });
  

//   // here we can see that the functionality works
//   question.classList.toggle('show-text')
// })
// })
