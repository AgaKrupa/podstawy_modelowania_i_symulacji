const { max } = require('lodash');

const R = 1;

const s = (t, w, c) => (c * (c * R * w * Math.cos(t * w) - Math.sin(t * w))) / (1 + Math.pow(c, 2) * Math.pow(R, 2) * Math.pow(w, 2));

const sd = (t, w, c) =>
    (c * (-w * Math.cos(t * w) - c * R * Math.pow(w, 2) * Math.sin(t * w))) / (1 + Math.pow(c, 2) * Math.pow(R, 2) * Math.pow(w, 2));

const createData = (c) => {
    const amps = [];
    const ampsd = [];
    for (let k = 1; k < 101; k++) {
        const w = k / 10;
        const tabs = [];
        const tabsd = [];
        const n = 101;
        for (let i = 0; i < n; i++) {
            const t = ((2 * Math.PI) / w / n) * i;
            tabs.push(s(t, w, c));
            tabsd.push(sd(t, w, c));
        }
        amps.push([Math.log10(w), max(tabs)]);
        ampsd.push([Math.log10(w), max(tabsd)]);
    }
    return [amps, ampsd];
};

module.exports = { createData };
