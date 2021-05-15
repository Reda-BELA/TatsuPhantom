function init(hero) {
    hero.setName("Killer Frost (Velocity)/Season 6");
    hero.setTier(3);
    
    hero.setHelmet("item.superhero_armor.piece.hair");
    hero.setChestplate("item.superhero_armor.piece.jacket");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    
    hero.addAbilities("fiskheroes:cryokinesis", "fiskheroes:super_speed", "fiskheroes:enhanced_reflexes", "fiskheroes:cellular_regeneration", "fiskheroes:accelerated_perception");
    hero.addWeaknesses("fiskheroes:heat");
    hero.addAttribute("BASE_SPEED_LEVELS", 4.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 3.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 2.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.2, 1);

    hero.supplyFunction("getTransformTimerTicks", 20);
    hero.supplyFunction("getTransformTimerRegen", 4.5);
    
    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("DECELERATE", "key.decelerate", 3);
    hero.addKeyBind("ACCELERATE", "key.accelerate", 4);
    hero.addKeyBind("CHARGE_ICE", "key.chargeIce", 5);

    function isModifierEnabled(entity, modifier) {
        switch (modifier) {
        case "fiskheroes:super_speed":
            return entity.getData("fiskheroes:transform_timer") == 0;
        default:
            return true;
        }
    }
}
