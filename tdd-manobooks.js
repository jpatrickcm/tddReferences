//https://www.manobook.net/Home/BookRead/147375%209783

let capitulo = { 'capitulo': '1', 'titulo': '', 'contenido': '' };
capitulo.titulo = $("h2.f-l").text().trim();
capitulo.capitulo = capitulo.titulo.split(' ')[1];
for (let i = 0; i < $(".p_sj").length; i++) {
    capitulo.contenido += $(".p_sj").eq(i).text() + '\n\n';
}
console.log(capitulo);