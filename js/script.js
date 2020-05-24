/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global variables declared
const studentList = document.querySelectorAll('.student-item');
const perPage = 10;
const page = document.querySelector(".page");

//create showPage function 
function showPage(list, page) {
   //determine which contacts should be on any given page
   let startIndex = (page * perPage) - perPage;
   let endIndex = (page * perPage) - 1;
      for (let i = 0; i < list.length; i ++) {
         if (i >= startIndex && i <= endIndex) {
            list[i].style.display = 'block';
         } else {
            //if not in the index range at the time of the loop, do not show names
            list[i].style.display = 'none';
         }
      }
};

function appendPageLinks(list) {
   const pagesNeeded = Math.ceil(list.length / perPage);
   //create a div and give it the "pagination" class and appends it to the page
   //creates a ul and appends it to the div
   const paginationDiv = document.createElement("div");
   paginationDiv.className = "pagination";
   const ul = document.createElement("ul");
   page.appendChild(paginationDiv);
   paginationDiv.appendChild(ul);


      //Use a loop to determine pages needed
      for (let i = 1; i < pagesNeeded + 1; i ++) {
         //create list and anchor and append to ul and li
         let li = document.createElement("li");
         let link = document.createElement("a");
         link.href = "#";
         link.innerHTML = i;
         ul.appendChild(li);
         li.appendChild(link);
            //add active class to first link
            if (i === 1) {
               link.className = "active";
            }
            li.appendChild(link);
            ul.appendChild(li);
      
         // create eventListener for anchor tags
         link.addEventListener('click', (event) => {
            const pageLinks = document.querySelectorAll('a');
            for (let j = 0; j < pageLinks.length; j ++) {
             //active class removed from all links
               pageLinks[j].classList.remove("active");           
           }
             //showPage function called
            showPage(studentList, i);
            //active class is added to link that was just clicked
            event.target.className = "active";
         });
      }
};



//call functions
showPage(studentList, 1);
appendPageLinks(studentList);