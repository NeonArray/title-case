module.exports = function (subject) {

    if (typeof subject !== 'string' || subject === '') {
        throw new Error('`subject` argument is not a string or is of zero length', subject);
    }

    let copy = subject.slice(0).replace('_', ' ').toLowerCase().trim();

    const coordinatingConjunctions = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet'];
    const prepositions = ['about', 'above', 'across', 'after', 'against', 'along', 'among', 'an', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'by', 'despite', 'down', 'during', 'except', 'from', 'in', 'inside', 'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'per', 'since', 'through', 'throughout', 'till', 'to', 'toward', 'under', 'underneath', 'until', 'up', 'upon', 'via', 'with', 'within', 'without', 'versus'];


    return copy.split(' ').map((word) => {

        if (copy.indexOf(word) !== 0 && prepositions.indexOf(word) !== -1) {
            return word;
        } else if (prepositions.indexOf(word) !== -1) {
            return word;
        }

        return word.replace(/(^[A-Za-z])/, (char) => char.toUpperCase());
    }).join(' ');
};