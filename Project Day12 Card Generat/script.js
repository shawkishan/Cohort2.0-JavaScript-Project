let form = document.querySelector("form");
let username = document.querySelector("#name")
let desc = document.querySelector("#desc")
let imgurl = document.querySelector("#imgurl")
let cards = document.querySelector("#cards")

let userGenerator = {
    users: [],
    initial: function () {
        form.addEventListener("submit", this.starting.bind(this));
    },
    starting: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            desc: desc.value,
            imgurl: imgurl.value
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        cards.innerHTML = "";
        if (this.users.length === 0) {
            cards.innerHTML = "<h1>No card yet...</h1>";
            return;
        }
        this.users.forEach((user, idx) => {
            cards.innerHTML += `
            <div class="card" data-index="${idx}">
                <img src="${user.imgurl}"
                    alt="userImage">
                <div class="card__content">
                    <p class="card__title">${user.username}
                    </p>
                    <p class="card__description">${user.desc}</p>
                </div>
            </div>
            `;
        })
    }
}

userGenerator.initial();