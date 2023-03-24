import { expect } from "chai";
import sinon from "sinon";
import { Model } from "mongoose";
// import ICar from "../../../src/Interfaces/ICar";
import CarService from "../../../src/Services/CarService";
import { newCarInput, newCarOutput } from "./mocks/car.mock";
// import Car from "../../../src/Domains/Car";

describe('Valida os retorno do módulo de serviço Car', async () => {
    describe('Valida o método create', async () => {
    it('Deveria cadastrar um novo carro', async () => {
        // Arrange
        sinon.stub(Model, 'create').resolves(newCarOutput);
        // Act
        const carService = new CarService();
        const result = await carService.create(newCarInput);
        // Assert
        expect(result).to.be.deep.equal(newCarOutput);
    })
    })
    describe('Valida o método findById', async () => {

    it('Deveria retornar um erro de id inválido', async () => {
        // Arrange
        // Act
        const carService = new CarService();
        const result = await carService.findById('123');
        // Assert
        expect(result).to.be.deep.equal({ type: 'unprocessable', message: { message: 'Invalid mongo id' }});

    })

    it('Deveria retornar um erro de carro não encontrado', async () => {
        // Arrange
        sinon.stub(Model, 'findById').resolves(null);
        // Act
        const carService = new CarService();
        const result = await carService.findById('1111222233330000ffffcccc');
        // Assert
        expect(result).to.be.deep.equal({ type: 'notFound', message: { message: 'Car not found' }});
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Deveria retornar um carro pelo id com sucesso', async () => {
        // Arrange
        sinon.stub(Model, 'findById').resolves(newCarOutput);
        // Act
        const carService = new CarService();
        const result = await carService.findById('6348513f34c397abcad040b2');
        // Assert
        expect(result).to.be.deep.equal({type: 'success', message: newCarOutput});
    })
})

describe('Valida o método findAll', async () => {
    it('Deveria retornar uma lista de carros', async () => {
        // Arrange
        sinon.stub(Model, 'find').resolves([newCarOutput]);
        // Act
        const carService = new CarService();
        const result = await carService.findAll();
        // Assert
        expect(result).to.be.deep.equal([newCarOutput]);
    })
})

describe('Valida o método update', async () => {
    it('Deveria retornar um erro de id inválido', async () => {
        // Arrange
        // Act
        const carService = new CarService();
        const result = await carService.update('123', newCarInput);
        // Assert
        expect(result).to.be.deep.equal({ type: 'unprocessable', message: { message: 'Invalid mongo id' }});
    })

    it('Deveria retornar um erro de carro não encontrado', async () => {
        // Arrange
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        // Act
        const carService = new CarService();
        const result = await carService.update('1111222233330000ffffcccc', newCarInput);
        // Assert
        expect(result).to.be.deep.equal({ type: 'notFound', message: { message: 'Car not found' }});
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Deveria atualizar um carro pelo id com sucesso', async () => {
        // Arrange
        sinon.stub(Model, 'findByIdAndUpdate').resolves(newCarOutput);
        // Act
        const carService = new CarService();
        const result = await carService.update('6348513f34c397abcad040b2', newCarInput);
        // Assert
        expect(result).to.be.deep.equal({type: 'success', message: newCarOutput});
    })
})

describe('Valida o método delete', async () => {
    it('Deveria retornar um erro de id inválido', async () => {
        // Arrange
        // Act
        const carService = new CarService();
        const result = await carService.delete('123');
        // Assert
        expect(result).to.be.deep.equal({ type: 'unprocessable', message: { message: 'Invalid mongo id' }});
    })

    it('Deveria retornar um erro de carro não encontrado', async () => {
        // Arrange
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);
        // Act
        const carService = new CarService();
        const result = await carService.delete('1111222233330000ffffcccc');
        // Assert
        expect(result).to.be.deep.equal({ type: 'notFound', message: { message: 'Car not found' }});
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Deveria deletar um carro pelo id com sucesso', async () => {
        // Arrange
        sinon.stub(Model, 'findByIdAndDelete').resolves(newCarOutput);
        // Act
        const carService = new CarService();
        const result = await carService.delete('6348513f34c397abcad040b2');
        // Assert
        expect(result).to.be.deep.equal({type: 'noContent', message: ''});
})
})
})