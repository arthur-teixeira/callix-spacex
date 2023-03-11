import { Request, Response } from "express";
import LaunchesController from "../../controllers/LaunchesController";
import HttpClientStub from "../stubs/HttpClientStub";
import sinon, { SinonStub } from 'sinon';
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

before(() => {
    chai.use(sinonChai);
});

type Run = {
    response: any;
    route: string;
    controllerMethod: keyof LaunchesController;
};

describe('LaunchesController', () => {
    let subject: LaunchesController;
    let httpClient: HttpClientStub;
    let mockJson: SinonStub;
    let mockNext: SinonStub;

    let mockRequest: Request;
    let mockResponse: Response;

    beforeEach(() => {
        httpClient = new HttpClientStub();
        subject = new LaunchesController(httpClient);

        mockNext = sinon.stub();
        mockJson = sinon.stub();
        mockRequest = <Request>{};
        mockResponse = <Response>{};
        mockResponse.json = mockJson;
    });

    const runs: Run[] = [
        {
            response: {
                name: 'USSF-44',
            },
            route: 'launches/next',
            controllerMethod: 'getNextLaunch',
        },
        {
            response: [{
                name: 'USSF-44',
            }, {
                name: 'FalconSat',
            }],
            route: 'launches/previous',
            controllerMethod: 'getPastLaunches',
        },
        {
            response: {
                name: 'FalconSat',
            },
            route: 'launches/next',
            controllerMethod: 'getNextLaunch',
        },
        {
            response: [{
                name: 'FalconSat',
            }, {
                name: 'DemoSat',
            }],
            route: 'launches/upcoming',
            controllerMethod: 'getUpcomingLaunches',
        }
    ];

    runs.forEach((run) => {
        it(`Should call correct endpoint when ${run.controllerMethod} is called`, async () => {
            httpClient.setResponse(run.response);

            await subject[run.controllerMethod](mockRequest, mockResponse, mockNext);

            expect(mockNext).to.be.calledOnceWithExactly();
            expect(mockJson).to.be.calledOnceWithExactly(run.response);
        });

        it(`Should handle error correctly when ${run.controllerMethod} is called`, async () => {
            const error = new Error('Unexpected error');
            httpClient.setError(error);

            await subject[run.controllerMethod](mockRequest, mockResponse, mockNext);

            expect(mockNext).to.have.been.calledOnceWithExactly(error);
        });
    });
});
