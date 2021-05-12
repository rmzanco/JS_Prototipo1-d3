function GerarChart(){
    //GERAR UM GRÁFICO D3 DE EXEMPLO.
}

function GerarGraficoAPartirDeTxt(event){

    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){   
        var text = reader.result;
        var jsonObject = GerarJSON(text);       
        GerarGrafico(jsonObject,'#custom-chart');
    };
    console.log(input.files);
    reader.readAsText(input.files[0]);
}

function GerarGrafico(jsonObject,id) { 
    //GERAR UM GRÁFICO D3 COM INPUT PRONTO DE EXEMPLO.
}

function GerarJSON(text) {

    var cells = ConverterStringParaArrayEmFormaDeCelulas(text);
    var headings = ExtrairColunas(cells);
    var jsonObject = MapearColunasParaTransformarEmUmObjeto(cells, headings);
    return jsonObject;
}

function ExtrairColunas(cells) {
    return cells.shift();
}

function ConverterStringParaArrayEmFormaDeCelulas(text) {
    return text.split('\r\n').map(function (element) {
        return element.split(/\s+/);
    });
}

function MapearColunasParaTransformarEmUmObjeto(cells, headings) {
    return cells.map(function (element) {
        var jsonObject = {};
        for (var i = 0, l = element.length; i < l; i++) {
            jsonObject[headings[i]] = isNaN(Number(element[i])) ? element[i] : +element[i];
        }
        return jsonObject;
    });
}