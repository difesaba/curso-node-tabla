const fs = require('fs');

const crearArchivo = async (base = 5) => {

    try {
        console.log('===================');
        console.log(`    TABLA DEL ${base}   `);
        console.log('===================');
        let salida = '';

        for (let index = 1; index <= 10; index++) {
            salida += `${base} X ${index} = ${base * index} \n`;
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}
