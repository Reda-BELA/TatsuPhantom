function init(hero) {
    hero.setName("Brandon Breyer/BrightBurn Movie")
    hero.setTier(4);

    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addAbilities("fiskheroes:heat_vision", "fiskheroes:accelerated_perception", "fiskheroes:flight", "fiskheroes:cold_resistance", "fiskheroes:enhanced_reflexes", "fiskheroes:explosion_immunity", "fiskheroes:fire_immunity", "fiskheroes:heat_resistance", "fiskheroes:superhuman_durability", "fiskheroes:enhanced_reflexes")
    hero.addAttribute("PUNCH_DAMAGE", 17.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 3.5, 0);
    hero.addAttribute("SWORD_DAMAGE", -100, 0);
    hero.addAttribute("SPRINT_SPEED", 3.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 60, 0);

    hero.addKeyBind("HEAT_VISION", "key.heatVision", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    
    hero.setDefaultScale(0.82);
    

  }

  function isModifierEnabled(entity, modifier) {
    return modifier == "fiskheroes:eternium" || !entity.hasStatusEffect("fiskheroes:eternium");

}

  function hasProperty(entity, property) {
  return property == "BREATHE_UNDERWATER" || property == "BREATHE_SPACE";
}
