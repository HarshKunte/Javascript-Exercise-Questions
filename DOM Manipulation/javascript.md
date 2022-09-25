# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

### Solution
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Harsh Kunte"

document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I write code"



2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Solution

let arr = [];
let list = document.querySelectorAll(".as-imagegrid-item-title");
for (let name of list) {
    arr.push(name.innerText);
}

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

### Solution

let parent = document.querySelector(".accordion-homepage");
let newItem = document.createElement("h3");
newItem.innerHTML = "My New FAQ";
let section = document.createElement("section");
section.classList.add("parent")

section.appendChild(newItem);
parent.appendChild(section);

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png)

### Solution

document.querySelector(".customer-support .one-tel-number").innerText = "+91 6366256689" 

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./Pic9.png)

### Solution

let anchor = document.querySelector('.diwali-deals-product-sale-btn')

document.querySelector('.diwali-deals-product-sale-pro').removeChild(anchor)

let new_anchor = document.createElement('a')

new_anchor.classList.add('diwali-deals-product-sale-btn')

new_anchor.innerText = "Checkout";

document.querySelector('.diwali-deals-product-sale-pro').appendChild(new_anchor)

​



6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

### Solution

let searchBox = document.querySelector('.searchinput___19uW0')
searchBox.addEventListener('mouseover',()=>{
  searchBox.style.backgroundColor = 'red'
}) 

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

### Solution

let langs = document.querySelectorAll('#SIvCob a');
let newlangs = [];
for(var i=0; i< langs.length; i++){
  if(i%2!=0){
   newlangs.push(langs[i])
  }
}
let langsDiv = document.querySelector('#SIvCob') 
for(let j=0; j<langs.length;j++){
  langsDiv.removeChild(langs[j])
} 
for(let j=0; j<newlangs.length;j++){
  langsDiv.appendChild(newlangs[j])
} 