import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    //console.log(firstFighter);
    // Auto fight
    let fighter1 = JSON.parse(JSON.stringify(firstFighter));
    let fighter2 = JSON.parse(JSON.stringify(secondFighter));
    let round = 0;
    while ( fighter1.health >0 && fighter2.health >0){
      if(Math.random() > 0.5) {
        fighter1.health = fighter1.health - getDamage(fighter2, fighter1);
      } else {
        fighter2.health =  fighter2.health - getDamage(fighter1, fighter2);
      };
      round++;
      console.log('round ' + round + ' 1: ' + fighter1.health + ' 2: '+ fighter2.health);
      
    }
    if (fighter1.health > 0 ) { 
      resolve(firstFighter);
    } else {
      resolve(secondFighter);
    }
    //resolve(firstFighter);
  });
}

export function getDamage(attacker, defender) {
  // return damage
  return Math.max(getHitPower(attacker) - getBlockPower(defender),0) ;
}

export function getHitPower(fighter) {
  // return hit power
  let criticalHitChance = 1 + Math.random();
  let attack = fighter.attack;
  let power = attack * criticalHitChance;

  return power;
}

export function getBlockPower(fighter) {
  // return block power
  let dodgeChance = 1 + Math.random();
  let defense = fighter.defense;
  let power = defense * dodgeChance;
  return power;
}
