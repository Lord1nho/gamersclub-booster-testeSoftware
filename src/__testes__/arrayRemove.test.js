import { arrayRemove } from "../options/arrayRemove";

//teste
describe('arrayRemove', () => {
    test('remove o valor do array corretamente', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const valueToRemove = 3;
        const expectedOutput = [1, 2, 4, 5];
  
        const result = arrayRemove(inputArray, valueToRemove);
  
        expect(result).toEqual(expectedOutput);
    });

    //melhorando com mais casos de testes

    test('não remove um valor inexistente do array', () =>{
        const inputArray = [1, 2, 3, 4, 5];
        const valueToRemove = 6;

        const result = arrayRemove(inputArray, valueToRemove);
        
        expect(result).toEqual(inputArray);
    });

    test('remove todos os valores do array corretamente', () =>{
        const inputArray = [1, 2, 2, 2, 2];
        const valueToRemove = 2;
        const expectedOutput = [1];

        const result = arrayRemove(inputArray, valueToRemove);

        expect(result).toEqual(expectedOutput);
    });
});