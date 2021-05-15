function init(hero) {
    hero.setName("Deku/Season 2");
    hero.setTier(3);

    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    
    hero.addAbilities("fiskheroes:super_speed", "fiskheroes:leaping", "fiskheroes:geokinesis", "fiskheroes:enhanced_reflexes", "fiskheroes:superhuman_durability");
    hero.addAttribute("BASE_SPEED_LEVELS", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 6.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.5, 0);
    hero.addAttribute("PUNCH_DAMAGE", 4.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.2, 1);
    hero.addAttribute("SWORD_DAMAGE", -0.45, 1);

    hero.addKeyBind("SUPER_SPEED", "One For All: Full Cowl 5%", 1);
    hero.addKeyBind("DECELERATE", "key.decelerate", 2);
    hero.addKeyBind("ACCELERATE", "key.accelerate", 3);
    hero.addKeyBind("GROUND_SMASH", "Detroit Smash", 4);
	
	hero.setDefaultScale(0.97);

}