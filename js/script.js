/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Two global variables declared
const studentList = document.querySelectorAll('.student-item');
const perPage = 10;



/*** 
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
         //uses startIndex and endIndex as a reference for which students to show on the page
         if (i >= startIndex && i <= endIndex) {
            list[i].style.display = 'block';
         } else {
            //if not in the index range at the time of the loop, do not show names
            list[i].style.display = 'none';
         }
      }
}
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
   const pagesNeeded = Math.ceil(list.length / perPage);
   //create a div and give it the "pagination" class and appends it to the page
   //creates a ul and appends it to the div
   const page = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   const ul = document.createElement('ul');
   page.appendChild(div);
   div.appendChild(ul);

      //Use a loop to determine pages needed
      for (let i = 0; i < pagesNeeded.length; i ++) {
         let li = document.createElement('li');
         let link = document.createElement('a');
         // add active class to first link
         if (i === 1) {
            link.className = 'active';
         }
         link.href = "#";
         link.textContent = i;

         //append the link to the list and eventually the div to the page parent element
         li.appendChild(link);
         ul.appendChild(li);
         div.appendChild(ul);
         page.appendChild(div);

         // create eventListener for anchor tags
         page.addEventListener('click', (event) => {
            if (event.target.tagName = 'A')
            for (let j = 0; j < event.target.length; j ++) {
               event.target.className === 'active';
            }
            //showPage function called passing studentList and the j index
            showPage(studentList, j);
         });
      }
}
//call functions
showPage(studentList, 1);
appendPageLinks(studentList);
// Remember to delete the comments that came with this file, and replace them with your own code comments.