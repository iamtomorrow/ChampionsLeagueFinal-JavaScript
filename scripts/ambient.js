var player = [
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
];
var Player = /** @class */ (function () {
    function Player(id, name, image, club, pace, shooting, passing, dribbling, defense, physical) {
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
    Player.prototype.setClubIcon = function () {
        return "./media/logos/".concat(this.club.split(" ").join(""), ".png");
    };
    return Player;
}());
var createPlayers = function (_a) {
    var id = _a.id, name = _a.name, image = _a.image, club = _a.club, pace = _a.pace, shooting = _a.shooting, passing = _a.passing, dribbling = _a.dribbling, defense = _a.defense, physical = _a.physical;
    return new Player(id, name, image, club, pace, shooting, passing, dribbling, defense, physical);
};
var updatePlayerLayout = function () {
    // player one
    var playerOneImage = document.querySelector("#player-one-image");
    var playerOneFirstName = document.querySelector("#player-one-first-name");
    var playerOneLastName = document.querySelector("#player-one-last-name");
    var playerOneClub = document.querySelector("#player-one-club-name");
    var playerOneClubImage = document.querySelector("#club-one-image");
    var playerOnePace = document.querySelector("#player-one-pace");
    var playerOneShooting = document.querySelector("#player-one-shooting");
    var playerOnePassing = document.querySelector("#player-one-passing");
    var playerOneDribbling = document.querySelector("#player-one-dribbling");
    var playerOneDefense = document.querySelector("#player-one-defense");
    var playerOnePhysical = document.querySelector("#player-one-physical");
    // player two
    var playerTwoImage = document.querySelector("#player-two-image");
    var playerTwoFirstName = document.querySelector("#player-two-first-name");
    var playerTwoLastName = document.querySelector("#player-two-last-name");
    var playerTwoClub = document.querySelector("#player-two-club-name");
    var playerTwoClubImage = document.querySelector("#club-two-image");
    var playerTwoPace = document.querySelector("#player-two-pace");
    var playerTwoShooting = document.querySelector("#player-two-shooting");
    var playerTwoPassing = document.querySelector("#player-two-passing");
    var playerTwoDribbling = document.querySelector("#player-two-dribbling");
    var playerTwoDefense = document.querySelector("#player-two-defense");
    var playerTwoPhysical = document.querySelector("#player-two-physical");
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
};
var p1 = createPlayers(player[3]);
var p2 = createPlayers(player[2]);
var updateDetailsBar = function () {
    // player one
    var pacePlayerOneBar = document.querySelector("#player-one-pace-bar");
    var passingPlayerOneBar = document.querySelector("#player-one-passing-bar");
    var shootingPlayerOneBar = document.querySelector("#player-one-shooting-bar");
    var dribblingPlayerOneBar = document.querySelector("#player-one-dribbling-bar");
    var defensePlayerOneBar = document.querySelector("#player-one-defense-bar");
    var physicalPlayerOneBar = document.querySelector("#player-one-physical-bar");
    // player two
    var pacePlayerTwoBar = document.querySelector("#player-two-pace-bar");
    var passingPlayerTwoBar = document.querySelector("#player-two-passing-bar");
    var shootingPlayerTwoBar = document.querySelector("#player-two-shooting-bar");
    var dribblingPlayerTwoBar = document.querySelector("#player-two-dribbling-bar");
    var defensePlayerTwoBar = document.querySelector("#player-two-defense-bar");
    var physicalPlayerTwoBar = document.querySelector("#player-two-physical-bar");
    pacePlayerOneBar.style.width = "calc((100% * ".concat(p1.pace, ") / 160)");
    passingPlayerOneBar.style.width = "calc((100% * ".concat(p1.passing, ") / 160)");
    dribblingPlayerOneBar.style.width = "calc((100% * ".concat(p1.dribbling, ") / 160)");
    shootingPlayerOneBar.style.width = "calc((100% * ".concat(p1.shooting, ") / 160)");
    defensePlayerOneBar.style.width = "calc((100% * ".concat(p1.defense, ") / 160)");
    physicalPlayerOneBar.style.width = "calc((100% * ".concat(p1.physical, ") / 160)");
    pacePlayerTwoBar.style.width = "calc((100% * ".concat(p2.pace, ") / 160)");
    passingPlayerTwoBar.style.width = "calc((100% * ".concat(p2.passing, ") / 160)");
    dribblingPlayerTwoBar.style.width = "calc((100% * ".concat(p2.dribbling, ") / 160)");
    shootingPlayerTwoBar.style.width = "calc((100% * ".concat(p2.shooting, ") / 160)");
    defensePlayerTwoBar.style.width = "calc((100% * ".concat(p2.defense, ") / 160)");
    physicalPlayerTwoBar.style.width = "calc((100% * ".concat(p2.physical, ") / 160)");
};
updateDetailsBar();
updatePlayerLayout();
