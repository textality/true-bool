module.exports = bool;

function bool(v) {
    if (v === null) return false;
    if (typeof v != 'object') return Boolean(v);
    if (Array.isArray(v)) return Boolean(v.length);
    let name = v.constructor.name;
    if (name == 'Object') {
        for (let k in v) return true;
        return false;
    }
    if (name == 'Map' || name == 'Set') return Boolean(v.size);
    return Boolean(v);
}
