
const book = [
    {
        img: "https://sachtienganhhanoi.com/wp-content/uploads/2019/10/Pages-from-Pages-from-Get-Ready-for-IELTS-Listening-Pre-Intermediate-A2-RED.jpg",
        name: "Get reading for ILTES listening",
        price: "99000",

    },
    {
        img: "https://ieltstolinh.vn/wp-content/uploads/2016/06/Destination.jpg",
        name: "Destination Grammar-for grammar exercises",
        price: "99000",

    },
    {
        img: "https://i.ytimg.com/vi/5GnVDiM8P-A/maxresdefault.jpg",
        name: "Grammar full information",
        price: "99000",

    },
    {
        img: "https://smartprogress.do/uploadImages/000491450.jpg",
        name: "Paul Natin for vocebular",
        price: "99000",
    },
  
];

const container = document.getElementById("bookshop");

const setall = (obj) => {
    console.log(obj);
    console.log(obj.filter);

    const newBook = obj.book.filter((all, index) => {
        console.log(index + 1 + ") " + all.name.indexOf(obj.filter));
        if (all.name.toLowerCase().indexOf(obj.filter.toLowerCase()) != -1)
            return true;
        else return false;
    });

    console.log(newBook);

    container.innerHTML = "";
    newBook.map((all, index) => {
        const item = document.createElement("div");
        item.className = "col-sm-6 col-md-4 col-lg-3";
        item.innerHTML = `
                   <div class="all">
                   <img src="${all.img}" alt="">
                   <p>${all.name}</p>
                   <h6><b>${all.price}</b></h6>
                   </div>

    `;

        container.appendChild(item);
    });
};
setall({ book: book, filter: "" });


