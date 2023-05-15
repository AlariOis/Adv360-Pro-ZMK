const fs = require('fs');

let res = '';

function add_macro(name, binding) {
    res += `macro_${name}: macro_${name} {\n`;
    res += `   compatible = "zmk,behavior-macro";\n`;
    res += `   label = "macro_sqt";\n`;
    res += `   #binding-cells = <0>;\n`;
    res += `   bindings = <${binding}>;\n`;
    res += `};\n`;
    res += `\n`;
};

function add_kp_macro(key) {
    add_macro(key.toLowerCase(), `&kp ${key}`);
}

function add_shift_macro(key) {
    add_macro(`shift_${key.toLowerCase()}`, `&kp LS(${key})`);
}


const keys = [];

// Loop through letters
for (i = 65; i <= 90; i++) {
    keys.push(String.fromCharCode(i));
}

for (i = 0; i < 10; i++) {
    keys.push('N' + i);
}

keys.push('SQT');
keys.push('GRAVE');
keys.push('LBKT');
keys.push('RBKT');
keys.push('EQUAL');
keys.push('COMMA');
keys.push('DOT');
keys.push('MINUS');
keys.push('BSLH');
keys.push('FSLH');
keys.push('SEMI');

keys.push('GRAVE');

keys.forEach(key => {
    add_kp_macro(key);
    add_shift_macro(key);
});


fs.writeFileSync('config/macros.gen.dtsi', res);
