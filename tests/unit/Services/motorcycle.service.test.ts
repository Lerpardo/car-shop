import { expect } from "chai";
import sinon from "sinon";
import { Model } from "mongoose";
import MotorcycleService from "../../../src/Services/MotoService";
import { newMotorcycleInput,newMotorcycleOutput } from "./mocks/moto.mock";

const UNPROCESSABLE = { type: "unprocessable", message: { message: "Invalid mongo id" } };
const NOT_FOUND = { type: "notFound", message: { message: "Motorcycle not found" } };

describe("Valida os retorno do módulo de serviço Motorcycle", function () {
    describe("Valida o método create", function () {
        it("Deveria cadastrar uma nova moto", async function () {
            // Arrange
            sinon.stub(Model, "create").resolves(newMotorcycleOutput);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.create(newMotorcycleInput);
            // Assert
            expect(result).to.be.deep.equal(newMotorcycleOutput);
        });
    })
    describe("Valida o método findById", function () {
        it("Deveria retornar um erro quando id inválido", async function () {
            // Arrange
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.findById("123");
            // Assert
            expect(result).to.be.deep.equal(UNPROCESSABLE);
        })

        it("Deveria retornar um erro de moto quando o ID não encontrado", async function () {
            // Arrange
            sinon.stub(Model, "findById").resolves(null);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.findById("1111222233330000ffffcccc");
            // Assert
            expect(result).to.be.deep.equal(NOT_FOUND);
        })

        afterEach(function () {
            sinon.restore();
        })

        it("Deveria retornar uma moto pelo id com sucesso", async function () {
            // Arrange
            sinon.stub(Model, "findById").resolves(newMotorcycleOutput);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.findById("6348513f34c397abcad040b2");
            // Assert
            expect(result).to.be.deep.equal({ type: "success", message: newMotorcycleOutput });
        })
    })

    describe("Valida o método findAll", function () {
        it("Deveria retornar uma lista de motos", async function () {
            // Arrange
            sinon.stub(Model, "find").resolves([newMotorcycleOutput]);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.findAll();
            // Assert
            expect(result).to.be.deep.equal([newMotorcycleOutput]);
        })
    })

    describe("Valida o método update", function () {
        it("Deveria retornar um erro quando id inválido", async function () {
            // Arrange
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.update("123", newMotorcycleInput);
            // Assert
            expect(result).to.be.deep.equal(UNPROCESSABLE);
        })

        it("Deveria retornar um erro de moto quando o ID não encontrado", async function () {
            // Arrange
            sinon.stub(Model, "findByIdAndUpdate").resolves(null);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.update("1111222233330000ffffcccc", newMotorcycleInput);
            // Assert
            expect(result).to.be.deep.equal(NOT_FOUND);
        })

        afterEach(function () {
            sinon.restore();
        })

        it("Deveria atualizar uma moto pelo id com sucesso", async function () {
            // Arrange
            sinon.stub(Model, "findByIdAndUpdate").resolves(newMotorcycleOutput);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.update("6348513f34c397abcad040b2", newMotorcycleInput);
            // Assert
            expect(result).to.be.deep.equal({ type: "success", message: newMotorcycleOutput });
        })
    })

    describe("Valida o método delete", function () {
        it("Deveria retornar um erro quando id inválido", async function () {
            // Arrange
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.delete("123");
            // Assert
            expect(result).to.be.deep.equal(UNPROCESSABLE);
        })

        it("Deveria retornar um erro de moto quando o ID não encontrado", async function () {
            // Arrange
            sinon.stub(Model, "findByIdAndDelete").resolves(null);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.delete("1111222233330000ffffcccc");
            // Assert
            expect(result).to.be.deep.equal(NOT_FOUND);
        })

        afterEach(function () {
            sinon.restore();
        })

        it("Deveria deletar uma moto pelo id com sucesso", async function () {
            // Arrange
            sinon.stub(Model, "findByIdAndDelete").resolves(newMotorcycleOutput);
            // Act
            const motoService = new MotorcycleService();
            const result = await motoService.delete("6348513f34c397abcad040b2");
            // Assert
            expect(result).to.be.deep.equal({ type: 'noContent', message: '' });
        })
    })
})