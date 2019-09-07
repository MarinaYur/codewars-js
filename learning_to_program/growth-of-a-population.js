function nbYear(p0, percent, aug, p) {
    let per = percent / 100;
    let amount = p0;
    let year = 0;

    do {
        amount = amount + amount * per + aug;
        year += 1;
    } while (amount < p);

    return year;
}
