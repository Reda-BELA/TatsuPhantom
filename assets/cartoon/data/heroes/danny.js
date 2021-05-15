function init(hero) {
    hero.setName("Danny Fenton/Original");
    hero.setTier(2);

    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addAbilities("fiskheroes:energy_projection", "fiskheroes:cryokinesis", "fiskheroes:intangibility", "fiskheroes:invisibility", "fiskheroes:flight", "fiskheroes:enhanced_reflexes", "fiskheroes:superhuman_durability");
    hero.addAttribute("PUNCH_DAMAGE", 12.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("SWORD_DAMAGE", -1, 0);
    hero.addAttribute("SPRINT_SPEED", 0.15, 0);
    hero.addAttribute("FALL_RESISTANCE", 14, 0);

    hero.addKeyBind("AIM", "Ghost Ray", 1);
    hero.addKeyBind("ENERGY_PROJECTION", "Ghost Ray", 1);
    hero.addKeyBind("CHARGE_ICE", "key.chargeIce", 2);
    hero.addKeyBind("INTANGIBILITY", "key.intangibility", 3);
    hero.addKeyBind("INVISIBILITY", "key.invisibility", 4);

    hero.setDefaultScale(0.85);
    hero.setHasProperty(hasProperty);
    hero.supplyFunction("canAim", canAim);
}

 function hasProperty(entity, property) {
     return property == "BREATHE_UNDERWATER" || property == "BREATHE_SPACE";
}

function canAim(entity) {
    return entity.getHeldItem().isEmpty();
}