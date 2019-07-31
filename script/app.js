var bookNames = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8', 'book9', 'book10'];
const div = document.createElement("div");
document.body.appendChild(div);
div.classList.add("box");
const h1 = document.createElement("h1");
div.appendChild(h1);
h1.innerHTML = "Library"

function List(Name) {

    var key = Object.keys(Name);
    key.forEach(item => {
        var h3 = document.createElement("h3");
        div.appendChild(h3);
        h3.innerHTML = books[item].title;

        const ul = document.createElement('ul');
        div.appendChild(ul);
        ul.classList.add("hidden");

        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = "Language is " + books[item].language;

        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = "Author is " + books[item].author;

        var li = document.createElement('li');
        ul.appendChild(li);
        const img = document.createElement('img');
        li.appendChild(img);
        img.setAttribute('src', bookCover[item].src);
        img.setAttribute('alt', 'book-image');
        img.classList.add("img-thumbnail");

        h3.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('hidden');
        })
        h3.addEventListener('click', function () {
            var turnPageSound = new Audio('sounds/Page_Turn.mp3');
            turnPageSound.play();
        })

    });
}

var books = {

}
var bookCover = {

}
bookNames.forEach(item => {
    books[item] = {
        title: item,
        language: 'Turkish',
        author: 'Ceylan Baysal'
    };
    bookCover[item] = {
        src: 'images/images.jpeg'
    }
})

List(books);