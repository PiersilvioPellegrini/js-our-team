const TeamOutput = document.querySelector(".teamOutPut");

// creo l'array di oggetti che rappresentano il team


const Team =[
/* 0 */ {
    name: "Wayne Barnett",
    jobTitle: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
},
/* 1 */ {
    name: "Angela Caroll",
    jobTitle: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
},
/* 2 */ {
    name: "Walter Gordon",
    jobTitle: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
},
/* 3 */ {
    name: "Angela Lopez",
    jobTitle: "Social Media Manager",  
    img: "angela-lopez-social-media-manager.jpg"
},
/* 4 */ {
    name: "Scott Estrada",
    jobTitle: "Developer",
    img: "scott-estrada-developer.jpg"
},
/* 5 */ {
    name: "Barbara Ramos",
    jobTitle: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
}

];

//ciclo sull'array di oggetti per stampare a schermo il team
for(let i=0; i<Team.length; i++) {
    const teamUser = Team[i];
    console.log(teamUser);
    TeamOutput.innerHTML += "<ul><li>" + teamUser.name + "</li><li> " + teamUser.jobTitle + "</li><li> " + teamUser.img + "</li></ul>";
}
