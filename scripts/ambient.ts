
let player: any = [
    {
        id: 0,
        name: "Mohammed Kudus",
        image: "./media/players/kudus.png",
        club: "AFC Ajax",
        pace: 96,
        shooting: 85,
        passing: 87,
        dribbling: 93,
        defense: 78,
        physical: 89
    },
    {
        id: 1,
        name: "Rafael Leao",
        image: "./media/players/rafael-leao.png",
        club: "AC Milan",
        pace: 92,
        shooting: 80,
        passing: 76,
        dribbling: 88,
        defense: 29,
        physical: 77
    },
    {
        id: 2,
        name: "Erling Haaland",
        image: "./media/players/erlinghaaland.png",
        club: "Manchester City FC",
        pace: 96,
        shooting: 96,
        passing: 80,
        dribbling: 88,
        defense: 60,
        physical: 94
    },
    {
        id: 3,
        name: "Lautaro Martinez",
        image: "./media/players/lautaromartinez.png",
        club: "FC Internazionale Milano",
        pace: 85,
        shooting: 87,
        passing: 75,
        dribbling: 88,
        defense: 50,
        physical: 86
    }
]

class Player {
    id: number
    name: string
    image: string
    club: string
    pace: number
    shooting: number
    passing: number
    dribbling: number
    defense: number
    physical: number

    constructor(id, name, image, club, pace, shooting, passing, dribbling, defense, physical) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.club = club;
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
        this.dribbling = dribbling;
        this.defense = defense;
        this.physical = physical;
    }

    setClubIcon() {
        return `./media/logos/${this.club.split(" ").join("")}.png`;
    }
}

let createPlayers = ({ id, name, image, club, pace, shooting, passing, dribbling, defense, physical}): any => {
    return new Player(id, name, image, club, pace, shooting, passing, dribbling, defense, physical);
}

let updatePlayerLayout = (): void => {
    // player one
    let playerOneImage: HTMLImageElement = document.querySelector("#player-one-image");
    let playerOneFirstName: HTMLTextAreaElement = document.querySelector("#player-one-first-name");
    let playerOneLastName: HTMLTextAreaElement = document.querySelector("#player-one-last-name");
    let playerOneClub: HTMLTextAreaElement = document.querySelector("#player-one-club-name");
    let playerOneClubImage: HTMLImageElement = document.querySelector("#club-one-image");
    let playerOnePace: HTMLTextAreaElement = document.querySelector("#player-one-pace");
    let playerOneShooting: HTMLTextAreaElement = document.querySelector("#player-one-shooting");
    let playerOnePassing: HTMLTextAreaElement = document.querySelector("#player-one-passing");
    let playerOneDribbling: HTMLTextAreaElement = document.querySelector("#player-one-dribbling");
    let playerOneDefense: HTMLTextAreaElement = document.querySelector("#player-one-defense");
    let playerOnePhysical: HTMLTextAreaElement = document.querySelector("#player-one-physical");
    // player two
    let playerTwoImage: HTMLImageElement = document.querySelector("#player-two-image");
    let playerTwoFirstName: HTMLTextAreaElement = document.querySelector("#player-two-first-name");
    let playerTwoLastName: HTMLTextAreaElement = document.querySelector("#player-two-last-name");
    let playerTwoClub = document.querySelector("#player-two-club-name") as HTMLTextAreaElement;
    let playerTwoClubImage = document.querySelector("#club-two-image") as HTMLImageElement;
    let playerTwoPace: HTMLTextAreaElement = document.querySelector("#player-two-pace");
    let playerTwoShooting: HTMLTextAreaElement = document.querySelector("#player-two-shooting");
    let playerTwoPassing: HTMLTextAreaElement = document.querySelector("#player-two-passing");
    let playerTwoDribbling: HTMLTextAreaElement = document.querySelector("#player-two-dribbling");
    let playerTwoDefense: HTMLTextAreaElement = document.querySelector("#player-two-defense");
    let playerTwoPhysical: HTMLTextAreaElement = document.querySelector("#player-two-physical");


    playerOneImage.src = p1.image;
    playerOneFirstName.innerHTML = p1.name.split(" ")[0];
    playerOneLastName.innerHTML = p1.name.split(" ")[1];
    playerOneClub.innerHTML = p1.club;
    playerOneClubImage.src = p1.setClubIcon();
    playerOnePace.innerHTML = p1.pace;
    playerOneShooting.innerHTML = p1.shooting;
    playerOnePassing.innerHTML = p1.passing;
    playerOneDribbling.innerHTML = p1.dribbling;
    playerOneDefense.innerHTML = p1.defense;
    playerOnePhysical.innerHTML = p1.physical;

    playerTwoImage.src = p2.image;
    playerTwoFirstName.innerHTML = p2.name.split(" ")[0];
    playerTwoLastName.innerHTML = p2.name.split(" ")[1];
    playerTwoClub.innerHTML = p2.club;
    playerTwoClubImage.src = p2.setClubIcon();
    playerTwoPace.innerHTML = p2.pace;
    playerTwoShooting.innerHTML = p2.shooting;
    playerTwoPassing.innerHTML = p2.passing;
    playerTwoDribbling.innerHTML = p2.dribbling;
    playerTwoDefense.innerHTML = p2.defense;
    playerTwoPhysical.innerHTML = p2.physical;
}

let p1 = createPlayers(player[3]);
let p2 = createPlayers(player[2]);

let updateDetailsBar = (): void => {
    // player one
    let pacePlayerOneBar: HTMLDivElement = document.querySelector("#player-one-pace-bar");
    let passingPlayerOneBar: HTMLDivElement = document.querySelector("#player-one-passing-bar");
    let shootingPlayerOneBar: HTMLDivElement = document.querySelector("#player-one-shooting-bar");
    let dribblingPlayerOneBar: HTMLDivElement = document.querySelector("#player-one-dribbling-bar");
    let defensePlayerOneBar: HTMLDivElement = document.querySelector("#player-one-defense-bar");
    let physicalPlayerOneBar: HTMLDivElement = document.querySelector("#player-one-physical-bar");

    // player two
    let pacePlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-pace-bar");
    let passingPlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-passing-bar");
    let shootingPlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-shooting-bar");
    let dribblingPlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-dribbling-bar");
    let defensePlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-defense-bar");
    let physicalPlayerTwoBar: HTMLDivElement = document.querySelector("#player-two-physical-bar");


    pacePlayerOneBar.style.width = `calc((100% * ${p1.pace}) / 160)`;
    passingPlayerOneBar.style.width = `calc((100% * ${p1.passing}) / 160)`;
    dribblingPlayerOneBar.style.width = `calc((100% * ${p1.dribbling}) / 160)`;
    shootingPlayerOneBar.style.width = `calc((100% * ${p1.shooting}) / 160)`;
    defensePlayerOneBar.style.width = `calc((100% * ${p1.defense}) / 160)`;
    physicalPlayerOneBar.style.width = `calc((100% * ${p1.physical}) / 160)`;

    pacePlayerTwoBar.style.width = `calc((100% * ${p2.pace}) / 160)`;
    passingPlayerTwoBar.style.width = `calc((100% * ${p2.passing}) / 160)`;
    dribblingPlayerTwoBar.style.width = `calc((100% * ${p2.dribbling}) / 160)`;
    shootingPlayerTwoBar.style.width = `calc((100% * ${p2.shooting}) / 160)`;
    defensePlayerTwoBar.style.width = `calc((100% * ${p2.defense}) / 160)`;
    physicalPlayerTwoBar.style.width = `calc((100% * ${p2.physical}) / 160)`;
}

updateDetailsBar();
updatePlayerLayout();
