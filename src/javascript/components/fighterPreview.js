import { createElement } from '../helpers/domHelper';


export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  const fighterInfoName = createElement({
    tagName: 'div',
    className: 'fighter-preview__root fighter-preview__root_name'
  });
  fighterInfoName.innerHTML = 'name: ' + fighter.name; 
  const fighterInfoHealth = createElement({
    tagName: 'div',
    className: 'fighter-preview__root fighter-preview__root_health'
  });
  fighterInfoHealth.innerHTML = 'health: ' + fighter.health;
  const fighterInfoAttack = createElement({
    tagName: 'div',
    className: 'fighter-preview__root fighter-preview__root_attack'
  });
  fighterInfoAttack.innerHTML = 'attack: ' + fighter.attack;     
  const fighterInfoDefense = createElement({
    tagName: 'div',
    className: 'fighter-preview__root fighter-preview__root_defense'
  });
  fighterInfoDefense.innerHTML = 'defense: ' + fighter.defense;   

  const fighterImage = createFighterImage(fighter);

  fighterElement.appendChild(fighterImage);
  fighterElement.appendChild(fighterInfoName);
  fighterElement.appendChild(fighterInfoAttack);  
  fighterElement.appendChild(fighterInfoHealth);  
  fighterElement.appendChild(fighterInfoDefense);

  console.log('CreateFighterPreview' + JSON.stringify(fighter));
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
