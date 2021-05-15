function init(hero) {
    hero.setName("Satoru Gojo/Jujutsu Kaisen")
    hero.setTier(6);

    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addAbilities("fiskheroes:accelerated_perception", "fiskheroes:flight", "fiskheroes:leaping", "fiskheroes:geokinesis", "fiskheroes:cold_resistance", "fiskheroes:enhanced_reflexes", "fiskheroes:explosion_immunity", "fiskheroes:fire_immunity", "fiskheroes:heat_resistance", "fiskheroes:superhuman_durability", "fiskheroes:enhanced_reflexes")
    hero.addAttribute("PUNCH_DAMAGE", 720.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 3.5, 0);
    hero.addAttribute("SWORD_DAMAGE", -900, 0);
    hero.addAttribute("SPRINT_SPEED", 4.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 6000, 0);

    hero.addKeyBind("GROUND_SMASH", "key.groundSmash", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("EARTHQUAKE", "key.earthquake", 3);
    hero.addKeyBind("SHIELD", "key.shield", 4);
    hero.addKeyBind("SPELL_MENU", "key.spellMenu", 5);
    
    hero.addAttributeProfile("OPEN", openProfile);
    hero.setAttributeProfile(getAttributeProfile);
    hero.setModifierEnabled(isModifierEnabled);
    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setHasProperty(hasProperty);
    hero.setOnToggleMask(onToggleMask);

}

function openProfile(profile) {
    profile.addAttribute("PUNCH_DAMAGE", 1000, 0);
    profile.addAttribute("JUMP_HEIGHT", 4.5, 0);
    profile.addAttribute("FALL_RESISTANCE", 6000, 1);
    profile.addAttribute("SPRINT_SPEED", 5.35, 0);
}

function hasProperty(entity, property) {
    return property == "MASK_TOGGLE";
}

function onToggleMask(entity, state) {
    if (state) {
        entity.playSound("fiskheroes:random.fire.on", 1.0, 1.0);
    }
    else {
        entity.playSound("fiskheroes:random.fire.off", 1.0, 1.0);
    }
}

function isModifierEnabled(entity, modifier) {
    switch (modifier) {
  case "fiskheroes:pyrokinesis":
      return entity.getData("fiskheroes:mask_open");
  default:
      return true;
  }
}

function getAttributeProfile(entity) {
  return entity.getData("fiskheroes:mask_open") ? "OPEN" : null;
}

  function hasProperty(entity, property) {
  return property == "BREATHE_UNDERWATER" || property == "BREATHE_SPACE";
}
