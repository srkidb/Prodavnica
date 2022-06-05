const jelaNaRostilju = [
  {
    ime: "Ćevapi 10 komada",
    cena: 540.0,
    img: "https://i.pinimg.com/564x/44/bd/05/44bd056e0c8afc11d0621309a5bdce2f.jpg",
    portion: "300g",
  },
  {
    ime: "Ćevapi 5 komada",
    cena: 340.0,
    img: "https://i.pinimg.com/564x/44/bd/05/44bd056e0c8afc11d0621309a5bdce2f.jpg",
    portion: "150g",
  },
  {
    ime: "Pljeskavica mala porcija",
    cena: 360.0,
    img: "https://i.pinimg.com/736x/f6/6a/80/f66a8001e8e76fee2c66450a5a994f35.jpg",
    portion: "150g",
  },
  {
    ime: "Pljeskavica velika porcija",
    cena: 630.0,
    img: "https://i.pinimg.com/736x/f6/6a/80/f66a8001e8e76fee2c66450a5a994f35.jpg",
    portion: "300g",
  },
  {
    ime: "Pileći file",
    cena: 440.0,
    img: "https://i.pinimg.com/564x/c9/39/1c/c9391c4b409f830da0d6e9679b3643c8.jpg",
    portion: "250g",
  },
  {
    ime: "Pileće krpice",
    cena: 470.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/t6r2p6nvvsunjxj3lwk4",
    portion: "250g",
  },
  {
    ime: "Pileće krpice na kajmaku",
    cena: 570.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562421",
    portion: "250g",
  },
  {
    ime: "Pikantni uštipci na kajmaku",
    cena: 790.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/u9yh9j8vn0dfewvrvrcu",
    portion: "250g",
  },
  {
    ime: "Biftek",
    cena: 1490.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/x5wbq3qmiiqgilozqqzw",
    portion: "250g",
  },
];

const salate = [
  {
    ime: "Kupus Salata",
    cena: 170.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562432",
    portion: "200g",
  },
  {
    ime: "Paradajz sa sirom",
    cena: 270.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562451",
    portion: "250g",
  },
  {
    ime: "Krastavac salata",
    cena: 230.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562416",
    portion: "200",
  },
  {
    ime: "Srpska salata",
    cena: 250.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562444",
    portion: "250g",
  },
  {
    ime: "Šopska salata",
    cena: 270.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562391",
    portion: "300g",
  },
  {
    ime: "Bašta salata",
    cena: 250.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562364",
    portion: "300g",
  },
  {
    ime: "Kiseli kupus",
    cena: 230.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/4403562466",
    portion: "250g",
  },
];

const corbe = [
  {
    ime: "Teleća čorba",
    cena: 300.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/products/yqybt9bz3nhxx8rzx3gz",
    portion: "500g",
  },
  {
    ime: "Teleća čorba",
    cena: 300.0,
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/products/xuirj4phyw2y6bj3kht5",
    portion: "500g",
  },
];

const useCart = () => {
  const state = {
    cartItems: [],
  };

  return {
    state: state,
    addItemToCart: (item) => state.cartItems.push(item),
    // removeItemFromCart:
    emptyCart: () => state.cartItems = []
  };
};

const myCart = useCart();

function renderFoodGroup(list) {
  for (let i in list) {
    containerProducts.push(list[i]);
    const divTextContainer = document.createElement("div");
    divTextContainer.setAttribute("id", `text-container${i}`);
    divTextContainer.setAttribute("class", "col-6");

    const divNazivProizvoda = document.createElement("div");
    divNazivProizvoda.setAttribute("id", `naziv-proizvoda${i}`);
    divNazivProizvoda.setAttribute("class", "col-12 naziv");
    const imeProizvoda = document.createTextNode("Naziv: " + list[i].ime);
    divNazivProizvoda.appendChild(imeProizvoda);
    divTextContainer.appendChild(divNazivProizvoda);

    const divCenaProizvoda = document.createElement("div");
    divCenaProizvoda.setAttribute("id", `cena-proizvoda${i}`);
    divCenaProizvoda.setAttribute("class", "col-12");
    const cena = document.createTextNode("Cena: " + list[i].cena);
    divCenaProizvoda.appendChild(cena);
    divTextContainer.appendChild(divCenaProizvoda);

    const divPorcija = document.createElement("div");
    divPorcija.setAttribute("id", `cena-proizvoda${i}`);
    divPorcija.setAttribute("class", "col-12");
    const porcija = document.createTextNode("Porcija: " + list[i].portion);
    divPorcija.appendChild(porcija);
    divTextContainer.appendChild(divPorcija);

    const divButton = document.createElement("div");
    divButton.setAttribute("id", `button-proizvod${i}`);
    divPorcija.setAttribute("class", "col-12");
    const button = document.createElement("button");
    button.textContent = "Dodaj u korpu";
    button.setAttribute("id", `${i}`);
    button.addEventListener("click", () => {
      myCart.addItemToCart(list[i]);
      renderCart();
    });
    // button.setAttribute("onclick", `addItemToCart(${list[i]})`);
    divButton.appendChild(button);
    divTextContainer.appendChild(divButton);

    midJela.appendChild(divTextContainer);

    const divImageContainer = document.createElement("div");
    divImageContainer.setAttribute("id", `div-img${i}`);
    divImageContainer.setAttribute("class", "col-6");

    const img = document.createElement("img");
    img.setAttribute("id", "jela-img");
    img.setAttribute("class", "col-12");
    img.src = list[i].img;
    img.alt = list[i].ime;
    divImageContainer.appendChild(img);
    midJela.appendChild(divImageContainer);
  }
}

const renderCart = () => {
  const cartWrap = document.getElementById("product-container");

  cartWrap.innerHTML = ""
  myCart.state.cartItems.map((item) => {
    cartWrap.appendChild(document.createTextNode("Cena: " + item.cena));
  });

//   Dovrsi funkciju render CART
};

const container = document.getElementById("product-container");
container.setAttribute("class", "row");
let containerProducts = [];
let totalCena = 0;
let kolicina = 0;
const korpaDiv = document.createElement("div");

const dugmePlati = document.getElementById("plati");
dugmePlati.addEventListener("click", () => {
  if (container.innerHTML === "") {
    alert("Korpa je prazna, molimo dodajte neki proizvod!");
  } else {
    alert("Uspesno izvrseno placanje");
    container.innerHTML = "";
    while (containerProducts > 0) {
      containerProducts.pop();
    }
  }
  totalCena = 0;
  kolicina = 0;
});

const dugmeOtkazi = document.getElementById("otkazi");
dugmeOtkazi.addEventListener("click", () => {
    myCart.emptyCart();
    renderCart();
});

const jelaSaRostilja = document.getElementById("jela-sa-rostilja");
const midJela = document.getElementById("lista-sa-slikama");

jelaSaRostilja.addEventListener("click", () => {
  containerProducts = [];
  midJela.innerHTML = "";
  midJela.setAttribute("class", "row col-6");

  renderFoodGroup(jelaNaRostilju);
});

const jelaCorbe = document.getElementById("corbe");
jelaCorbe.addEventListener("click", () => {
  containerProducts = [];
  midJela.innerHTML = "";
  midJela.setAttribute("class", "row col-6");

  renderFoodGroup(corbe);
});
//container

const jelaSalate = document.getElementById("salate");
jelaSalate.addEventListener("click", () => {
  containerProducts = [];
  midJela.innerHTML = "";
  midJela.setAttribute("class", "row col-6");

  renderFoodGroup(salate);
});

const clickCount = 0;
const kliknutoDugme = 0;

function dodajUKorpu() {
  const kliknutoDugme = event.target.id;

  korpaDiv.setAttribute("class", "col-12");

  const divNazivUKorpi = document.createElement("div");
  divNazivUKorpi.setAttribute("class", "col-12");
  const nazivUKorpi = containerProducts[kliknutoDugme].ime;
  divNazivUKorpi.appendChild(document.createTextNode("Naziv: " + nazivUKorpi));
  korpaDiv.appendChild(divNazivUKorpi);

  const divCenaUKorpi = document.createElement("div");
  divCenaUKorpi.setAttribute("class", "col-12 cena-proizvoda");
  const cenaUKorpi = containerProducts[kliknutoDugme].cena;
  divCenaUKorpi.appendChild(document.createTextNode("Cena: " + cenaUKorpi));
  korpaDiv.appendChild(divCenaUKorpi);
  ////////////////////////////////////////////////////////////////////////
  const divKolicinaUKorpi = document.createElement("div");
  divKolicinaUKorpi.setAttribute("class", "col-12");
  divKolicinaUKorpi.innerHTML = "Količina: ";

  const selectSubject = document.createElement("select");
  selectSubject.setAttribute("id", "subject");
  selectSubject.setAttribute("name", "subject");

  for (let i = 1; i <= 5; i++) {
    const selectOption = document.createElement("option");
    selectOption.setAttribute("value", `${i}`);
    selectOption.setAttribute("onclick", "priceChange()");
    selectOption.innerHTML = i;
    selectSubject.appendChild(selectOption);
  }
  divKolicinaUKorpi.appendChild(selectSubject);
  korpaDiv.appendChild(divKolicinaUKorpi);
  container.appendChild(korpaDiv);
  console.log(containerProducts);
}

function priceChange() {
  const divTotalPrice = document.createElement("div");

  let allOptions = document.getElementById("subject");
  let selectedOption = allOptions.options[allOptions.selectedIndex].value;
  let cenaSelected = containerProducts[0].cena;
  console.log(cenaSelected);

  divTotalPrice.setAttribute("class", "col-12");
  totalCena += cenaSelected * selectedOption;
  divTotalPrice.appendChild(
    document.createTextNode("Total Cena: " + totalCena)
  );
  console.log(divTotalPrice);
  korpaDiv.appendChild(divTotalPrice);
}
