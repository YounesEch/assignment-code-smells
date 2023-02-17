/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */
  
  function getTotalDistance (jumpings: number[]): number {
    const totalDistance=jumpings.reduce(
      (jumpDistanceSoFar, currentJump) =>
        jumpDistanceSoFar + currentJump,
      0
    );
    return totalDistance;
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: true,
      public passed: true
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
    let passed = true;
    if (student.name === "'Younes'") {
      passed = student.handedInOnTime;
    }
  
    if (passed) {
      return "VG";
    } else {
      return "IG";
    }
  }
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
     
  class temp {
    constructor(
      public city: string,
      public date: Date,
      public temperature: number
    ){}
  }
  
  function averageWeeklyTemperature(temperatures: temp[]): number {
  let weeklyTemperature = 0;
  const MILLISECONDS_IN_A_WEEK = 7 * 24 * 60 * 60 * 1000;
  const ONE_WEEK_IN_DAYS = 7;

  for (const temp of temperatures) {
    if (
      temp.city === "Stockholm" &&
      temp.date.getTime() > weeklyTemperature - MILLISECONDS_IN_A_WEEK
    ) {
      weeklyTemperature += temp.temperature;
    }
  }
    return weeklyTemperature / ONE_WEEK_IN_DAYS;
  }
/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

  interface showProduct {
    name: string;
    price: number;
    amount: number;
    description: string;
    image: string;
    parent: HTMLElement;
  }
  
  function createProduct(showProduct: showProduct, parent: HTMLDivElement) {
    const container = document.createElement("div");
    createName(showProduct, container);
    createPrice(showProduct, container);
    createImg(showProduct, container);
  
    parent.appendChild(container);  
  }
  
  function createName(showProduct: showProduct, container: HTMLDivElement) {
    const titletag = document.createElement("h4");
    titletag.innerHTML = showProduct.name;
    container.appendChild(titletag);
  
    return titletag;
  }
  
  function createPrice(showProduct: showProduct, container: HTMLDivElement) {
    const priceOnProduct = document.createElement("strong");
    priceOnProduct.innerHTML = showProduct.price.toString();
    container.appendChild(priceOnProduct);
  
    return priceOnProduct;
  }
  
  function createImg(showProduct: showProduct, container: HTMLDivElement) {
    const productImg = document.createElement("img");
    productImg.innerHTML = showProduct.image;
    container.appendChild(productImg);
  
    return productImg;
  }

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  const studentPassed = document.querySelector("ul#passedstudents");
  const studetFailed = document.querySelector("ul#failedstudents");
  const container = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  container.appendChild(checkbox);
for (const student of students) {
  if (student.handedInOnTime) {
    studentPassed?.appendChild(container);
  } else {
    studetFailed?.appendChild(container);
  }
}}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  const text : string[] = ["Lorem", "ipsum", "dolar", "sit", "amet"];
  return text.join('');
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/
class User {
  constructor(
    public name: string, 
    public birthday: Date, 
    public email: string, 
    public password: string
    ){}
}

function createUser( user: User)  {
  // Validation
  const universal_coordinated_time = 1970;
  const minimum_age = 20;
  const ageDiff = Date.now() - user.birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - universal_coordinated_time);

  if (userAge >= minimum_age) {
    return "Ditt konto har skapats!"
  } else {
    return "Du är under 20 år";
  }
}
