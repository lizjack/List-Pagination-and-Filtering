/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 

   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelector('.student-list');
const perPage = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
   let startIndex = (page * perPage) - perPage;
   let endIndex = page * perPage;
      for (let i = 0; i < list.length; i ++) {
         if (list[i] >= startIndex || list[i] <= endIndex) {
            //that item should be shown on the page
            list[i].style.display = '';
         } else {
            list[i].style.display = 'none';
         }
        // the page should show the item 
      }
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
   const pagesNeeded = list.length / 10;
   const page = document.querySelector('.page');
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   div.className = 'pagination';
   page.appendChild(div);
   div.appendChild(ul);
      for (let i = 0; i < pagesNeeded.length; i ++) {
         const li = document.createElement('li');
         const a = document.createElement('a');
         pagesNeeded[i].textContent += a;
         pagesNeeded[i].textContent += li;
         a.addEventListener('click', (event) => {
            if (event.target.tagName = 'A')
            showPage(WHATGOESHEREPAGESOMETHING);
            for (let j = 0; j < PAGINATIONSLINKS; j ++) {
               a.className !== 'active';
               event.className = 'active';
            }
         })
      }



   //a nested UL elemet containing one LI element for every 10 names in the list
   //you can divide list.length by max numver of items per page(10) to figure
   //out how many pages are needed, and use a loop that iterates
   // that many times to create the correct number of Li elements
}




// Remember to delete the comments that came with this file, and replace them with your own code comments.