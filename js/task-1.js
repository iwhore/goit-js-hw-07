const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((categoryItem) => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elemnts: ${categoryElements.length}`);
});