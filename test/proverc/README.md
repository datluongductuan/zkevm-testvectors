## Run prover C inputs
Tool to run all inputs in inputs-executor folder from zkevm-testvectors repo. The inputs are formated and sent to the deployed proverC throught GRPC.
How to run:  
```
npx mocha run-inputs.test.js
````

It's necessary to have cloned the repo `zkevm-comms-protocol` in the same folder