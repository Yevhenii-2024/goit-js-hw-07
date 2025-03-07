const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').innerText}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`); 
});