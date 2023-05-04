const heroes = [
    {
        name: 'Jerms',
        type: 'dwarf',
        damage: 5,
        health: 100,
        gold: 0
    },
    {
        name: 'Mick',
        type: 'elf',
        damage: 10,
        health: 100,
        gold: 0
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    goldValue: 0,
    damage: 5,
    level: 1
}

let money = 0
let bossesDefeated = 0

function lvlUpBoss(){
    if (boss.health == 0){
        boss.maxHealth += 50
        boss.health = boss.maxHealth
        console.log(boss.health, boss.maxHealth)
        boss.damage += 5
        boss.level += 1
        bossesDefeated += 1
        boss.goldValue += 20
        heroes.forEach(h => {
            h.gold += boss.goldValue
        });
    }
    document.getElementById('bosses-defeated').innerText = bossesDefeated
    drawBossHealth()
    drawHeroGold()
}


function attackBoss(){
    let = totalDmg = 0
    heroes.forEach(h => totalDmg += h.damage)
    boss.health -= totalDmg
    if(boss.health <= 0){
        boss.health = 0
        lvlUpBoss()
    }
    drawBossHealth()
}

function attackHeroes(){
    heroes.forEach(h => {
        h.health -= boss.damage
    })
    heroes.forEach(h => {
        if (h.health <= 0){
            h.health = 0
        }
    })
    drawHeroHealth()
}

function drawBossHealth(){
    document.getElementById('boss-health').innerText = boss.health
    document.getElementById('boss-maxHealth').innerText = boss.maxHealth
}
    
function drawHeroHealth(){
    heroes.forEach(h => {
        document.getElementById(h.name).innerText = h.health
    })
}

function buyPotion(heroName){
    heroes.forEach(h => {
        h.name == heroName
        if(h.gold < 20){
            window.alert("You don't have enough money!")
        }
            else {
        h.gold -= 20
        h.health += 100
        if (h.health > 100) {
            h.health = 100
        }
            }
    });
    drawHeroHealth()
    drawHeroGold()
 
}

function drawHeroGold() {
    document.getElementById('hero1gold').innerText = heroes[0].gold
    document.getElementById('hero2gold').innerText = heroes[1].gold
}
function resetButton(){
    boss.health = 100;
    boss.maxHealth = 100;
    heroes.forEach(h => {
        h.health = 100;
        h.gold = 0;
    })
    bossesDefeated = 0
    boss.goldValue = 20
    boss.damage = 5
    drawBossHealth()
    drawHeroGold()
    drawHeroHealth()

}


setInterval(attackHeroes, 5000)