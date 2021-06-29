
const book = [
    {
        img: "https://sachtienganhhanoi.com/wp-content/uploads/2019/10/Pages-from-Pages-from-Get-Ready-for-IELTS-Listening-Pre-Intermediate-A2-RED.jpg",
        nomi: "",
        price: "99000",

    },
    {
        img: "https://ieltstolinh.vn/wp-content/uploads/2016/06/Destination.jpg",
        nomi: "",
        price: "99000",

    },
    {
        img: "https://i.ytimg.com/vi/5GnVDiM8P-A/maxresdefault.jpg",
        nomi: "",
        price: "99000",

    },
    {
        img: "https://smartprogress.do/uploadImages/000491450.jpg",
        nomi: "",
        price: "99000",
    },
  
];


const container = document.getElementById("bookshop");

const setall = (obj) => {
   
    const newBook = obj.book.filter((all, index) => {
        // console.log(index + 1 + ") " + all.nomi.indexOf(obj.filter));
        if (all.nomi.toLowerCase().indexOf(obj.filter.toLowerCase()) != -1)
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.${all.name}</p>
                  <h6><b>${all.price}</b></h6>
                  </div>
    `;

        container.appendChild(item);
    });
};

