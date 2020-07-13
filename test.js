let elements = [];
const idReg = /^([A-Z]+)-(.+)/;
var social_name = 'FB-,IG-vip_bottles_';
social_name = 'EM-Biro  Organisasi  Setda  Prov.  Kalbar,IG-@organisasi_kalbar,';

(social_name || "").split(',').map((pat) => {
    res = pat.match(idReg);
    if (res) {
        elements.push({
            social_platform: res[1],
            social_name: res[2],
            social_type: ""
        });
    }
});

console.log(elements);
