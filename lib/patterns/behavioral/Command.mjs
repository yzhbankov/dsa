class ModelA {
    run(params) {
        // ...
        console.log('A. Do something...', params);
    }
}
class ModelB {
    run(params) {
        // ...
        console.log('A. Do something...', params);
    }
}

class UseCaseOne {
    static validateRules = {
        id: 'number'
    }

    execute(params) {
        (new ModelA()).run(params);
    }
}

class UseCaseTwo {
    static validateRules = {
        name: 'string'
    }
    execute(params) {
        (new ModelB()).run(params);
    }
}
function validate(rules, params) {
    // ... validate logic
    return params;
}

function useCaseRunner(UseCase) {
    return function(rawParams) {
        const params = validate(UseCase.validateRules, rawParams);
        if (params) {
            return (new UseCase()).execute(params);
        } else {
            throw new Error('Validation error');
        }
    }
}

useCaseRunner(UseCaseOne)({ x: 1 });
