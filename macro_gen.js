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

res += `
macro_quotes: macro_quotes {
	compatible = "zmk,behavior-macro";
	label = "macro_quotes";
	#binding-cells = <0>;
	bindings = <&kp SQT>, <&kp SQT>, <&kp LEFT>;
};
macro_dquotes: macro_dquotes {
	compatible = "zmk,behavior-macro";
	label = "macro_dquotes";
	#binding-cells = <0>;
	bindings = <&kp DQT>, <&kp DQT>, <&kp LEFT>;
};
macro_braces: macro_braces {
	compatible = "zmk,behavior-macro";
	label = "macro_braces";
	#binding-cells = <0>;
	bindings = <&kp LBRC>, <&kp RBRC>, <&kp LEFT>;
};
macro_parens: macro_parens {
	compatible = "zmk,behavior-macro";
	label = "macro_parens";
	#binding-cells = <0>;
	bindings = <&kp LPAR>, <&kp RPAR>, <&kp LEFT>;
};
macro_brackets: macro_brackets {
	compatible = "zmk,behavior-macro";
	label = "macro_brackets";
	#binding-cells = <0>;
	bindings = <&kp LBKT>, <&kp RBKT>, <&kp LEFT>;
};
macro_kinesis: macro_kinesis {
	compatible = "zmk,behavior-macro";
	label = "macro_kinesis";
	#binding-cells = <0>;
	bindings = <&kp LS(K)>, <&kp I>, <&kp N>, <&kp E>, <&kp S>, <&kp I>, <&kp S>;
};
`;

keys.forEach(key => {
    add_kp_macro(key);
    add_shift_macro(key);
});


fs.writeFileSync('config/macros.dtsi', res);
