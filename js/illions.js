function getSIprefixes(i) {
    let SIprefixes = [
        "yocto", "zepto", "atto", "femto", "pico",
        "nano", "micro", "milli", "", "kilo",
        "mega", "giga", "tera", "peta", "exa",
        "zetta", "yotta", "ronna", "quetta", "ultra"
    ];

    return SIprefixes[i];
}
